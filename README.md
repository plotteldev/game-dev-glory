# Game Dev Glory

A minimal landing page for Unity developers to book a paid consult: 60 minutes, $150 USD.

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Set `NEXT_PUBLIC_BOOKING_URL` in `.env.local` to the booking/payment URL.

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
- All consult CTAs read from `NEXT_PUBLIC_BOOKING_URL`.
- The consult price is $150 USD and the duration is 60 minutes.
