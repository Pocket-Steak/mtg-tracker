# MTG Tracker (Commander) — App Skeleton
Ready-to-run **Vite + React + TypeScript** starter matching our plan. Uses mock data until you plug in Supabase.

## Quick start
```bash
pnpm install   # or npm install
cp .env.example .env.local
pnpm dev
```
Open http://localhost:5173

## Environments
Create `.env.uat`, `.env.sit`, `.env.production` with the same variables.

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_APP_PUBLIC_BASE_URL=http://localhost:5173
```

If Supabase vars are not set, the app falls back to **mock data**.

## Structure
- `src/pages/*` : Dashboard, Log Match, Decks, Opponents, Global Stats, Settings, Public Profile
- `src/lib/*`   : supabase client stub, types, mana pips, mock data
- `src/styles/app.css` : basic styling

## Next steps
- Implement Supabase schema & RLS; swap mock reads for real queries.
- Add Scryfall search & partner/background logic to Decks.
- Add charts for cumulative win% timelines.
