import { useState } from "react"
import { LogOut, Menu } from 'lucide-react'

const AdminUserDropdown = () => {
  const [showSignOut, setShowSignOut] = useState(false)

  return (
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
  )
}

export default AdminUserDropdown
