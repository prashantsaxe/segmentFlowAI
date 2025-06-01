import React, { useState } from 'react';
import { createCampaign } from '../../services/campaigns';
import RuleBuilder from '../segments/RuleBuilder';
import SegmentPreview from '../segments/SegmentPreview';

const CreateCampaign = () => {
    const [segmentRules, setSegmentRules] = useState([]);
    const [messageContent, setMessageContent] = useState('');
    const [audienceSize, setAudienceSize] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSaveCampaign = async () => {
        setLoading(true);
        setError('');

        try {
            const campaignData = {
                rules: segmentRules,
                message: messageContent,
            };
            await createCampaign(campaignData);
            // Redirect or show success message
        } catch (err) {
            setError('Failed to create campaign. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Create New Campaign</h2>
            <RuleBuilder setSegmentRules={setSegmentRules} setAudienceSize={setAudienceSize} />
            <SegmentPreview audienceSize={audienceSize} />
            <textarea
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Enter your message content here..."
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
                className={`bg-blue-500 text-white py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleSaveCampaign}
                disabled={loading}
            >
                {loading ? 'Saving...' : 'Save Campaign'}
            </button>
        </div>
    );
};

export default CreateCampaign;