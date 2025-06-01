const kafka = require('./src/config/kafka');
const customerConsumer = require('./src/consumers/customerConsumer');
const orderConsumer = require('./src/consumers/orderConsumer');
const deliveryConsumer = require('./src/consumers/deliveryConsumer');

const startConsumers = async () => {
    try {
        await kafka.connect();
        console.log('Connected to Kafka');

        customerConsumer.start();
        orderConsumer.start();
        deliveryConsumer.start();
    } catch (error) {
        console.error('Error starting consumers:', error);
    }
};

startConsumers();