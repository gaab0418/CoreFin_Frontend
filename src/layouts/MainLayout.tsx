import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, LayoutDashboard, Settings, LogOut } from 'lucide-react';

const MainLayout: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            {/* Sidebar */}
            <aside className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-20 hidden md:block">
                <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
                    <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">CoreFin</h1>
                </div>
                <nav className="mt-6 px-4 space-y-2">
                    <Link to="/" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                        <LayoutDashboard className="w-5 h-5 mr-3" />
                        Dashboard
                    </Link>
                    <Link to="/admin" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                        <Settings className="w-5 h-5 mr-3" />
                        Admin
                    </Link>
                </nav>
                <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 dark:border-gray-700">
                    <button className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                        <LogOut className="w-5 h-5 mr-3" />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="md:ml-64 flex flex-col min-h-screen">
                {/* Header */}
                <header className="bg-white dark:bg-gray-800 shadow-sm h-16 flex items-center justify-between px-6">
                    <div className="md:hidden">
                        {/* Mobile menu button placeholder */}
                        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center ml-auto">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                        >
                            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                        </button>
                        <div className="ml-4 flex items-center">
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://ui-avatars.com/api/?name=User&background=random"
                                alt="User avatar"
                            />
                            <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-200">User</span>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
