"use client"
import { Search } from "lucide-react"
import AdminUserDropdown from "./components/AdminUserDropdown"
import Pagination from "./components/Pagination"

const EarningsTracking = () => {
  // Sample earnings data
  const earnings = [
    {
      id: 1,
      station: "Downtown Mall",
      sessions: 42,
      energy: "168.5",
      revenue: "$421.25",
    },
    {
      id: 2,
      station: "Downtown Mall",
      sessions: 38,
      energy: "152.3",
      revenue: "$380.75",
    },
    {
      id: 3,
      station: "Downtown Mall",
      sessions: 45,
      energy: "180.2",
      revenue: "$450.50",
    },
    {
      id: 4,
      station: "Downtown Mall",
      sessions: 36,
      energy: "144.8",
      revenue: "$362.00",
    },
  ]

  return (
    <div className="p-6 bg-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8">
        <div></div>
        <AdminUserDropdown />
      </div>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-teal-900">Earnings Dashboard</h1>
        <p className="text-gray-600">Track and manage all revenue from charging stations</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border border-gray-200 rounded-lg p-6">
          <div>
            <p className="text-sm text-gray-500">Total Revenue</p>
            <p className="text-3xl font-bold text-gray-900">$24,856.00</p>
            <div className="mt-2 flex items-center text-green-600">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
              <span className="text-sm font-medium">12% from last month</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <div>
            <p className="text-sm text-gray-500">Active Sessions</p>
            <p className="text-3xl font-bold text-gray-900">28</p>
            <p className="mt-2 text-sm text-gray-500">Across 14 stations</p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <div>
            <p className="text-sm text-gray-500">Avg. Session Value</p>
            <p className="text-3xl font-bold text-gray-900">$12.47</p>
            <div className="mt-2 flex items-center text-green-600">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
              <span className="text-sm font-medium">3% from last week</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex justify-end">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Earnings Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-teal-900 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Station Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Sessions</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Energy (kWh)</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Revenue</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {earnings.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{item.station}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.sessions}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.energy}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{item.revenue}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination />
    </div>
  )
}

export default EarningsTracking
