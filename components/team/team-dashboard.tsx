"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const initialTeam = [
  {
    name: "John Smith",
    role: "Product Manager",
    email: "john@example.com",
    image: "/placeholder.svg",
    projects: 12,
  },
  {
    name: "Alice Johnson",
    role: "Developer",
    email: "alice@example.com",
    image: "/placeholder.svg",
    projects: 8,
  },
  {
    name: "Bob Wilson",
    role: "Designer",
    email: "bob@example.com",
    image: "/placeholder.svg",
    projects: 15,
  },
]

export function TeamDashboard() {
  const [team, setTeam] = useState(initialTeam)
  const [newMember, setNewMember] = useState({ name: "", role: "", email: "" })

  const addTeamMember = () => {
    if (newMember.name && newMember.role && newMember.email) {
      setTeam([...team, { ...newMember, image: "/placeholder.svg", projects: 0 }])
      setNewMember({ name: "", role: "", email: "" })
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Team</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Avatar className="h-9 w-9">
                <AvatarImage src={member.image} alt="Avatar" />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <CardTitle className="text-base">{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm">{member.email}</div>
              <div className="mt-2 text-sm text-muted-foreground">{member.projects} projects</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Separator />
      <Card>
        <CardHeader>
          <CardTitle>Add Team Member</CardTitle>
          <CardDescription>Add a new member to your team</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input
                placeholder="Enter name"
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Role</label>
              <Select value={newMember.role} onValueChange={(value) => setNewMember({ ...newMember, role: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Product Manager">Product Manager</SelectItem>
                  <SelectItem value="Developer">Developer</SelectItem>
                  <SelectItem value="Designer">Designer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="Enter email"
              value={newMember.email}
              onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
            />
          </div>
          <Button onClick={addTeamMember} className="w-full">
            <Plus className="mr-2 h-4 w-4" /> Add Member
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

