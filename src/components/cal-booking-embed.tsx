type CalBookingEmbedProps = {
  bookingUrl?: string;
  namespace?: string;
  embedId?: string;
  offerName?: string;
  bookingValue?: number;
  viewedEventName?: string;
  bookedEventName?: string;
  conversionSendTo?: string;
};

const defaultBookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";
const defaultNamespace = "game-dev-glory-consult";
const defaultEmbedId = "cal-booking-embed";
const paidBookingConversionSendTo = "AW-18205791019/dmgeCNiY6rccEKummelD";

function getCalLink(bookingUrl: string) {
  return bookingUrl.replace(/^https?:\/\/(app\.)?cal\.com\//, "").replace(/^\/+/, "");
}

function buildCalEmbedScript({
  link,
  namespace,
  embedId,
  offerName,
  bookingValue,
  viewedEventName,
  bookedEventName,
  conversionSendTo,
}: {
  link: string;
  namespace: string;
  embedId: string;
  offerName: string;
  bookingValue: number;
  viewedEventName: string;
  bookedEventName: string;
  conversionSendTo: string;
}) {
  return `
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    (function () {
      var namespace = ${JSON.stringify(namespace)};
      var calLink = ${JSON.stringify(link)};
      var embedId = ${JSON.stringify(embedId)};
      var embedSelector = ${JSON.stringify(`#${embedId}`)};

      function pushDataLayer(eventName, detail) {
        var data = detail && detail.data ? detail.data : {};
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: eventName,
          booking_offer: ${JSON.stringify(offerName)},
          booking_uid: data.uid,
          booking_title: data.title,
          booking_start_time: data.startTime,
          booking_end_time: data.endTime,
          booking_event_type_id: data.eventTypeId,
          booking_status: data.status,
          booking_payment_required: data.paymentRequired,
          booking_value: ${JSON.stringify(bookingValue)},
          currency: "USD"
        });
      }

      function reportPaidBookingConversion(detail) {
        var data = detail && detail.data ? detail.data : {};

        if (typeof window.gtag !== "function") {
          return;
        }

        window.gtag("event", "conversion", {
          send_to: ${JSON.stringify(conversionSendTo)},
          value: ${JSON.stringify(bookingValue)},
          currency: "USD",
          transaction_id: data.uid
        });
      }

      window.Cal("init", namespace, { origin: "https://app.cal.com" });
      window.Cal.ns[namespace]("inline", {
        elementOrSelector: embedSelector,
        calLink: calLink,
        config: { layout: "month_view" }
      });
      window.Cal.ns[namespace]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view"
      });
      window.Cal.ns[namespace]("on", {
        action: "bookerViewed",
        callback: function (event) {
          pushDataLayer(${JSON.stringify(viewedEventName)}, event.detail);
        }
      });
      window.Cal.ns[namespace]("on", {
        action: "bookingSuccessfulV2",
        callback: function (event) {
          pushDataLayer(${JSON.stringify(bookedEventName)}, event.detail);
          reportPaidBookingConversion(event.detail);
        }
      });

      window.setTimeout(function () {
        var loading = document.getElementById(embedId + "-loading");
        if (loading) loading.remove();
      }, 1500);
    })();
  `;
}

export function CalBookingEmbed({
  bookingUrl = defaultBookingUrl,
  namespace = defaultNamespace,
  embedId = defaultEmbedId,
  offerName = "unity_consult",
  bookingValue = 150,
  viewedEventName = "cal_booker_viewed",
  bookedEventName = "paid_consult_booked",
  conversionSendTo = paidBookingConversionSendTo,
}: CalBookingEmbedProps) {
  const calLink = getCalLink(bookingUrl);

  if (!calLink) {
    return (
      <div className="rounded border border-border bg-surface p-6 text-muted">
        Booking is not configured yet.
      </div>
    );
  }

  return (
    <div className="rounded-md border border-border bg-surface p-4">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">Secure booking calendar</p>
          <p className="mt-1 text-sm text-muted">
            60 minutes. USD $150. Online. Payment is handled by Cal.com.
          </p>
        </div>
        <a
          className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md border border-brand-yellow bg-brand-yellow px-4 py-2 text-sm font-semibold text-background transition hover:bg-[#ffd95f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
          href={bookingUrl}
          rel="noreferrer"
          target="_blank"
        >
          Open in Cal.com
        </a>
      </div>
      <div
        id={embedId}
        className="relative h-[720px] overflow-hidden rounded-md border border-border bg-background/45"
      >
        <style>{`#${embedId} .cal-embed { visibility: visible !important; }`}</style>
        <div
          id={`${embedId}-loading`}
          className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 px-6 text-center text-sm leading-6 text-muted"
        >
          Loading the Cal.com calendar. If it does not appear, use the direct booking link above.
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: buildCalEmbedScript({
            link: calLink,
            namespace,
            embedId,
            offerName,
            bookingValue,
            viewedEventName,
            bookedEventName,
            conversionSendTo,
          }),
        }}
      />
    </div>
  );
}
