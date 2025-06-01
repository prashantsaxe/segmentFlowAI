const kafka = require('kafkajs');

const kafkaConfig = {
  clientId: 'mini-crm-platform',
  brokers: ['localhost:9092'], // Update with your Kafka broker addresses
};

const kafkaClient = new kafka.Kafka(kafkaConfig);

const producer = kafkaClient.producer();
const consumer = kafkaClient.consumer({ groupId: 'crm-group' });

const initKafka = async () => {
  await producer.connect();
  await consumer.connect();
};

module.exports = {
  producer,
  consumer,
  initKafka,
};