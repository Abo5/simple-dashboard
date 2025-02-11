"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge" // Import Badge component

const mockTimeline = [
  { id: 1, task: "Project Kickoff", date: "2023-01-01", status: "completed" },
  { id: 2, task: "Design Phase", date: "2023-02-15", status: "completed" },
  { id: 3, task: "Development Sprint 1", date: "2023-03-01", status: "in-progress" },
  { id: 4, task: "User Testing", date: "2023-04-15", status: "upcoming" },
  { id: 5, task: "Launch Preparation", date: "2023-05-01", status: "upcoming" },
]

export function ProjectTimeline() {
  const [currentMonth, setCurrentMonth] = useState(2) // March

  const nextMonth = () => setCurrentMonth((prev) => Math.min(prev + 1, 4))
  const prevMonth = () => setCurrentMonth((prev) => Math.max(prev - 1, 0))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Timeline</CardTitle>
        <CardDescription>Track project milestones and progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <Button onClick={prevMonth} variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="font-medium">2023 - Month {currentMonth + 1}</span>
          <Button onClick={nextMonth} variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-4">
          {mockTimeline.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <div
                className={`w-3 h-3 rounded-full ${
                  item.status === "completed"
                    ? "bg-green-500"
                    : item.status === "in-progress"
                      ? "bg-blue-500"
                      : "bg-gray-300"
                }`}
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.task}</p>
                <p className="text-xs text-muted-foreground">{item.date}</p>
              </div>
              <Badge
                variant={
                  item.status === "completed" ? "default" : item.status === "in-progress" ? "secondary" : "outline"
                }
              >
                {item.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

