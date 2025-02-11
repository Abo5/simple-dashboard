"use client"

import { Area, AreaChart, ResponsiveContainer } from "recharts"
import type React from "react" // Import React

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

export function RevenueChart({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <AreaChart data={data}>
        <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" strokeWidth={2} fillOpacity={0.2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

