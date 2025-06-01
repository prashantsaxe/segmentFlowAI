import api from './api';

const campaignsService = {
    createCampaign: async (campaignData) => {
        try {
            const response = await api.post('/campaigns', campaignData);
            return response.data;
        } catch (error) {
            throw new Error('Error creating campaign: ' + error.message);
        }
    },

    fetchCampaigns: async () => {
        try {
            const response = await api.get('/campaigns');
            return response.data;
        } catch (error) {
            throw new Error('Error fetching campaigns: ' + error.message);
        }
    },

    fetchCampaignById: async (campaignId) => {
        try {
            const response = await api.get(`/campaigns/${campaignId}`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching campaign: ' + error.message);
        }
    },

    updateCampaign: async (campaignId, campaignData) => {
        try {
            const response = await api.put(`/campaigns/${campaignId}`, campaignData);
            return response.data;
        } catch (error) {
            throw new Error('Error updating campaign: ' + error.message);
        }
    },

    deleteCampaign: async (campaignId) => {
        try {
            const response = await api.delete(`/campaigns/${campaignId}`);
            return response.data;
        } catch (error) {
            throw new Error('Error deleting campaign: ' + error.message);
        }
    }
};

export default campaignsService;