# Game Dev Glory

A minimal landing page for game development coaching: a focused Unity consult funnel and a
separate beginner game programming starter funnel. Sessions are 60 minutes, $150 USD.

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Set `NEXT_PUBLIC_BOOKING_URL` in `.env.local` to the paid Unity consult Cal.com URL.
Set `NEXT_PUBLIC_START_LEARNING_BOOKING_URL` to the beginner starter session booking URL.
If it is omitted, `/book/start-learning` falls back to `NEXT_PUBLIC_BOOKING_URL`.
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
- Unity consult CTAs route to `/book`.
- Beginner game programming CTAs route to `/book/start-learning`.
- The beginner landing page is `/start-learning-game-programming`.
- Unity consult booking reads from `NEXT_PUBLIC_BOOKING_URL`.
- Starter session booking reads from `NEXT_PUBLIC_START_LEARNING_BOOKING_URL`, then falls back
  to `NEXT_PUBLIC_BOOKING_URL`.
- The `/book` page sends buyers to the external paid Cal.com booking flow.
- Configure the Unity consult Cal.com event to collect a short intake and require $150 USD
  payment before booking confirmation.
- Recommended required intake questions: "What are you building?", "What is currently stuck or
  unclear?", and "What would make the session useful for you?"
- Recommended optional intake questions: project links/files/notes, and Unity version/platform/tools.
- If available in Cal.com, set the successful booking redirect to `/book/confirmed`.
- The `/book/start-learning` page embeds Cal.com and pushes `starter_booker_viewed` and
  `starter_session_booked` events to Google Tag Manager's `dataLayer`.
- The consult price is $150 USD and the duration is 60 minutes.

## DigitalOcean App Platform

This repository includes a DigitalOcean App Platform spec at `.do/app.yaml`.

Use it to deploy as a Node.js web service:

- Build command: `npm run build`
- Run command: `npm run start`
- HTTP port: `3000`
- Environment variable: `NEXT_PUBLIC_BOOKING_URL=https://cal.com/matt-noone-avjm8m/60min`
- Environment variable: `NEXT_PUBLIC_START_LEARNING_BOOKING_URL=https://cal.com/...`
- Environment variable: `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`

After the app is live, connect the production domain in DigitalOcean and run a real booking test through Cal.com.
