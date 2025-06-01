const { Kafka } = require('kafkajs');
const { CommunicationLog } = require('../models/CommunicationLog');
const kafkaConfig = require('../config/kafka');

const kafka = new Kafka(kafkaConfig);
const consumer = kafka.consumer({ groupId: 'crm-group' });

const run = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'communication-log', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const logData = JSON.parse(message.value.toString());
            await CommunicationLog.create(logData);
            console.log(`Received message: ${JSON.stringify(logData)}`);
        },
    });
};

module.exports = {
    run,
};