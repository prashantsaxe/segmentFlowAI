const express = require('express');
const deliveryController = require('../controllers/deliveryController');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Route to receive delivery receipt from the vendor API
router.post('/delivery-receipt', authenticate, deliveryController.updateDeliveryStatus);

module.exports = router;