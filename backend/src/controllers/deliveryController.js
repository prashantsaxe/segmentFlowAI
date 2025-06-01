const DeliveryLog = require('../models/CommunicationLog');
const vendorAPI = require('../services/vendorAPI');
const kafkaProducer = require('../services/kafkaProducer');

// Function to handle delivery receipt updates
const updateDeliveryStatus = async (req, res) => {
    const { messageId, status } = req.body;

    try {
        // Update the delivery status in the communication log
        await DeliveryLog.updateOne({ messageId }, { status });

        res.status(200).json({ message: 'Delivery status updated successfully' });
    } catch (error) {
        console.error('Error updating delivery status:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to initiate delivery of messages
const initiateDelivery = async (req, res) => {
    const { campaignId, message } = req.body;

    try {
        // Simulate sending messages to customers
        const deliveryResults = await vendorAPI.sendMessages(campaignId, message);

        // Produce delivery results to Kafka for further processing
        deliveryResults.forEach(result => {
            kafkaProducer.sendMessage('delivery-results', result);
        });

        res.status(200).json({ message: 'Delivery initiated', results: deliveryResults });
    } catch (error) {
        console.error('Error initiating delivery:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    updateDeliveryStatus,
    initiateDelivery,
};