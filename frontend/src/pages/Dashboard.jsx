import React from 'react';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import CampaignHistory from '../components/campaign/CampaignHistory';
import CampaignStats from '../components/campaign/CampaignStats';
import CreateCampaign from '../components/campaign/CreateCampaign';

const Dashboard = () => {
    return (
        <Layout>
            <Header />
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                <CreateCampaign />
                <CampaignHistory />
                <CampaignStats />
            </div>
        </Layout>
    );
};

export default Dashboard;