const { Kafka } = require('kafkajs');
const kafkaConfig = require('../config/kafka');

const kafka = new Kafka({
  clientId: kafkaConfig.clientId,
  brokers: kafkaConfig.brokers,
});

const producer = kafka.producer();

const initProducer = async () => {
  await producer.connect();
};

const sendMessage = async (topic, message) => {
  try {
    await producer.send({
      topic,
      messages: [
        { value: JSON.stringify(message) },
      ],
    });
    console.log(`Message sent to topic ${topic}:`, message);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

const disconnectProducer = async () => {
  await producer.disconnect();
};

module.exports = {
  initProducer,
  sendMessage,
  disconnectProducer,
};