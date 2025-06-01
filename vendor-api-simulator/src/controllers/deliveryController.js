const express = require('express');
const router = express.Router();
const vendorAPI = require('../services/vendorAPI');

// Simulate delivery of messages
router.post('/send', async (req, res) => {
    const { customerId, message } = req.body;

    // Simulate a delivery success/failure
    const success = Math.random() < 0.9; // 90% success rate
    const deliveryStatus = success ? 'SENT' : 'FAILED';

    // Log the delivery attempt
    await vendorAPI.logDeliveryAttempt(customerId, message, deliveryStatus);

    // Respond with the delivery status
    res.status(success ? 200 : 500).json({
        status: deliveryStatus,
        message: success ? 'Message sent successfully!' : 'Message delivery failed.'
    });
});

module.exports = router;