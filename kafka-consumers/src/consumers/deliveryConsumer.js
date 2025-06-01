const kafka = require('kafka-node');
const CommunicationLog = require('../../backend/src/models/CommunicationLog');
const vendorAPI = require('../../backend/src/services/vendorAPI');

const DeliveryConsumer = () => {
    const client = new kafka.KafkaClient({ kafkaHost: process.env.KAFKA_HOST });
    const consumer = new kafka.Consumer(
        client,
        [{ topic: 'delivery_topic', partition: 0 }],
        { autoCommit: true }
    );

    consumer.on('message', async (message) => {
        const { customerId, campaignId, messageContent } = JSON.parse(message.value);

        try {
            // Simulate sending message to vendor API
            const response = await vendorAPI.sendMessage(customerId, messageContent);
            const deliveryStatus = response.success ? 'SENT' : 'FAILED';

            // Log the delivery status
            await CommunicationLog.create({
                customerId,
                campaignId,
                status: deliveryStatus,
                messageContent,
                timestamp: new Date()
            });

            console.log(`Message sent to customer ${customerId}: ${deliveryStatus}`);
        } catch (error) {
            console.error(`Error processing message: ${error.message}`);
        }
    });

    consumer.on('error', (err) => {
        console.error('Error in delivery consumer:', err);
    });
};

module.exports = DeliveryConsumer;