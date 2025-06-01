const express = require('express');
const bodyParser = require('body-parser');
const deliveryRoutes = require('./routes/delivery');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/delivery', deliveryRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Vendor API Simulator running on port ${PORT}`);
});