"use client"
import { Search, Zap, Clock, Trash2 } from "lucide-react"
import AdminUserDropdown from "./components/AdminUserDropdown"
import Pagination from "./components/Pagination"

const SessionMonitoring = () => {
  // Sample session data
  const sessions = [
    {
      id: 1,
      station: "Downtown Mall",
      user: "Michael Johnson",
      duration: "1h 23m",
      status: "Ongoing",
      energy: "23.7 kWh",
      kw: "22 kW",
      cost: "$12.45",
      rate: "$0.53/kWh",
    },
    {
      id: 2,
      station: "City Center",
      user: "Sarah Chen",
      duration: "2h 53m",
      status: "Ongoing",
      energy: "45.2 kWh",
      kw: "50 kW",
      cost: "$22.60",
      rate: "$0.50/kWh",
    },
    {
      id: 3,
      station: "West Park",
      user: "David Wilson",
      duration: "0h 38m",
      status: "Ongoing",
      energy: "12.5 kWh",
      kw: "150 kW",
      cost: "$8.75",
      rate: "$0.70/kWh",
    },
    {
      id: 4,
      station: "North Mall",
      user: "Emily Rodriguez",
      duration: "3h 48m",
      status: "Ongoing",
      energy: "63.8 kWh",
      kw: "11 kW",
      cost: "$31.90",
      rate: "$0.50/kWh",
    },
    {
      id: 5,
      station: "East Station",
      user: "Robert Thompson",
      duration: "0h 03m",
      status: "Just started",
      energy: "0.5 kWh",
      kw: "75 kW",
      cost: "$0.30",
      rate: "$0.60/kWh",
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
        <h1 className="text-2xl font-bold text-teal-900">Active Charging Sessions</h1>
        <p className="text-gray-600">Monitor and manage all ongoing charging sessions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Zap className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Sessions</p>
              <p className="text-3xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Zap className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Energy</p>
              <p className="text-3xl font-bold text-gray-900">145.2 kWh</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Clock className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Duration</p>
              <p className="text-3xl font-bold text-gray-900">8h 45m</p>
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

      {/* Sessions Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-teal-900 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Station Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Energy</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Cost</th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sessions.map((session) => (
              <tr key={session.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{session.station}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{session.user}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{session.duration}</div>
                  <div className="text-xs text-gray-500">{session.status}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{session.energy}</div>
                  <div className="text-xs text-gray-500">{session.kw}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{session.cost}</div>
                  <div className="text-xs text-gray-500">{session.rate}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-500 hover:text-red-600">
                    <Trash2 className="h-5 w-5" />
                  </button>
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

export default SessionMonitoring
