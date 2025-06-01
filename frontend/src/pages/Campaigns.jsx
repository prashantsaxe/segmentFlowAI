import React, { useEffect, useState } from 'react';
import { getCampaigns } from '../services/campaigns';
import CampaignHistory from '../components/campaign/CampaignHistory';
import CampaignStats from '../components/campaign/CampaignStats';
import CreateCampaign from '../components/campaign/CreateCampaign';

const Campaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [selectedCampaign, setSelectedCampaign] = useState(null);

    useEffect(() => {
        const fetchCampaigns = async () => {
            const data = await getCampaigns();
            setCampaigns(data);
        };

        fetchCampaigns();
    }, []);

    const handleCampaignSelect = (campaign) => {
        setSelectedCampaign(campaign);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Campaigns</h1>
            <CreateCampaign />
            <CampaignHistory campaigns={campaigns} onSelect={handleCampaignSelect} />
            {selectedCampaign && <CampaignStats campaign={selectedCampaign} />}
        </div>
    );
};

export default Campaigns;