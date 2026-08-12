import Script from "next/script";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const googleAdsId = "AW-18205791019";

export function GoogleTagManager() {
  return (
    <>
      <Script id="analytics-click-events" strategy="afterInteractive">
        {`
          document.addEventListener('click', function(event) {
            var element = event.target instanceof Element
              ? event.target.closest('[data-analytics-event]')
              : null;

            if (!element) return;

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: element.getAttribute('data-analytics-event'),
              link_url: element.getAttribute('href'),
              link_text: element.textContent ? element.textContent.trim() : ''
            });
          });
        `}
      </Script>
      {gtmId ? (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      ) : null}
      <Script
        id="google-ads-tag"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAdsId}');
        `}
      </Script>
    </>
  );
}

export function GoogleTagManagerNoScript() {
  if (!gtmId) {
    return null;
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
