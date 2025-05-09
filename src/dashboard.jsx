"use client"

import { useState } from "react"
import { Search, Battery, Activity, DollarSign, Lightbulb, LogOut, Menu } from "lucide-react"

const Dashboard = () => {
  const [showSignOut, setShowSignOut] = useState(false)

  // Stats data
  const stats = [
    {
      title: "Total Chargers",
      value: "48",
      icon: <Battery className="h-5 w-5" />,
      iconBg: "bg-blue-100",
    },
    {
      title: "Active Sessions",
      value: "16",
      icon: <Activity className="h-5 w-5" />,
      iconBg: "bg-green-100",
    },
    {
      title: "Today's Earnings",
      value: "$684.25",
      icon: <DollarSign className="h-5 w-5" />,
      iconBg: "bg-yellow-100",
    },
    {
      title: "Energy Delivered",
      value: "2,865 kWh",
      icon: <Lightbulb className="h-5 w-5" />,
      iconBg: "bg-purple-100",
    },
  ]

  return (
    <div className="p-6 bg-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8">
        <div className="w-full max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center">
          <div
            className="flex items-center gap-2 cursor-pointer relative"
            onMouseEnter={() => setShowSignOut(true)}
            onMouseLeave={() => setShowSignOut(false)}
          >
            <span className="text-[#003732] font-medium">Admin User</span>
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <Menu className="h-5 w-5 text-[#003732]" />
            </div>

            {/* Sign Out Dropdown */}
            {showSignOut && (
              <div className="absolute right-0 top-full mt-1 w-32 bg-white shadow-lg rounded-md py-1 z-10 border border-gray-200">
                <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dashboard Header */}
      <h1 className="text-2xl font-bold text-[#003732] mb-6">Dashboard Overview</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div className={`${stat.iconBg} p-3 rounded-full`}>{stat.icon}</div>
          </div>
        ))}
      </div>

      {/* Additional Dashboard Content - Charts, Tables, etc. */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        {/* <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-[#003732] mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-[#003732] font-medium">
                    U{item}
                  </div>
                  <div>
                    <p className="text-sm font-medium">Charging Session #{1000 + item}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(Date.now() - item * 1000 * 60 * 30).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-green-600 font-medium">Completed</span>
              </div>
            ))}
          </div>
          <button className="mt-4 text-sm text-teal-600 font-medium">View All Activity</button>
        </div> */}

        {/* Charger Status */}
        {/* <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-[#003732] mb-4">Charger Status</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      item % 3 === 0 ? "bg-red-500" : item % 2 === 0 ? "bg-yellow-500" : "bg-green-500"
                    }`}
                  ></div>
                  <p className="text-sm font-medium">Charger #{item}</p>
                </div>
                <span
                  className={`text-sm font-medium ${
                    item % 3 === 0 ? "text-red-600" : item % 2 === 0 ? "text-yellow-600" : "text-green-600"
                  }`}
                >
                  {item % 3 === 0 ? "Offline" : item % 2 === 0 ? "Idle" : "In Use"}
                </span>
              </div>
            ))}
          </div>
          <button className="mt-4 text-sm text-teal-600 font-medium">View All Chargers</button>
        </div> */}
      </div>
    </div>
  )
}

export default Dashboard
