"use client"
import { Search, User, Trash2 } from "lucide-react"
import AdminUserDropdown from "./components/AdminUserDropdown"
import Pagination from "./components/Pagination"

const ManageUsers = () => {
  // Sample user data
  const users = [
    {
      id: 1,
      name: "David Mitchell",
      email: "david.m@example.com",
      phone: "+1 (555) 123-4567",
      joinDate: "Jan 15, 2023",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarahj@example.com",
      phone: "+1 (555) 987-6543",
      joinDate: "Mar 3, 2023",
    },
    {
      id: 3,
      name: "Michael Lee",
      email: "michael.l@example.com",
      phone: "+1 (555) 234-5678",
      joinDate: "Nov 12, 2022",
    },
    {
      id: 4,
      name: "Lisa Wong",
      email: "lisaw@example.com",
      phone: "+1 (555) 765-4321",
      joinDate: "Jun 2, 2023",
    },
    {
      id: 5,
      name: "Robert Wilson",
      email: "robert.w@example.com",
      phone: "+1 (555) 876-5432",
      joinDate: "Feb 28, 2023",
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
        <h1 className="text-2xl font-bold text-teal-900">User Management</h1>
        <p className="text-gray-600">View and manage all users of the Station Finder app</p>
      </div>

      {/* Stats Card */}
      <div className="mb-8">
        <div className="border border-gray-200 rounded-lg p-6 max-w-xs">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <User className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <p className="text-3xl font-bold text-gray-900">1,248</p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
            <span className="text-sm font-medium">5.27% increase this month</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex justify-end">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Users Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-teal-900 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email/Phone</th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">{user.name.charAt(0)}</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">Joined {user.joinDate}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.email}</div>
                  <div className="text-sm text-gray-500">{user.phone}</div>
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

export default ManageUsers