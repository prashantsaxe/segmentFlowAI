const Campaign = require('../models/Campaign');
const CommunicationLog = require('../models/CommunicationLog');
const kafkaProducer = require('../services/kafkaProducer');
const aiService = require('../services/aiService');

// Create a new campaign
exports.createCampaign = async (req, res) => {
    try {
        const { name, audienceSegment, message } = req.body;

        // Validate input
        if (!name || !audienceSegment || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create campaign
        const campaign = new Campaign({ name, audienceSegment, message });
        await campaign.save();

        // Produce message to Kafka
        await kafkaProducer.sendMessage('campaigns', { campaignId: campaign._id });

        // Log the campaign creation
        const logEntry = new CommunicationLog({
            campaignId: campaign._id,
            status: 'created',
            message: `Campaign "${name}" created successfully.`,
        });
        await logEntry.save();

        res.status(201).json(campaign);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all campaigns
exports.getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find().sort({ createdAt: -1 });
        res.status(200).json(campaigns);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get campaign by ID
exports.getCampaignById = async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id);
        if (!campaign) {
            return res.status(404).json({ error: 'Campaign not found' });
        }
        res.status(200).json(campaign);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};