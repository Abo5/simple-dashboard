"use client"

import { useState, useEffect } from "react"
import { Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const mockUsers = [
  { id: 1, name: "Alice", avatar: "/placeholder.svg", status: "active" },
  { id: 2, name: "Bob", avatar: "/placeholder.svg", status: "idle" },
  { id: 3, name: "Charlie", avatar: "/placeholder.svg", status: "active" },
]

export function RealTimeCollaboration() {
  const [users, setUsers] = useState(mockUsers)

  useEffect(() => {
    // Simulating real-time updates
    const interval = setInterval(() => {
      setUsers((prevUsers) =>
        prevUsers.map((user) => ({
          ...user,
          status: Math.random() > 0.5 ? "active" : "idle",
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Real-Time Collaboration</CardTitle>
        <CardDescription>See who's currently working on the project</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          {users.map((user) => (
            <div key={user.id} className="flex flex-col items-center">
              <Avatar className="h-12 w-12 border-2 border-background">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <span className="mt-1 text-xs font-medium">{user.name}</span>
              <span className={`w-2 h-2 rounded-full ${user.status === "active" ? "bg-green-500" : "bg-yellow-500"}`} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

