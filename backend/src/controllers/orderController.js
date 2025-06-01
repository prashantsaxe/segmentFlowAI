const Order = require('../models/Order');
const kafkaProducer = require('../services/kafkaProducer');

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const orderData = req.body;
        const newOrder = new Order(orderData);
        
        // Save order to the database
        await newOrder.save();

        // Produce a message to Kafka for further processing
        kafkaProducer.sendMessage('order_created', newOrder);

        res.status(201).json({ message: 'Order created successfully', order: newOrder });
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
};

// Fetch all orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error: error.message });
    }
};

// Fetch a single order by ID
exports.getOrderById = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching order', error: error.message });
    }
};