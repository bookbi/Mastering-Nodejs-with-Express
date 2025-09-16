const express = require('express');
const Product = require('../models/products');

const router = express.Router();

const { data } = require('../data');

// GET all products
// routes/products.js
router.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.json(products); // เดิมเป็น res.json(data)
});


// GET product by id
router.get('/:id', async (req, res) => {
  const product = await Product.findOne({ where: { id: req.params.id } });
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// POST create product
router.post('/', async (req, res) => {
  const { name, imageURL, type } = req.body;
  const newProduct = await Product.create({ name, imageURL, type });
  res.status(201).json(newProduct);
});

// PUT update product
router.put('/:id', async (req, res) => {
  const product = await Product.findOne({ where: { id: req.params.id } });
  if (!product) return res.status(404).json({ error: 'Product not found' });

  product.name = req.body.name ?? product.name;
  product.imageURL = req.body.imageURL ?? product.imageURL;
  product.type = req.body.type ?? product.type;

  await product.save();
  res.json(product);
});


// DELETE product
router.delete('/:id', async (req, res) => {
  const deleted = await Product.destroy({ where: { id: req.params.id } });
  if (!deleted) return res.status(404).json({ error: 'Product not found' });
  res.json({ message: 'Product deleted successfully' });
});

module.exports = router;