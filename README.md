# HUNEZ Website

Marketing website for **Human-Centred Net Zero & Sustainability Solutions Ltd.** — practical, affordable and people-centred sustainability solutions for UK SMEs.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Vitest + React Testing Library
- ESLint + Prettier
- Husky + lint-staged
- GitHub Actions CI

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests |
| `npm run format` | Format with Prettier |

## Project structure

```
src/
├── app/              # Pages and API routes
├── components/       # UI, layout, and section components
├── content/insights/ # Future blog posts (MDX-ready)
├── data/             # Site content (services, packages, etc.)
└── lib/              # Utilities, metadata, validation
public/images/        # Logo and photo assets
```

## Adding your assets

Place images in `public/images/` — see `public/images/README.md` for the full list.

Once you have files ready, share the paths and they can be wired into the relevant sections.

## Contact form

The contact form at `/contact` validates submissions with Zod and posts to `/api/contact`.

In development, submissions are logged to the console if no email service is configured.

To enable email delivery, copy `.env.example` to `.env.local` and set either:

- `FORMSPREE_ENDPOINT` — simplest option
- `RESEND_API_KEY` + `CONTACT_TO_EMAIL` — for Resend

## Deployment

### Vercel (recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables from `.env.example`
4. Deploy

### Domain (GoDaddy → Vercel)

1. In Vercel project settings, note the DNS records
2. In GoDaddy DNS management for `humannetzero.co.uk`, add:
   - `A` record → Vercel IP (or use CNAME to `cname.vercel-dns.com`)
3. Enable HTTPS in Vercel (automatic)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | About, founders, methodology |
| `/services` | All 8 services |
| `/who-we-help` | SME sectors |
| `/packages` | Start / Grow / Transform pricing |
| `/insights` | Blog (coming soon) |
| `/contact` | Contact form |
| `/privacy` | Privacy policy |
| `/cookies` | Cookie policy |
| `/terms` | Terms & conditions |

## License

Private — © 2026 Human-Centred Net Zero & Sustainability Solutions Ltd.
