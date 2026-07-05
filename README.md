# Game Dev Glory

A minimal landing page for the Game Programming Fundamentals private coaching offer.

The site sends beginners to request a free 15-minute portfolio roadmap call. It
does not collect payment directly on the site.

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Set the booking email delivery variables in `.env.local`:

```bash
POSTMARK_SERVER_TOKEN=postmark-server-token
POSTMARK_MESSAGE_STREAM=outbound
BOOKING_TO_EMAIL=info@gamedevglory.com
BOOKING_FROM_EMAIL=Game Dev Glory <bookings@gamedevglory.com>
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

## Notes

- The site does not use a database.
- Primary CTAs use `Book a Free Portfolio Roadmap Call`.
- Booking CTAs route to `/book`.
- `/apply` redirects to `/book` for old links.
- `/book` collects portfolio-roadmap-call details, emails them to
  `BOOKING_TO_EMAIL`, and sends the applicant a confirmation email.
- The portfolio roadmap call is used to understand goal, experience, setup,
  schedule, effort level, and what happens next if the student wants to join.
- The page does not show a public price.
- Payment, joining details, and calendar links happen by email after the request.
- Email delivery uses Postmark. `BOOKING_FROM_EMAIL` must be a confirmed
  sender signature or a sender on a verified Postmark domain.

## DigitalOcean App Platform

This repository includes a DigitalOcean App Platform spec at `.do/app.yaml`.

Use it to deploy as a Node.js web service:

- Build command: `npm run build`
- Run command: `npm run start`
- HTTP port: `3000`
- Environment variable: `POSTMARK_SERVER_TOKEN=postmark-server-token`
- Environment variable: `POSTMARK_MESSAGE_STREAM=outbound`
- Environment variable: `BOOKING_TO_EMAIL=info@gamedevglory.com`
- Environment variable: `BOOKING_FROM_EMAIL=Game Dev Glory <bookings@gamedevglory.com>`
- Environment variable: `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`

Before going live, confirm `BOOKING_FROM_EMAIL` in Postmark, set the live
`POSTMARK_SERVER_TOKEN` in DigitalOcean, then run a real `/book` form submission
test. Postmark domain authentication uses the DNS records shown in Postmark's
sender signature or domain settings; keep Google Workspace MX records in place
for normal inbox email.
