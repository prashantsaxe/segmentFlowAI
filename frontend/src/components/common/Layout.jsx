import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header>
                {/* Header component can be included here */}
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <footer className="bg-gray-800 text-white text-center p-4">
                © {new Date().getFullYear()} Mini CRM Platform
            </footer>
        </div>
    );
};

export default Layout;