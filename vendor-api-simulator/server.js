const express = require('express');
const bodyParser = require('body-parser');
const deliveryRoutes = require('./src/routes/delivery');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use('/api/delivery', deliveryRoutes);

app.listen(PORT, () => {
    console.log(`Vendor API Simulator running on port ${PORT}`);
});