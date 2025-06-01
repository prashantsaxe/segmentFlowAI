const { CommunicationLog } = require('../../backend/src/models/CommunicationLog');
const aiService = require('../../backend/src/services/aiService');
const vendorAPI = require('../../backend/src/services/vendorAPI');

const processIncomingData = async (data) => {
    try {
        // Extract customer and campaign information from the incoming data
        const { customerId, campaignId, message } = data;

        // Log the communication attempt
        const logEntry = new CommunicationLog({
            customerId,
            campaignId,
            message,
            status: 'PENDING',
        });
        await logEntry.save();

        // Simulate sending the message via the vendor API
        const deliveryResponse = await vendorAPI.sendMessage(customerId, message);

        // Update the communication log based on the delivery response
        logEntry.status = deliveryResponse.success ? 'SENT' : 'FAILED';
        await logEntry.save();

        // Optionally, generate AI-driven insights or suggestions based on the campaign performance
        const insights = await aiService.generateInsights(campaignId);
        return insights;
    } catch (error) {
        console.error('Error processing incoming data:', error);
        throw error;
    }
};

module.exports = {
    processIncomingData,
};