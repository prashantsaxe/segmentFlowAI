import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl font-bold">Mini CRM Platform</h1>
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Dashboard</a></li>
                    <li><a href="/campaigns" className="hover:underline">Campaigns</a></li>
                    <li><a href="/login" className="hover:underline">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;