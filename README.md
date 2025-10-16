# E-commerce Product Catalog + Admin Panel (Scaffold)

This is a minimal scaffold for an E-commerce product catalog with an admin panel.

Quick start (Windows PowerShell):

```powershell
npm install
npm start
```

Open in your browser:
- Catalog: http://localhost:3000/
- Admin: http://localhost:3000/admin/products.html

Notes:
- API: `GET /api/products` (supports `?page=` and `?limit=`), `POST /api/products`, `PUT /api/products/:id`, `DELETE /api/products/:id`
- Data is stored in `server/data/products.json` for simplicity (file-based store). For production, replace with a real DB.

If you want I can:
- Add unit tests and a tiny test runner
- Wire up a lightweight in-memory DB or SQLite
- Convert frontend to a React/Vue app
