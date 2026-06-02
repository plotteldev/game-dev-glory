"use client";

import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";
const calLink = bookingUrl
  .replace(/^https?:\/\/(app\.)?cal\.com\//, "")
  .replace(/^\/+/, "");
const namespace = "game-dev-glory-consult";
const embedId = "cal-booking-embed";

function buildCalEmbedScript(link: string) {
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
      var embedSelector = ${JSON.stringify(`#${embedId}`)};

      function pushDataLayer(eventName, detail) {
        var data = detail && detail.data ? detail.data : {};
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: eventName,
          booking_uid: data.uid,
          booking_title: data.title,
          booking_start_time: data.startTime,
          booking_end_time: data.endTime,
          booking_event_type_id: data.eventTypeId,
          booking_status: data.status,
          booking_payment_required: data.paymentRequired,
          booking_value: 150,
          currency: "USD"
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
          pushDataLayer("cal_booker_viewed", event.detail);
        }
      });
      window.Cal.ns[namespace]("on", {
        action: "bookingSuccessfulV2",
        callback: function (event) {
          pushDataLayer("paid_consult_booked", event.detail);
        }
      });
    })();
  `;
}

export function CalBookingEmbed() {
  if (!calLink) {
    return (
      <div className="rounded border border-border bg-surface p-6 text-muted">
        Booking is not configured yet.
      </div>
    );
  }

  return (
    <>
      <div
        id={embedId}
        className="min-h-[720px] overflow-hidden rounded-md border border-border bg-surface"
      />
      <Script id="cal-embed-loader" strategy="afterInteractive">
        {buildCalEmbedScript(calLink)}
      </Script>
    </>
  );
}
