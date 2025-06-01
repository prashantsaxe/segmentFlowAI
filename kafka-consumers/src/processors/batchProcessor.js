const { CommunicationLog } = require('../../backend/src/models/CommunicationLog');
const { sendMessageToVendor } = require('../../backend/src/services/vendorAPI');
const { processBatch } = require('./dataProcessor');

const BATCH_SIZE = 10;

let messageQueue = [];

const batchProcessor = async () => {
    if (messageQueue.length === 0) return;

    const batch = messageQueue.splice(0, BATCH_SIZE);
    const deliveryResults = await Promise.all(batch.map(async (message) => {
        const result = await sendMessageToVendor(message);
        await CommunicationLog.create({
            messageId: message.id,
            status: result.success ? 'SENT' : 'FAILED',
            timestamp: new Date(),
        });
        return result;
    }));

    console.log(`Processed batch of ${batch.length} messages. Results:`, deliveryResults);
};

const addMessageToQueue = (message) => {
    messageQueue.push(message);
    if (messageQueue.length >= BATCH_SIZE) {
        batchProcessor();
    }
};

module.exports = {
    addMessageToQueue,
};