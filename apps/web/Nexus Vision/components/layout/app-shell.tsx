"use client"

import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"
import {
  BarChart3,
  Bell,
  ChevronRight,
  Compass,
  FlaskConical,
  LayoutGrid,
  Map,
  Menu,
  Moon,
  Search,
  Sun,
  Telescope,
  UserCircle2,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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

const breadcrumbs = ["Home", "Operations", "Transit Pulse"]

export function AppShell({ children }: { children: React.ReactNode }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [commandOpen, setCommandOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-3 py-3 lg:px-6 lg:py-6">
        <div className="flex flex-1 overflow-hidden rounded-[28px] border border-border/70 bg-card/80 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur">
          <aside
            className={cn(
              "fixed inset-y-0 left-0 z-30 w-72 border-r border-border/70 bg-background/95 p-5 transition-transform duration-300 lg:static lg:translate-x-0",
              sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
            )}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Nexus Vision
                </p>
                <h2 className="mt-1 text-lg font-semibold">Command Center</h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setSidebarOpen(false)}
              >
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

          <div className="flex flex-1 flex-col">
            <header className="border-b border-border/70 bg-background/80 px-4 py-3 sm:px-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="lg:hidden"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                  <div className="hidden sm:block">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      Mission control
                    </p>
                    <p className="text-sm font-semibold">Nexus Medical Transit</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    variant="outline"
                    className="gap-2 px-3"
                    onClick={() => setCommandOpen(true)}
                  >
                    <Search className="h-4 w-4" />
                    <span className="hidden sm:inline">Search</span>
                    <span className="rounded border border-border/70 px-1.5 py-0.5 text-[11px] text-muted-foreground">
                      ⌘K
                    </span>
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Notifications">
                    <Bell className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Toggle theme"
                    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  >
                    {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>

                  <div className="relative">
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => setProfileOpen((value) => !value)}
                    >
                      <UserCircle2 className="h-4 w-4" />
                      <span className="hidden sm:inline">Dr. K. Lee</span>
                    </Button>
                    {profileOpen ? (
                      <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-border/70 bg-popover p-2 shadow-lg">
                        <p className="px-2 py-1.5 text-sm font-semibold">Profile settings</p>
                        <button className="mt-1 flex w-full items-center rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">
                          Account
                        </button>
                        <button className="flex w-full items-center rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">
                          Sign out
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </header>

            <main className="flex-1 overflow-auto bg-gradient-to-br from-background via-background to-muted/30 p-4 sm:p-6 lg:p-8">
              <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                {breadcrumbs.map((item, index) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className={index === breadcrumbs.length - 1 ? "font-medium text-foreground" : ""}>
                      {item}
                    </span>
                    {index < breadcrumbs.length - 1 ? <ChevronRight className="h-4 w-4" /> : null}
                  </div>
                ))}
              </nav>

              {children}
            </main>
          </div>
        </div>
      </div>

      {commandOpen ? (
        <div className="fixed inset-0 z-40 flex items-start justify-center bg-black/40 px-4 pt-16">
          <div className="w-full max-w-2xl rounded-3xl border border-border/70 bg-background p-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Search className="h-4 w-4" />
                Search workspace
              </div>
              <Button variant="ghost" size="icon" onClick={() => setCommandOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-4 space-y-2">
              {[
                { label: "Transit pulse overview", hint: "Dashboard" },
                { label: "Route optimization", hint: "Operations" },
                { label: "Demand forecast", hint: "Research" },
              ].map((item) => (
                <button
                  key={item.label}
                  className="flex w-full items-center justify-between rounded-xl border border-border/70 px-3 py-2 text-left text-sm hover:bg-accent"
                >
                  <span>{item.label}</span>
                  <span className="text-muted-foreground">{item.hint}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
