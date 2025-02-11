"use client"

import { useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

ChartJS.register(ArcElement, Tooltip, Legend)

const initialData = {
  labels: ["Development", "Design", "Marketing", "Research"],
  datasets: [
    {
      data: [40, 20, 25, 15],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
    },
  ],
}

interface ResourceAllocationProps {
  budget: number
  editMode: boolean
}

export function ResourceAllocation({ budget, editMode }: ResourceAllocationProps) {
  const [data, setData] = useState(initialData)
  const [selectedResource, setSelectedResource] = useState("Development")

  const updateAllocation = (value: string) => {
    const newValue = Number.parseInt(value, 10)
    setData((prevData) => {
      const newData = { ...prevData }
      const index = newData.labels.indexOf(selectedResource)
      newData.datasets[0].data[index] = newValue
      return newData
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Allocation</CardTitle>
        <CardDescription>Track and adjust resource distribution</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center mb-4">
          <div style={{ width: "200px", height: "200px" }}>
            <Doughnut data={data} />
          </div>
        </div>
        {editMode && (
          <div className="space-y-2">
            <Select onValueChange={setSelectedResource} defaultValue={selectedResource}>
              <SelectTrigger>
                <SelectValue placeholder="Select resource" />
              </SelectTrigger>
              <SelectContent>
                {data.labels.map((label) => (
                  <SelectItem key={label} value={label}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              onValueChange={updateAllocation}
              defaultValue={data.datasets[0].data[data.labels.indexOf(selectedResource)].toString()}
            >
              <SelectTrigger>
                <SelectValue placeholder="Adjust allocation" />
              </SelectTrigger>
              <SelectContent>
                {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((value) => (
                  <SelectItem key={value} value={value.toString()}>
                    {value}%
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        <div className="mt-4">
          <p className="text-sm font-medium">Total Budget: ${budget.toLocaleString()}</p>
        </div>
      </CardContent>
    </Card>
  )
}

