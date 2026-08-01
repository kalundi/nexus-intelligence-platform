"use client"

import Link from "next/link"
import { BarChart3, Compass, FlaskConical, LayoutGrid, Map, Telescope, X } from "lucide-react"

import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

type NavItem = {
  label: string
  href: string
  icon: typeof LayoutGrid
}

const navigation: NavItem[] = [
  { label: "Overview", href: "/", icon: LayoutGrid },
  { label: "Operations", href: "/operations", icon: Compass },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Maps", href: "/maps", icon: Map },
  { label: "Observatory", href: "/observatory", icon: Telescope },
  { label: "Research", href: "/research", icon: FlaskConical },
]

type SidebarProps = {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-30 w-72 border-r border-border/70 bg-background/95 p-5 transition-transform duration-300 lg:static lg:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Nexus Vision
          </p>
          <h2 className="mt-1 text-lg font-semibold">Command Center</h2>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <nav className="mt-8 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                item.href === "/"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="mt-8 rounded-2xl border border-border/70 bg-muted/40 p-4">
        <p className="text-sm font-semibold">Live mission status</p>
        <p className="mt-2 text-sm text-muted-foreground">
          12 active routes · 94% on-time performance · 3 alerts
        </p>
      </div>
    </aside>
  )
}
