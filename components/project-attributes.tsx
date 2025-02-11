import { Plus } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function ProjectAttributes() {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle className="text-sm font-medium">PROJECT ATTRIBUTES</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="text-sm font-medium">Platform</div>
          <div className="text-sm text-muted-foreground">YouTube</div>
        </div>
        <Separator />
        <div className="space-y-2">
          <div className="text-sm font-medium">Product</div>
          <div className="text-sm text-muted-foreground">YouTube Video</div>
        </div>
        <Separator />
        <div className="space-y-2">
          <div className="text-sm font-medium">Category / Pillar</div>
          <div className="text-sm text-muted-foreground">Podcast</div>
        </div>
        <Separator />
        <div className="space-y-2">
          <div className="text-sm font-medium">Relevance</div>
          <div className="text-sm text-muted-foreground">Time Sensitive</div>
        </div>
        <Separator />
        <div className="space-y-2">
          <div className="text-sm font-medium">Scheduled Date</div>
          <div className="text-sm text-muted-foreground">Fri 23rd Aug 2024</div>
        </div>
        <Separator />
        <div className="space-y-2">
          <div className="text-sm font-medium">TEAM</div>
          <div className="flex items-center gap-2">
            <Image src="/placeholder.svg" alt="User avatar" width={24} height={24} className="rounded-full" />
            <div className="text-sm">ken@email.com</div>
          </div>
          <Button variant="outline" className="w-full justify-start gap-2">
            <Plus className="h-4 w-4" />
            Add User to Project
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

