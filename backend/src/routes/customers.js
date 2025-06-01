const express = require('express');
const { createCustomer, getCustomers, getCustomerById, updateCustomer, deleteCustomer } = require('../controllers/customerController');
const { validateCustomer } = require('../middleware/validation');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Route to create a new customer
router.post('/', authenticate, validateCustomer, createCustomer);

// Route to get all customers
router.get('/', authenticate, getCustomers);

// Route to get a customer by ID
router.get('/:id', authenticate, getCustomerById);

// Route to update a customer
router.put('/:id', authenticate, validateCustomer, updateCustomer);

// Route to delete a customer
router.delete('/:id', authenticate, deleteCustomer);

module.exports = router;