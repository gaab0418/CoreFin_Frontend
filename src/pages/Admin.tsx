import React from 'react';

const Admin: React.FC = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Admin Panel</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 dark:text-gray-300">System parameters and configuration will go here.</p>
            </div>
        </div>
    );
};

export default Admin;
