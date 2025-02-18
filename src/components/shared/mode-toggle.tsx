import { LaptopMinimal, Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/providers/theme-provider"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <ToggleGroup type="single" size="sm" className="border w-fit rounded-full p-[1px]">
      <ToggleGroupItem value="bold" aria-label="Toggle bold" onClick={()=>setTheme("light")} className="rounded-full">
        <Sun className="h-2 w-2" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic" onClick={()=>setTheme("dark")} className="rounded-full">
        <Moon className="h-2 w-2" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough" onClick={()=>setTheme("system")} className="rounded-full">
        <LaptopMinimal className="h-2 w-2" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
