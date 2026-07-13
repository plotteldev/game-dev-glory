# Game Dev Glory

A minimal landing page for the Game Dev Glory async Unity coaching offer.

The site sends students to a Stripe Payment Link for the $99/month USD coaching
subscription. Stripe handles checkout, invoices, payment methods, subscription
status, and cancellation.

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Set the Stripe-hosted billing links in `.env.local`:

```bash
NEXT_PUBLIC_STRIPE_COACHING_PAYMENT_LINK=https://buy.stripe.com/3cIfZi2oT2YYet3flr1kA01
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL=https://billing.stripe.com/p/login/14AeVegfJeHGacNehn1kA00
NEXT_PUBLIC_DISCORD_INVITE_URL=https://discord.gg/NQeegWAAJM
```

Set Postmark for the free Unity question form:

```bash
POSTMARK_SERVER_TOKEN=your-postmark-server-token
POSTMARK_FROM_EMAIL=Game Dev Glory <info@gamedevglory.com>
POSTMARK_MESSAGE_STREAM=outbound
FREE_QUESTION_TO_EMAIL=info@gamedevglory.com
```

Set `NEXT_PUBLIC_GTM_ID` when Google Tag Manager is ready.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## OBS Image Overlays

Transparent 1920x1080 PNG overlays live in `public/obs/`:

- `taskbar-mask-64px-1920x1080.png` for the usual always-on taskbar cover.
- `taskbar-mask-48px-1920x1080.png` for a tighter taskbar cover.
- `lower-third-title-1920x1080.png` for video starts or section breaks.
- `corner-logo-bug-1920x1080.png` for subtle persistent branding.

Add them to OBS as Image sources above the display/window capture. Use one
taskbar mask as an always-on source, and toggle the lower-third or corner bug
only when useful. The unused canvas area in each PNG is transparent.

Regenerate them with:

```bash
npm run obs:overlays
```

## Notes

- The site does not use a database.
- The site does not use Stripe SDK, webhooks, API routes, local accounts, or
  local subscription state.
- `/free-question` uses a Server Action and Postmark to email one free Unity
  question. Files are shared as links rather than uploaded to the site.
- Stripe is the source of truth for subscribers, cancellations, invoices,
  refunds, and failed payments.
- Primary coaching CTAs point to `NEXT_PUBLIC_STRIPE_COACHING_PAYMENT_LINK`.
- `/book` is a lightweight join page for old links.
- `/apply` and `/book/start-learning` redirect to the configured coaching
  Payment Link.
- `/join/confirmed` is the post-payment success page configured in Stripe.
- `/billing` links customers to the hosted Stripe Customer Portal.
- Cancellations happen in Stripe and take effect at the end of the current paid
  billing period.

## DigitalOcean App Platform

This repository includes a DigitalOcean App Platform spec at `.do/app.yaml`.

Use it to deploy as a Node.js web service:

- Build command: `npm run build`
- Run command: `npm run start`
- HTTP port: `3000`
- Environment variable: `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`
- Environment variable: `NEXT_PUBLIC_STRIPE_COACHING_PAYMENT_LINK=https://buy.stripe.com/3cIfZi2oT2YYet3flr1kA01`
- Environment variable: `NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL=https://billing.stripe.com/p/login/14AeVegfJeHGacNehn1kA00`
- Environment variable: `NEXT_PUBLIC_DISCORD_INVITE_URL=https://discord.gg/NQeegWAAJM`
- Secret environment variable: `POSTMARK_SERVER_TOKEN=...`
- Environment variable: `POSTMARK_FROM_EMAIL=Game Dev Glory <info@gamedevglory.com>`
- Environment variable: `POSTMARK_MESSAGE_STREAM=outbound`
- Environment variable: `FREE_QUESTION_TO_EMAIL=info@gamedevglory.com`

Before going live, create the Stripe product, recurring price, Payment Link, and
Customer Portal link. Configure the Payment Link success redirect to
`https://gamedevglory.com/join/confirmed`, then run a Stripe test-mode checkout
and customer portal cancellation test.

The Customer Portal value must be the activated hosted login URL, not the
`bpc_...` portal configuration ID shown in some Stripe settings screens.
If the hosted portal is not ready, leave `NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL`
empty so billing links fall back to email instead of a broken placeholder URL.
