"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

interface DashboardControlPanelProps {
  state: {
    projectName: string
    teamSize: number
    budget: number
    isPublic: boolean
  }
  updateState: (key: string, value: any) => void
  editMode: boolean
}

export function DashboardControlPanel({ state, updateState, editMode }: DashboardControlPanelProps) {
  if (!editMode) return null

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Dashboard Control Panel</CardTitle>
        <CardDescription>Manage all aspects of your project from one place</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="project-name">Project Name</Label>
                <Input
                  id="project-name"
                  value={state.projectName}
                  onChange={(e) => updateState("projectName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-budget">Budget ($)</Label>
                <Input
                  id="project-budget"
                  type="number"
                  value={state.budget}
                  onChange={(e) => updateState("budget", Number(e.target.value))}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="public-project"
                  checked={state.isPublic}
                  onCheckedChange={(checked) => updateState("isPublic", checked)}
                />
                <Label htmlFor="public-project">Public Project</Label>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="team">
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Team Size</Label>
                <Slider
                  min={1}
                  max={20}
                  step={1}
                  value={[state.teamSize]}
                  onValueChange={([value]) => updateState("teamSize", value)}
                />
                <p className="text-sm text-muted-foreground">Current team size: {state.teamSize}</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="resources">
            <div className="space-y-4 py-4">{/* Add resource allocation controls here */}</div>
          </TabsContent>
          <TabsContent value="settings">
            <div className="space-y-4 py-4">{/* Add global settings controls here */}</div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

