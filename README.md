# Game Dev Glory

Game Dev Glory is a beginner game programming funnel:

- Free Gamer to Game Dev Roadmap PDF
- 1-on-1 coaching request
- First Game Coaching

The site is a Next.js App Router app with static funnel pages, native website
forms, and server-side Loops integration points.

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Set the Loops funnel values:

```bash
LOOPS_API_KEY=
LOOPS_ROADMAP_EVENT_NAME=roadmap_signup
LOOPS_ROADMAP_MAILING_LIST_ID=
LOOPS_COACHING_REQUEST_EVENT_NAME=coaching_request_submitted
LOOPS_COACHING_REQUEST_MAILING_LIST_ID=
LOOPS_COACHING_NOTIFICATION_TRANSACTIONAL_ID=
LOOPS_COACHING_CONFIRMATION_TRANSACTIONAL_ID=
COACHING_REQUEST_RECIPIENT_EMAIL=info@gamedevglory.com
```

The public forms submit to local API routes (`/api/roadmap` and `/api/coaching`).
No embedded third-party forms are used. Until Loops is configured, form
submissions redirect back with a configuration message.

Set `NEXT_PUBLIC_GTM_ID` when Google Tag Manager is ready.

Legacy Stripe and Discord variables are still supported for existing billing and
post-payment support pages:

```bash
NEXT_PUBLIC_STRIPE_COACHING_PAYMENT_LINK=
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL=
NEXT_PUBLIC_DISCORD_INVITE_URL=
```

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

## Funnel Routes

- `/` is the main coaching offer page.
- `/roadmap` is the free Gamer to Game Dev Roadmap PDF opt-in.
- `/roadmap/confirmed` confirms the roadmap request.
- `/coaching` is the 1-on-1 coaching request form.
- `/coaching/confirmed` confirms coaching details were received.
- `/dream-game-roadmap-session`, `/blueprint`, `/book`, and `/book/start-learning` redirect to the roadmap.
- `/first-playable-coaching` redirects to the homepage.
- `/join` redirects to the coaching request page.
- `/breakout-mini-course`, `/free-question`, and `/start-learning-game-programming` redirect to the roadmap.
- `/billing` and `/join/confirmed` remain for legacy Stripe subscription support.

## OBS Image Overlays

Transparent 1920x1080 PNG overlays live in `public/obs/`:

- `taskbar-mask-64px-1920x1080.png` for the usual always-on taskbar cover.
- `taskbar-mask-48px-1920x1080.png` for a tighter taskbar cover.
- `lower-third-title-1920x1080.png` for video starts or section breaks.
- `corner-logo-bug-1920x1080.png` for subtle persistent branding.

Regenerate them with:

```bash
npm run obs:overlays
```

## DigitalOcean App Platform

This repository includes a DigitalOcean App Platform spec at `.do/app.yaml`.

Use it to deploy as a Node.js web service:

- Build command: `npm run build`
- Run command: `npm run start`
- HTTP port: `3000`
- Environment variable: `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`
- Runtime secret: `LOOPS_API_KEY`
- Runtime variable: `LOOPS_ROADMAP_EVENT_NAME=roadmap_signup`
- Runtime variable: `LOOPS_ROADMAP_MAILING_LIST_ID=<optional Loops list id>`
- Runtime variable: `LOOPS_COACHING_REQUEST_EVENT_NAME=coaching_request_submitted`
- Runtime variable: `LOOPS_COACHING_REQUEST_MAILING_LIST_ID=<optional Loops list id>`
- Runtime variable: `LOOPS_COACHING_NOTIFICATION_TRANSACTIONAL_ID=<Loops transactional email id>`
- Runtime variable: `LOOPS_COACHING_CONFIRMATION_TRANSACTIONAL_ID=<optional Loops transactional email id>`
- Runtime variable: `COACHING_REQUEST_RECIPIENT_EMAIL=info@gamedevglory.com`

Before going live, create the Loops events/workflows, create the coaching
notification transactional email, set the runtime values, and submit live tests
through `/roadmap` and `/coaching`.
