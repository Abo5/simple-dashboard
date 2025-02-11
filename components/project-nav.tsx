import { BarChart2, FileVideo, Home, Package, Send, Settings, Users2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const navItems = [
  { icon: Home, label: "Home" },
  { icon: FileVideo, label: "Videos" },
  { icon: BarChart2, label: "Analytics" },
  { icon: Users2, label: "Team" },
  { icon: Settings, label: "Settings" },
]

const projectItems = [
  { icon: Package, label: "Package", isActive: true },
  { icon: FileVideo, label: "Write" },
  { icon: Send, label: "Produce" },
  { icon: Send, label: "Publish" },
]

export function ProjectNav() {
  return (
    <div className="flex w-[250px] flex-col border-r bg-muted/10">
      <div className="flex h-14 items-center border-b px-4">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9533.JPG-OemW7dWZ437BW4MvaCG0sXMTX2Cdjz.jpeg"
            alt="Project thumbnail"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-sm">Project Manager</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-2 py-4">
        <div className="space-y-4">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Button key={item.label} variant="ghost" className="w-full justify-start gap-2">
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </div>
          <div className="space-y-1">
            <div className="px-2 py-1 text-xs font-medium">CREATE</div>
            {projectItems.map((item) => (
              <Button
                key={item.label}
                variant={item.isActive ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

