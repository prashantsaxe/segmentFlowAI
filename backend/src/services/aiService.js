const axios = require('axios');

// AI Service for integrating AI features
class AIService {
    constructor() {
        this.openAIEndpoint = process.env.OPENAI_API_ENDPOINT; // Set your OpenAI API endpoint
        this.openAIToken = process.env.OPENAI_API_KEY; // Set your OpenAI API key
    }

    async generateSegmentRules(prompt) {
        try {
            const response = await axios.post(this.openAIEndpoint, {
                prompt: prompt,
                max_tokens: 100,
                temperature: 0.7,
            }, {
                headers: {
                    'Authorization': `Bearer ${this.openAIToken}`,
                    'Content-Type': 'application/json',
                },
            });

            return response.data.choices[0].text.trim();
        } catch (error) {
            console.error('Error generating segment rules:', error);
            throw new Error('AI service unavailable');
        }
    }

    async suggestCampaignMessages(objective) {
        try {
            const response = await axios.post(this.openAIEndpoint, {
                prompt: `Suggest 2-3 message variants for the campaign objective: "${objective}"`,
                max_tokens: 150,
                temperature: 0.7,
            }, {
                headers: {
                    'Authorization': `Bearer ${this.openAIToken}`,
                    'Content-Type': 'application/json',
                },
            });

            return response.data.choices.map(choice => choice.text.trim());
        } catch (error) {
            console.error('Error suggesting campaign messages:', error);
            throw new Error('AI service unavailable');
        }
    }

    async summarizeCampaignPerformance(stats) {
        const { totalUsers, delivered, failed, highSpenders } = stats;
        return `Your campaign reached ${totalUsers} users. ${delivered} messages were delivered. Customers with > ₹10K spend had a ${((delivered / highSpenders) * 100).toFixed(2)}% delivery rate.`;
    }
}

module.exports = new AIService();