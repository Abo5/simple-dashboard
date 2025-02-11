"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activity = [
  {
    user: {
      name: "John Smith",
      image: "/placeholder.svg",
      email: "john@example.com",
    },
    action: "created new task",
    timestamp: "2 hours ago",
  },
  {
    user: {
      name: "Alice Johnson",
      image: "/placeholder.svg",
      email: "alice@example.com",
    },
    action: "completed project",
    timestamp: "4 hours ago",
  },
  {
    user: {
      name: "Bob Wilson",
      image: "/placeholder.svg",
      email: "bob@example.com",
    },
    action: "added new comment",
    timestamp: "6 hours ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activity.map((item, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={item.user.image} alt="Avatar" />
            <AvatarFallback>
              {item.user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{item.user.name}</p>
            <p className="text-sm text-muted-foreground">{item.action}</p>
          </div>
          <div className="ml-auto font-medium">{item.timestamp}</div>
        </div>
      ))}
    </div>
  )
}

