const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/products');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// API routes
app.use('/api/products', productsRouter);

// Serve static frontend
app.use(express.static(path.join(__dirname, '..', 'public')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
