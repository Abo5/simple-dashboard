"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ProjectDashboardProps {
  teamSize: number
  budget: number
}

export function ProjectDashboard({ teamSize, budget }: ProjectDashboardProps) {
  const [tasks, setTasks] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate task calculation based on team size
    setTasks(teamSize * 5)
  }, [teamSize])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
        <CardDescription>Key project metrics and status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label>Team Size</Label>
            <div className="text-2xl font-bold">{teamSize}</div>
          </div>
          <div>
            <Label>Budget</Label>
            <div className="text-2xl font-bold">${budget.toLocaleString()}</div>
          </div>
          <div>
            <Label>Tasks</Label>
            <div className="text-2xl font-bold">{tasks}</div>
          </div>
          <div>
            <Label>Progress</Label>
            <Input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
            />
            <div className="text-2xl font-bold">{progress}%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

