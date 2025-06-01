import React, { useEffect, useState } from 'react';
import { fetchCampaigns } from '../../services/campaigns';

const CampaignHistory = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCampaigns = async () => {
            try {
                const data = await fetchCampaigns();
                setCampaigns(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getCampaigns();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Campaign History</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Campaign Name</th>
                        <th className="py-2 px-4 border-b">Audience Size</th>
                        <th className="py-2 px-4 border-b">Sent</th>
                        <th className="py-2 px-4 border-b">Failed</th>
                        <th className="py-2 px-4 border-b">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map((campaign) => (
                        <tr key={campaign.id}>
                            <td className="py-2 px-4 border-b">{campaign.name}</td>
                            <td className="py-2 px-4 border-b">{campaign.audienceSize}</td>
                            <td className="py-2 px-4 border-b">{campaign.sent}</td>
                            <td className="py-2 px-4 border-b">{campaign.failed}</td>
                            <td className="py-2 px-4 border-b">{new Date(campaign.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CampaignHistory;