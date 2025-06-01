const axios = require('axios');

const VENDOR_API_URL = process.env.VENDOR_API_URL || 'http://localhost:5000/api/delivery';

const sendMessage = async (customer, message) => {
    try {
        const response = await axios.post(VENDOR_API_URL, {
            customer,
            message
        });
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw new Error('Failed to send message');
    }
};

const simulateDelivery = (message) => {
    const successRate = 0.9; // 90% success rate
    return Math.random() < successRate;
};

module.exports = {
    sendMessage,
    simulateDelivery
};