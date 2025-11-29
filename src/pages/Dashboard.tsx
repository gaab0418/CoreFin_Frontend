import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Total Balance</h3>
                    <p className="text-3xl font-bold text-green-500 mt-2">$12,345.00</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Income</h3>
                    <p className="text-3xl font-bold text-blue-500 mt-2">$5,000.00</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Expenses</h3>
                    <p className="text-3xl font-bold text-red-500 mt-2">$2,500.00</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
