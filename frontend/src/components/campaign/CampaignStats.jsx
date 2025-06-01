import React from 'react';

const CampaignStats = ({ campaign }) => {
    if (!campaign) {
        return <div>No campaign selected.</div>;
    }

    return (
        <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Campaign Statistics</h2>
            <div className="mb-2">
                <strong>Campaign Name:</strong> {campaign.name}
            </div>
            <div className="mb-2">
                <strong>Delivery Status:</strong> {campaign.deliveryStatus}
            </div>
            <div className="mb-2">
                <strong>Sent:</strong> {campaign.sent} messages
            </div>
            <div className="mb-2">
                <strong>Failed:</strong> {campaign.failed} messages
            </div>
            <div className="mb-2">
                <strong>Audience Size:</strong> {campaign.audienceSize} users
            </div>
            <div className="mb-2">
                <strong>Delivery Rate:</strong> {((campaign.sent / (campaign.sent + campaign.failed)) * 100).toFixed(2)}%
            </div>
        </div>
    );
};

export default CampaignStats;