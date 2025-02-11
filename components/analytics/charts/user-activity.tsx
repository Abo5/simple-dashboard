"use client"

import type React from "react"
import { Line, LineChart, ResponsiveContainer } from "recharts"

const data = [
  {
    revenue: 400,
  },
  {
    revenue: 300,
  },
  {
    revenue: 500,
  },
  {
    revenue: 400,
  },
  {
    revenue: 600,
  },
  {
    revenue: 500,
  },
  {
    revenue: 700,
  },
]

export function UserActivityChart({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

