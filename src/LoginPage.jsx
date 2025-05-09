"use client"

import { NavLink } from "react-router-dom"
import { useState } from "react"


const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt with:", { email, password })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full">
      {/* Left side - full-bleed image */}
      <div className="hidden md:block relative">
        <img
          src="https://i.ibb.co/n8f1QZyG/c9252a07a28d03eb7e1acafd22fe002a.png"
          alt="EV Charging Station"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right side - Login Form */}
      <div className="flex items-center justify-center px-8 md:px-16 lg:px-24 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-normal text-teal-900 mb-12">sign-in</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-teal-900"
                required
              />
            </div>

            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-teal-900 mb-10"
                required
              />
            </div>
            <NavLink

            to="./dashboard"
            >
            <button
              type="submit"
                            className="w-full bg-[#003732] text-white py-3 rounded-md hover:bg-teal-800 transition duration-300 "
            >         

              Login          
            </button>  </NavLink>

          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
