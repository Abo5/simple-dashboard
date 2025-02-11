"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { DashboardControlPanel } from "@/components/dashboard-control-panel"
import { ProjectDashboard } from "@/components/project-dashboard"
import { AIInsights } from "@/components/ai-insights/ai-insights"
import { RealTimeCollaboration } from "@/components/collaboration/real-time-collaboration"
import { ProjectTimeline } from "@/components/project/project-timeline"
import { ResourceAllocation } from "@/components/resources/resource-allocation"

export default function Home() {
  const [dashboardState, setDashboardState] = useState({
    projectName: "My Project",
    teamSize: 5,
    budget: 10000,
    isPublic: false,
  })
  const [editMode, setEditMode] = useState(false)

  const updateDashboard = (key: string, value: any) => {
    setDashboardState((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{dashboardState.projectName} Dashboard</h1>
        <div className="flex items-center space-x-2">
          <Switch id="edit-mode" checked={editMode} onCheckedChange={setEditMode} />
          <Label htmlFor="edit-mode">Edit Mode</Label>
        </div>
      </div>
      <DashboardControlPanel state={dashboardState} updateState={updateDashboard} editMode={editMode} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ProjectDashboard teamSize={dashboardState.teamSize} budget={dashboardState.budget} editMode={editMode} />
        <AIInsights projectName={dashboardState.projectName} isPublic={dashboardState.isPublic} editMode={editMode} />
        <RealTimeCollaboration teamSize={dashboardState.teamSize} editMode={editMode} />
        <ProjectTimeline projectName={dashboardState.projectName} editMode={editMode} />
        <ResourceAllocation budget={dashboardState.budget} editMode={editMode} />
      </div>
    </div>
  )
}

