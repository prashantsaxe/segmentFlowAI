const { Kafka } = require('kafkajs');
const Customer = require('../../backend/src/models/Customer');
const { processCustomerData } = require('../processors/dataProcessor');

const kafka = new Kafka({
  clientId: 'mini-crm-platform',
  brokers: ['localhost:9092'], // Update with your Kafka broker address
});

const consumer = kafka.consumer({ groupId: 'customer-group' });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'customer-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const customerData = JSON.parse(message.value.toString());
      await processCustomerData(customerData);
      await Customer.create(customerData);
      console.log(`Processed customer data: ${JSON.stringify(customerData)}`);
    },
  });
};

run().catch(console.error);