"use client"

import { useState, useEffect } from "react"
import { Search, Zap, Trash2 } from "lucide-react"
import AdminUserDropdown from "./components/AdminUserDropdown"
import Pagination from "./components/Pagination"

const ChargerManagement = () => {
  // Animation state for session counts
  const [sessionCounts, setSessionCounts] = useState({
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
  })

  // Target values for animation
  const targetCounts = {
    Jan: 15,
    Feb: 40,
    Mar: 30,
    Apr: 10,
    May: 35,
  }

  // Animate the session counts on component mount
  useEffect(() => {
    const interval = setInterval(() => {
      let allReached = true

      setSessionCounts((prev) => {
        const newCounts = { ...prev }

        Object.keys(targetCounts).forEach((month) => {
          if (newCounts[month] < targetCounts[month]) {
            newCounts[month] += 1
            allReached = false
          }
        })

        return newCounts
      })

      if (allReached) {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Sample charger data
  const chargers = [
    {
      id: "#CH001",
      type: "Fast Charger",
      active: true,
    },
    {
      id: "#CH002",
      type: "Standard Charger",
      active: true,
    },
    {
      id: "#CH003",
      type: "Fast Charger",
      active: false,
    },
    {
      id: "#CH004",
      type: "Standard Charger",
      active: true,
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
        <h1 className="text-2xl font-bold text-teal-900">Charger Management</h1>
        <p className="text-gray-600">Remove chargers and monitor their real-time status.</p>
      </div>

      {/* Stats Card */}
      <div className="mb-8">
        <div className="border border-gray-200 rounded-lg p-6 max-w-xs">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Zap className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Chargers</p>
              <p className="text-3xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex justify-end">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search chargers..."
            className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Chargers Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-teal-900 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Charger ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Active</th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {chargers.map((charger) => (
              <tr key={charger.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{charger.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{charger.type}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={charger.active} readOnly />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
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

      {/* Visual Display of Sessions */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-teal-900 mb-6">Visual Display of Sessions</h2>
        <div className="flex flex-col space-y-4">
          {Object.entries(sessionCounts).map(([month, count]) => (
            <div key={month} className="flex items-center">
              <div className="w-12 text-right mr-4 text-sm font-medium">{month}</div>
              <div className="flex-1 bg-gray-100 h-8 rounded-md relative">
                <div
                  className="absolute top-0 left-0 h-8 bg-teal-700 rounded-md transition-all duration-500 ease-out flex items-center justify-end pr-2"
                  style={{
                    width: `${(count / 60) * 100}%`,
                  }}
                >
                  <span className="text-white text-sm font-medium">{count}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between pl-16 pr-2 mt-2">
            <div className="text-xs text-gray-500">10</div>
            <div className="text-xs text-gray-500">20</div>
            <div className="text-xs text-gray-500">30</div>
            <div className="text-xs text-gray-500">40</div>
            <div className="text-xs text-gray-500">50</div>
            <div className="text-xs text-gray-500">60</div>
          </div>
          <div className="text-center text-sm text-gray-500 mt-2">Hours</div>
        </div>
      </div>
    </div>
  )
}

export default ChargerManagement
