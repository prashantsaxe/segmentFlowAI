import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

// Function to create a new audience segment
export const createSegment = async (segmentData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/segments`, segmentData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating segment: ' + error.message);
    }
};

// Function to fetch all audience segments
export const fetchSegments = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/segments`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching segments: ' + error.message);
    }
};

// Function to create a new campaign
export const createCampaign = async (campaignData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/campaigns`, campaignData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating campaign: ' + error.message);
    }
};

// Function to fetch campaign history
export const fetchCampaignHistory = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/campaigns/history`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching campaign history: ' + error.message);
    }
};

// Function to get delivery stats for a specific campaign
export const fetchCampaignStats = async (campaignId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/campaigns/${campaignId}/stats`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching campaign stats: ' + error.message);
    }
};