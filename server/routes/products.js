const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const dataPath = path.join(__dirname, '..', 'data', 'products.json');

function readProducts() {
  try {
    const raw = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function writeProducts(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// List products with optional paging: ?page=1&limit=10
router.get('/', (req, res) => {
  const products = readProducts();
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || products.length;
  const start = (page - 1) * limit;
  const paged = products.slice(start, start + limit);
  res.json({ page, limit, total: products.length, data: paged });
});

router.get('/:id', (req, res) => {
  const products = readProducts();
  const p = products.find(x => String(x.id) === String(req.params.id));
  if (!p) return res.status(404).json({ error: 'Not found' });
  res.json(p);
});

router.post('/', (req, res) => {
  const products = readProducts();
  const nextId = products.reduce((max, p) => Math.max(max, p.id || 0), 0) + 1;
  const newProduct = Object.assign({ id: nextId }, req.body);
  products.push(newProduct);
  writeProducts(products);
  res.status(201).json(newProduct);
});

router.put('/:id', (req, res) => {
  const products = readProducts();
  const idx = products.findIndex(x => String(x.id) === String(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  products[idx] = Object.assign({}, products[idx], req.body, { id: products[idx].id });
  writeProducts(products);
  res.json(products[idx]);
});

router.delete('/:id', (req, res) => {
  let products = readProducts();
  const idx = products.findIndex(x => String(x.id) === String(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const deleted = products.splice(idx, 1)[0];
  writeProducts(products);
  res.json(deleted);
});

module.exports = router;
