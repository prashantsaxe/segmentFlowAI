const express = require('express');
const { createOrder, getOrderById, getAllOrders } = require('../controllers/orderController');
const { validateOrder } = require('../middleware/validation');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Route to create a new order
router.post('/', authenticate, validateOrder, createOrder);

// Route to get an order by ID
router.get('/:id', authenticate, getOrderById);

// Route to get all orders
router.get('/', authenticate, getAllOrders);

module.exports = router;