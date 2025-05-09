import { NavLink } from "react-router-dom"
import { LayoutGrid, BatteryCharging, MonitorSmartphone, DollarSign, Users, MessageSquare } from "lucide-react"

const Navbar = () => {
  // Navigation items with their icons, labels, and routes
  const navItems = [
    { icon: <LayoutGrid size={20} />, label: "Dashboard", to: "/dashboard" },
    { icon: <BatteryCharging size={20} />, label: "Charger Management", to: "/charger-management" },
    { icon: <MonitorSmartphone size={20} />, label: "Session Monitoring", to: "/session-monitoring" },
    { icon: <DollarSign size={20} />, label: "Earnings Tracking", to: "/earnings-tracking" },
    { icon: <Users size={20} />, label: "User Management", to: "/manage-user" },
    { icon: <MessageSquare size={20} />, label: "Messages", to: "/Chat" },
  ]

  return (
    <div className="min-h-screen w-[243px] bg-[#003732] text-white ">
      {/* Sidebar Header */}
      <div className="p-4 mb-4">
        <h1 className="text-xl font-bold text-white">EV Admin Dashboard</h1>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center p-3 rounded-md transition-colors w-full ${
                isActive ? "bg-white text-[#003732]" : "text-white hover:bg-teal-800"
              }`
            }
          >
            <span className="mr-3 flex-shrink-0">{item.icon}</span>
            <span className="whitespace-nowrap">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Navbar
