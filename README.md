# Game Dev Glory

A minimal landing page for the Game Programming Fundamentals private coaching offer.

The site sends beginners to book a free 15-minute start call. It does not collect
payment directly on the site.

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Set `NEXT_PUBLIC_BOOKING_URL` in `.env.local` to the Cal.com start-call URL:

```bash
NEXT_PUBLIC_BOOKING_URL=https://cal.com/matt-noone-avjm8m/15min
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
- Primary CTAs use `Book a 15-minute start call`.
- Booking CTAs route to `/book`.
- `/apply` redirects to `/book` for old links.
- `/book` links to the Cal.com free 15-minute start call.
- The start call is used to understand goal, experience, setup, schedule, effort
  level, and what happens next if the student wants to join.
- The page does not show a public price.
- Payment and joining details happen after the start call.
- Cal.com can use its own confirmation flow. The site keeps `/book/confirmed` available if a
  custom redirect is added later.

## DigitalOcean App Platform

This repository includes a DigitalOcean App Platform spec at `.do/app.yaml`.

Use it to deploy as a Node.js web service:

- Build command: `npm run build`
- Run command: `npm run start`
- HTTP port: `3000`
- Environment variable: `NEXT_PUBLIC_BOOKING_URL=https://cal.com/matt-noone-avjm8m/15min`
- Environment variable: `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`

After the app is live, connect the production domain in DigitalOcean and run a real start-call
booking test through Cal.com.
