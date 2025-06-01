const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/deliveryController');

// Route to simulate message delivery
router.post('/send', deliveryController.sendMessage);

// Route to receive delivery receipt
router.post('/receipt', deliveryController.receiveReceipt);

module.exports = router;