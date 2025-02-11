"use client"

import { useState } from "react"
import { Circle, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Task {
  title: string
  description?: string
  status: "low" | "medium" | "high"
}

interface Section {
  section: string
  tasks: Task[]
}

const initialTasks: Section[] = [
  {
    section: "Packaging",
    tasks: [
      {
        title: "Upload Thumbnail",
        status: "medium",
      },
      {
        title: "Finalize Title Options",
        description: "Finalize before writing outline",
        status: "high",
      },
    ],
  },
  {
    section: "Plan",
    tasks: [
      {
        title: "Sketch Thumbnail Concept",
        description: "This is the description for this task",
        status: "low",
      },
      {
        title: "Write Outline",
        status: "high",
      },
      {
        title: "Brainstorm Titles",
        status: "medium",
      },
    ],
  },
  {
    section: "Produce",
    tasks: [
      {
        title: "Record Video",
        status: "low",
      },
      {
        title: "Edit Video",
        status: "medium",
      },
    ],
  },
]

export function ProjectTaskList() {
  const [tasks, setTasks] = useState<Section[]>(initialTasks)
  const [newTask, setNewTask] = useState<Task>({ title: "", status: "medium" })
  const [editingSection, setEditingSection] = useState<string | null>(null)

  const addTask = (sectionName: string) => {
    if (newTask.title) {
      setTasks(
        tasks.map((section) => {
          if (section.section === sectionName) {
            return {
              ...section,
              tasks: [...section.tasks, { ...newTask }],
            }
          }
          return section
        }),
      )
      setNewTask({ title: "", status: "medium" })
      setEditingSection(null)
    }
  }

  const removeTask = (sectionName: string, taskIndex: number) => {
    setTasks(
      tasks.map((section) => {
        if (section.section === sectionName) {
          return {
            ...section,
            tasks: section.tasks.filter((_, index) => index !== taskIndex),
          }
        }
        return section
      }),
    )
  }

  return (
    <div className="space-y-6">
      {tasks.map((section) => (
        <Card key={section.section}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{section.section}</CardTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setEditingSection(section.section)}>
              <Plus className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-2">
            {section.tasks.map((task, taskIndex) => (
              <div key={taskIndex} className="flex items-start justify-between space-x-4 rounded-lg border p-3">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{task.title}</p>
                  {task.description && <p className="text-sm text-muted-foreground">{task.description}</p>}
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      task.status === "high" ? "destructive" : task.status === "medium" ? "default" : "secondary"
                    }
                  >
                    {task.status}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => removeTask(section.section, taskIndex)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            {editingSection === section.section && (
              <div className="space-y-2 pt-2">
                <Input
                  placeholder="Task title"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
                <div className="flex items-center gap-2">
                  <Select
                    value={newTask.status}
                    onValueChange={(value: "low" | "medium" | "high") => setNewTask({ ...newTask, status: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button onClick={() => addTask(section.section)}>Add Task</Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

