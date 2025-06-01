const kafka = require('kafkajs');

const kafkaConfig = {
  clientId: 'mini-crm-platform',
  brokers: ['localhost:9092'], // Update with your Kafka broker addresses
};

const kafkaClient = new kafka.Kafka(kafkaConfig);

const consumer = kafkaClient.consumer({ groupId: 'crm-consumer-group' });

const connectKafka = async () => {
  await consumer.connect();
  console.log('Kafka consumer connected');
};

const disconnectKafka = async () => {
  await consumer.disconnect();
  console.log('Kafka consumer disconnected');
};

module.exports = {
  connectKafka,
  disconnectKafka,
  consumer,
};