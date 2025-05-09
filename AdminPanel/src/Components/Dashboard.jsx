import React, { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('deposits');
  const [timeRange, setTimeRange] = useState('today');

  const statsData = [
    {
      day: "Today",
      deposits: "162,200",
      withdraw: "16,828",
      pl: "146,372"
    },
    {
      day: "Yesterday",
      deposits: "142,500",
      withdraw: "14,750",
      pl: "127,750"
    },
    {
      day: "This Week",
      deposits: "845,300",
      withdraw: "92,450",
      pl: "752,850"
    },
    {
      day: "Last Week",
      deposits: "798,600",
      withdraw: "87,200",
      pl: "711,400"
    }
  ];

  const statsDataClients = [
    {
      day: "Today",
      registered: "1",
      FTD: "0",
    },
    {
      day: "Yesterday",
      registered: "0",
      FTD: "0",
    },
    {
      day: "This Week",
      registered: "1",
      FTD: "0",
    },
    {
      day: "Last Week",
      registered: "7",
      FTD: "4",
    }
  ];

  // Static chart data moved outside of JSX
  const chartData = [
    { date: 'Apr 1', deposit: 15000, withdraw: 5000, net: 10000 },
    { date: 'Apr 2', deposit: 20000, withdraw: 7000, net: 13000 },
    { date: 'Apr 3', deposit: 10000, withdraw: 3000, net: 7000 },
    { date: 'Apr 4', deposit: 18000, withdraw: 6000, net: 12000 },
    { date: 'Apr 5', deposit: 5000, withdraw: 2000, net: 3000 },
    { date: 'Apr 6', deposit: 22000, withdraw: 9000, net: 13000 },
    { date: 'Apr 7', deposit: 25000, withdraw: 8000, net: 17000 },
  ];

  return (
    <div className="w-full font-sans">
      {/* Main Dashboard Heading */}
      <div className="bg-[#212121] text-white ">
        {/* Dashboard Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="mt-5 text-lg text-gray-300">
            Deposits - Till Date (Apr 7, 2025, 11:32PM)
          </p>
          <h2 className="text-4xl font-bold mt-3">6,96,16,624</h2>
        </div>

        {/* Stats Columns */}
        <div className="bg-[#2d2d2d] p-6 rounded-lg">
          <div className="flex flex-col ">
            {/* Withdraw Row */}
            <div className="flex justify-between items-center">
              <p className="text-gray-300">Withdraw</p>
              <p className="text-2xl font-bold">5,05,020771</p>
            </div>

            {/* Wallet Balance Row */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <p className="text-gray-300">Wallet Balance</p>
                <button className="px-3 py-1 bg-[#212121] text-white text-sm rounded border border-white hover:bg-gray-700 transition-colors">
                  View All
                </button>
              </div>
              <p className="text-2xl font-bold">3,13,046</p>
            </div>

            {/* P/L Row */}
            <div className="flex justify-between items-center">
              <p className="text-gray-300">P/L</p>
              <p className="text-2xl font-bold">1,88,00807</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="w-full mb-6">
        <div className="flex w-full border-b">
          <button
            className={`flex-1 px-4 py-2 font-medium text-center ${activeTab === 'deposits'
              ? 'text-black border-b-2 border-black-600'
              : 'text-gray-500'
              }`}
            onClick={() => setActiveTab('deposits')}
          >
            Deposits and Withdrawals
          </button>
          <div className="border-r border-gray-200"></div> {/* Separator */}
          <button
            className={`flex-1 px-4 py-2 font-medium text-center ${activeTab === 'clients'
              ? 'text-black border-b-2 border-black-600'
              : 'text-gray-500'
              }`}
            onClick={() => setActiveTab('clients')}
          >
            Clients
          </button>
        </div>
      </div>

      {activeTab === 'deposits' && (
        <div className="flex flex-col gap-3 p-2">
          {statsData.map((stat, index) => (
            <div key={index} className="flex bg-white rounded-lg shadow-md overflow-hidden">
              {/* Vertical Day Column */}
              <div className="flex flex-col items-center justify-center bg-yellow-600 p-2 min-w-[40px]">
                <span className="font-bold text-white text-base [writing-mode:vertical-rl] rotate-180">
                  {stat.day}
                </span>
              </div>

              {/* Stats Details */}
              <div className="flex-1 p-4 flex flex-col gap-1">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Deposits:</span>
                  <span className="font-bold text-gray-800">{stat.deposits}</span>
                </div>
                <div className="flex justify-between border-b border-gray-400">
                  <span className="font-medium text-gray-600">Withdraw:</span>
                  <span className="font-bold text-gray-800">{stat.withdraw}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">P/L:</span>
                  <span className="font-bold text-green-500">{stat.pl}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Bar Chart Section */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* Chart Header with Tabs */}
            <div className="flex justify-between mb-4 border-b ">
              <div className="flex w-full">
                <button className="w-1/2 py-2  bg-blue-100 text-gray-600 rounded-l text-sm font-medium text-center">
                  D/W from Wallet
                </button>
                <button className="w-1/2  py-2 bg-gray-100 text-gray-600 rounded-r text-sm font-medium text-center">
                  New Users
                </button>
              </div>
            </div>


            {/* Chart Container with Y-axis */}
            <div className="flex h-64">
              {/* Y-axis Labels */}
              <div className="flex flex-col justify-between text-xs text-gray-500 mr-2">
                <span>25,000</span>
                <span>15,000</span>
                <span>5,000</span>
                <span>0</span>
              </div>

              {/* Chart Bars */}
              <div className="flex flex-1 items-end space-x-1">
                {chartData.map((day, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="flex items-end h-48 w-full justify-center space-x-1">
                      <div
                        className="w-1/4 bg-green-500"
                        style={{ height: `${(day.deposit / 25000) * 100}%` }}
                      ></div>
                      <div
                        className="w-1/4 bg-red-500"
                        style={{ height: `${(day.withdraw / 25000) * 100}%` }}
                      ></div>
                      <div
                        className="w-1/4 bg-yellow-500"
                        style={{ height: `${(day.net / 25000) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs mt-2">{day.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center mt-4 space-x-4 text-xs">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 mr-1"></div>
                <span>Deposit</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 mr-1"></div>
                <span>Withdraw</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 mr-1"></div>
                <span>Net (D-W)</span>
              </div>
            </div>
          </div>

        </div>
      )}

      {activeTab === 'clients' && (
        <div className="flex flex-col gap-3 p-2">
          {statsDataClients.map((stat, index) => (
            <div key={index} className="flex bg-white rounded-lg shadow-md overflow-hidden">
              {/* Vertical Day Column */}
              <div className="flex flex-col items-center justify-center bg-yellow-600 p-2 min-w-[40px]">
                <span className="font-bold text-white text-base [writing-mode:vertical-rl] rotate-180">
                  {stat.day}
                </span>
              </div>

              {/* Stats Details */}
              <div className="flex-1 p-4 flex flex-col gap-1">
                <div className="flex justify-between border-b border-gray-400">
                  <span className="font-medium text-gray-600">Registered Clients:</span>
                  <span className="font-bold text-gray-800">{stat.registered}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">FTD:</span>
                  <span className="font-bold text-gray-800">{stat.FTD}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;