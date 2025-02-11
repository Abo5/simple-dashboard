"use client"

import { useState } from "react"
import { Bot, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function AIInsights() {
  const [insight, setInsight] = useState("")
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState("")

  const generateInsight = async () => {
    setLoading(true)
    // Simulating AI response. In a real app, this would be an API call to an AI service.
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setInsight(
      `Based on recent trends, consider focusing on ${query} to improve project efficiency by approximately 23%. This aligns with successful patterns observed in similar projects.`,
    )
    setLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Powered Insights</CardTitle>
        <CardDescription>Get AI-generated insights for your project</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Ask about project trends, efficiency, etc."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={generateInsight} disabled={loading || !query}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />}
            Generate
          </Button>
        </div>
        {insight && <p className="mt-4 text-sm text-muted-foreground">{insight}</p>}
      </CardContent>
    </Card>
  )
}

