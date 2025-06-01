const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaignController');
const { authenticate } = require('../middleware/auth');

// Route to create a new campaign
router.post('/', authenticate, campaignController.createCampaign);

// Route to get all campaigns
router.get('/', authenticate, campaignController.getAllCampaigns);

// Route to get a specific campaign by ID
router.get('/:id', authenticate, campaignController.getCampaignById);

// Route to update a campaign by ID
router.put('/:id', authenticate, campaignController.updateCampaign);

// Route to delete a campaign by ID
router.delete('/:id', authenticate, campaignController.deleteCampaign);

module.exports = router;