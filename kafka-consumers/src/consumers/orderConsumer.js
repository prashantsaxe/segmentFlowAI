const { Kafka } = require('kafkajs');
const Order = require('../../backend/src/models/Order');
const { processOrder } = require('../processors/dataProcessor');

const kafka = new Kafka({
  clientId: 'mini-crm-platform',
  brokers: [process.env.KAFKA_BROKER],
});

const consumer = kafka.consumer({ groupId: 'order-group' });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'orders', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const orderData = JSON.parse(message.value.toString());
      console.log(`Received order: ${orderData.id}`);
      await processOrder(orderData);
    },
  });
};

run().catch(console.error);