"use client"

import { useState } from "react"
import { Search, Send } from "lucide-react"
import AdminUserDropdown from "./components/AdminUserDropdown"

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(0)
  const [messageInput, setMessageInput] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "admin",
      text: "Hello, I am chatbot. How can I help you today.",
      timestamp: new Date(),
    },
    {
      id: 2,
      sender: "user",
      text: "Hy",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
    },
    {
      id: 3,
      sender: "user",
      text: "I want to know about chargers",
      timestamp: new Date(Date.now() - 1000 * 60 * 3),
    },
  ])

  // Sample users data
  const users = [
    {
      id: 1,
      name: "David Mitchell",
      joinDate: "Jan 15, 2023",
      avatar: "DM",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      joinDate: "Jan 15, 2023",
      avatar: "SJ",
    },
    {
      id: 3,
      name: "Michael Lee",
      joinDate: "Jan 15, 2023",
      avatar: "ML",
    },
    {
      id: 4,
      name: "Lisa Wong",
      joinDate: "Jan 15, 2023",
      avatar: "LW",
    },
    {
      id: 5,
      name: "Robert Wilson",
      joinDate: "Jan 15, 2023",
      avatar: "RW",
    },
    {
      id: 6,
      name: "Emily Davis",
      joinDate: "Jan 15, 2023",
      avatar: "ED",
    },
    {
      id: 7,
      name: "James Brown",
      joinDate: "Jan 15, 2023",
      avatar: "JB",
    },
  ]

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!messageInput.trim()) return

    const newMessage = {
      id: messages.length + 1,
      sender: "admin",
      text: messageInput,
      timestamp: new Date(),
    }

    setMessages([...messages, newMessage])
    setMessageInput("")
  }

  return (
    <div className="p-6 bg-white h-screen flex flex-col">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <div className="w-full max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <AdminUserDropdown />
      </div>

      {/* Chat Interface */}
      <div className="flex flex-1 border border-gray-200 rounded-lg overflow-hidden">
        {/* Users List */}
        <div className="w-1/3 border-r border-gray-200 overflow-y-auto">
          {users.map((user, index) => (
            <div
              key={user.id}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 ${
                selectedUser === index ? "bg-gray-100" : ""
              }`}
              onClick={() => setSelectedUser(index)}
            >
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <span className="text-sm font-medium text-gray-600">{user.avatar}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">Joined {user.joinDate}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Window */}
        <div className="w-2/3 flex flex-col">
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 max-w-[70%] ${
                  message.sender === "admin"
                    ? "ml-auto bg-teal-900 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg"
                    : "mr-auto bg-gray-100 text-gray-800 rounded-tr-lg rounded-br-lg rounded-bl-lg"
                } p-3 rounded-lg`}
              >
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-200 p-4">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type your query here..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <button type="submit" className="p-2 bg-teal-900 text-white rounded-full hover:bg-teal-800">
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
