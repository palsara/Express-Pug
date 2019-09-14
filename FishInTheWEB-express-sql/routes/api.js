const express = require('express');

const router = express.Router();
const DB = require('../modules/db');

const db = new DB();
/* GET home page. */
router.get('/products', async (req, res, next) => {
  const products = await db.readProducts();
  res.json(products);
});

router.delete('/products/delete/:id', async (req, res, next) => {
  const id = req.params.id || 0;
  const result = await db.deleteProduct(id);
  res.json(result);
});

router.get('/products/:id', async (req, res, next) => {
  const product = await db.readProducts(req.params.id);
  console.log(product[0]);
  res.json(product[0]);
});
router.post('/products/:id', async (req, res, next) => {
  const result = await db.updateProduct(req.body);
  res.json(result);
});
router.post('/products', async (req, res, next) => {
  await db.createProduct(req.body);
  res.redirect('/products');
});
router.get('/orders', async (req, res, next) => {
  const orders = await db.readOrders();
  res.json(orders);
});

router.delete('/orders/delete/:id', async (req, res, next) => {
  const id = req.params.id || 0;
  const result = await db.deleteOrder(id);
  res.json(result);
});

router.get('/orders/:id', async (req, res, next) => {
  const order = await db.readOrders(req.params.id);
  console.log(order[0]);
  res.json(order[0]);
});
router.post('/orders/:id', async (req, res, next) => {
  const result = await db.updateOrder(req.body);
  res.json(result);
});
router.post('/orders', async (req, res, next) => {
  await db.createOrder(req.body);
});

module.exports = router;
