import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import MyUser from "../Components/MyUser"
import Transactions from "../Components/Transactions"
import React from "react";
import logo from '../assets/logo.png';
import {
    FiHome,
    FiUsers,
    FiDollarSign,
    FiTrendingUp,
    FiPieChart,
    FiAward,
    FiImage,
    FiFile,
    FiPhone,
    FiShare2,
    FiGift,
    FiUserPlus
} from 'react-icons/fi';

export default function Home() {
    return (
        <div className="min-h-screen bg-black">
            {/* Header Section */}
            <div className="flex flex-col mb-20 items-center justify-center py-6 bg-black">
                <img src={logo} alt="Jeeto Punt Logo" className="h-16 mb-2" />
                <h1 className="text-center text-2xl font-bold text-white">Jeeto Punt</h1>
            </div>

            {/* Main Content Area */}
            <div className="p-1 md:p-4 bg-gray-100">
                {/* Stats Card with overlapping effect */}
                <div className="relative z-10 -mt-25 mb-8 mx-4 md:mx-auto md:max-w-2xl">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="text-center">
                            <p className="text-xl font-bold text-gray-800">Today</p>
                            <p className="text-gray-600 mb-6">Apr 7, 2025, 11:32 PM</p>
                        </div>

                        <div className="bg-gray-200 rounded-lg p-4 space-y-3">
                            <div className="flex justify-between items-center">
                                <p className="text-gray-600">Deposit</p>
                                <p className="font-bold text-gray-800">1,62,200</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-gray-600">Withdraw</p>
                                <p className="font-bold text-gray-800">16,828</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-gray-600">P/L</p>
                                <p className="font-bold text-green-600">1,45,372</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-gray-600">Registered Clients</p>
                                <p className="font-bold text-gray-800">1</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    <Link to="dashboard" className="bg-white p-3 md:p-4 rounded-lg text-center hover:bg-gray-50 transition-all shadow-sm border border-gray-200">
                        <FiHome className="mx-auto text-xl md:text-2xl mb-2 text-gray-800" />
                        <p className="text-sm md:text-base text-gray-800">Dashboard</p>
                    </Link>
                    <Link to="my-users" className="bg-white p-3 md:p-4 rounded-lg text-center hover:bg-gray-50 transition-all shadow-sm border border-gray-200">
                        <FiUsers className="mx-auto text-xl md:text-2xl mb-2 text-gray-800" />
                        <p className="text-sm md:text-base text-gray-800">My Users</p>
                    </Link>
                    <Link to="transactions" className="bg-white p-3 md:p-4 rounded-lg text-center hover:bg-gray-50 transition-all shadow-sm border border-gray-200">
                        <FiDollarSign className="mx-auto text-xl md:text-2xl mb-2 text-gray-800" />
                        <p className="text-sm md:text-base text-gray-800">Transactions</p>
                    </Link>
                    <Link to="leads" className="bg-white p-3 md:p-4 rounded-lg text-center hover:bg-gray-50 transition-all shadow-sm border border-gray-200">
                        <FiTrendingUp className="mx-auto text-xl md:text-2xl mb-2 text-gray-800" />
                        <p className="text-sm md:text-base text-gray-800">Leads</p>
                    </Link>
                    <Link to="sitewise" className="bg-white p-3 md:p-4 rounded-lg text-center hover:bg-gray-50 transition-all shadow-sm border border-gray-200">
                        <FiPieChart className="mx-auto text-xl md:text-2xl mb-2 text-gray-800" />
                        <p className="text-sm md:text-base text-gray-800">Sitewise Report</p>
                    </Link>
                    <Link to="my-team" className="bg-white p-3 md:p-4 rounded-lg text-center hover:bg-gray-50 transition-all shadow-sm border border-gray-200">
                        <FiUsers className="mx-auto text-xl md:text-2xl mb-2 text-gray-800" />
                        <p className="text-sm md:text-base text-gray-800">My Team</p>
                    </Link>
                    <Link to="my-earnings" className="bg-white p-3 md:p-4 rounded-lg text-center hover:bg-gray-50 transition-all shadow-sm border border-gray-200">
                        <FiAward className="mx-auto text-xl md:text-2xl mb-2 text-gray-800" />
                        <p className="text-sm md:text-base text-gray-800">My Earnings</p>
                    </Link>
                    <Link to="payout-screenshots" className="bg-white p-3 md:p-4 rounded-lg text-center hover:bg-gray-50 transition-all shadow-sm border border-gray-200">
                        <FiImage className="mx-auto text-xl md:text-2xl mb-2 text-gray-800" />
                        <p className="text-sm md:text-base text-gray-800">Payout Screenshots</p>
                    </Link>
                    <Link to="promotional-posters" className="bg-white p-3 md:p-4 rounded-lg text-center hover:bg-gray-50 transition-all shadow-sm border border-gray-200">
                        <FiFile className="mx-auto text-xl md:text-2xl mb-2 text-gray-800" />
                        <p className="text-sm md:text-base text-gray-800">Promotional Posters</p>
                    </Link>
                    <Link to="partners-support" className="bg-white p-3 md:p-4 rounded-lg text-center hover:bg-gray-50 transition-all shadow-sm border border-gray-200">
                        <FiPhone className="mx-auto text-xl md:text-2xl mb-2 text-gray-800" />
                        <p className="text-sm md:text-base text-gray-800">Partners Support</p>
                    </Link>
                    <Link to="social-media" className="bg-white p-3 md:p-4 rounded-lg text-center hover:bg-gray-50 transition-all shadow-sm border border-gray-200">
                        <FiShare2 className="mx-auto text-xl md:text-2xl mb-2 text-gray-800" />
                        <p className="text-sm md:text-base text-gray-800">Social Media</p>
                    </Link>
                    <Link to="bonus" className="bg-white p-3 md:p-4 rounded-lg text-center hover:bg-gray-50 transition-all shadow-sm border border-gray-200">
                        <FiGift className="mx-auto text-xl md:text-2xl mb-2 text-gray-800" />
                        <p className="text-sm md:text-base text-gray-800">Bonus</p>
                    </Link>
                </div>

                {/* Routes Section */}

            </div>
        </div>
    );
}