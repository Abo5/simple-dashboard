"use client"

import { Bar, BarChart, ResponsiveContainer } from "recharts"
import type React from "react" // Import React

const data = [
  {
    engagement: 400,
  },
  {
    engagement: 300,
  },
  {
    engagement: 500,
  },
  {
    engagement: 400,
  },
  {
    engagement: 600,
  },
  {
    engagement: 500,
  },
  {
    engagement: 700,
  },
]

export function EngagementChart({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <BarChart data={data}>
        <Bar
          dataKey="engagement"
          style={{
            fill: "var(--theme-primary)",
            opacity: 0.8,
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

