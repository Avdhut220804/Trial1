const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const products = require('./products.json');
app.use(express.static('public'));
app.get('/api/products', (req, res) => res.json(products));
app.listen(3000, () => console.log('Server running at http://localhost:3000'));
