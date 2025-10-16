# Copilot / AI agent instructions for this repository

Purpose
- Help an AI code assistant make productive, low-risk edits in this workspace: feature work, bug fixes, tests, and small refactors for an E‑commerce Product Catalog + Admin Panel.

Quick repo summary (big picture)
- This project implements a product catalog (frontend) and an administrative panel for managing products, orders, and customers.
- Typical architecture (assumed):
  - Frontend: single-page or multipage app using Bootstrap for UI components (cards, tables, forms). Look under `src/`, `public/`, or framework folders (React/Next/Vue).
  - Backend/API: lightweight REST API serving product/order/customer resources. Look under `server/`, `api/`, `routes/`, or `controllers/`.
  - Data layer: simple models under `server/models` or a JSON/SQLite store. Look for `models/`, `db/`, or `migrations/`.

Project-specific patterns to follow
- UI patterns: product listing uses Bootstrap cards/grid (catalog pages). Admin uses Bootstrap tables with pagination, and Bootstrap forms for add/edit flows.
  - Example component paths we expect (confirm before editing): `src/components/ProductCard.*`, `src/pages/catalog.*`, `src/pages/admin/Products.*`.
- Admin behavior: forms include fields {name, description, price, imageUrl}; actions grouped in button groups (Save, Cancel, Upload Image). Use alerts for success/error feedback and breadcrumbs for navigation (e.g., `Dashboard > Products > Edit Product`).
- Pagination: server returns paged lists (page, limit) and frontend renders page controls. If no API paging exists, prefer adding limit/offset params to routes rather than client-only slicing.

Developer workflows (what to run)
- I could not detect package manifests or scripts automatically. Before running anything, confirm the stack and package manager. Common commands (replace `npm` with `yarn` or `pnpm` if used):
  - Install: `npm install`
  - Start dev server (frontend): `npm run dev` or `npm start`
  - Start backend: `npm run server` or `node server/index.js` (or `npm run dev:server`)
  - Run tests: `npm test`

If you give me the package manager or point to `package.json` / `requirements.txt`, I'll insert exact commands.

Integration points and secrets
- No `.env` or cloud config was found; expect environment variables for DB connections or API keys in `.env`. Do not add or expose secrets. If an external image upload or payment provider is added, mock calls in dev and document the stub.

Editable scope for AI agents (concrete)
- Safe: small UI edits under `src/` (Bootstrap card/table/form adjustments), backend route handlers under `server/routes` or `api/` (non-breaking CRUD), adding or updating unit tests.
- Avoid: changing CI, deployment manifests, or adding new infrastructure without approval; modifying global lint/formatter config; or exposing secrets.

Assumptions (please confirm)
- I assumed a typical layout with `src/` for frontend and `server/` for backend. If your project uses a different structure (e.g., monorepo, framework-specific layout), tell me and I'll adapt.
- Product model fields: `name`, `description`, `price`, `imageUrl`.

Examples (copyable patterns)
- Add product route (server): `server/routes/products.js` -> POST `/api/products` accepts JSON {name, description, price, imageUrl}.
- Frontend product card: `src/components/ProductCard.jsx` renders `title`, `description`, `price`, and an `<img>` for `imageUrl` and a button linking to admin edit page.

When you need me to run commands
- Tell me the package manager and any entry points (e.g., `server/index.js`, `src/index.js`), or let me scan the repo for `package.json`. I will not run code until you confirm.

How to give feedback
- If anything is missing or inaccurate, reply with the file layout or paste `package.json` / `requirements.txt`. I will iterate and merge any existing agent docs you provide.

Minimal next steps I can take (pick one)
- Scan the repo for `package.json`, `src/`, and `server/` to produce precise examples and commands.
- Merge these instructions into an existing `AGENT.md` if you attach it.

---
Note: This file is based on the project description you provided. I made a couple of simple assumptions about file layout—confirm them and I will refine the guidance to reference exact files and commands.