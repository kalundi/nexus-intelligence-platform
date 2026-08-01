"use client"

import { Bell, Menu, Moon, Search, Sun, UserCircle2 } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "../ui/button"

type TopNavProps = {
  onOpenSidebar: () => void
  onOpenCommand: () => void
  onToggleProfile: () => void
  profileOpen: boolean
}

export function TopNav({ onOpenSidebar, onOpenCommand, onToggleProfile, profileOpen }: TopNavProps) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <header className="border-b border-border/70 bg-background/80 px-4 py-3 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="lg:hidden" onClick={onOpenSidebar}>
            <Menu className="h-4 w-4" />
          </Button>
          <div className="hidden sm:block">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Mission control</p>
            <p className="text-sm font-semibold">Nexus Medical Transit</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" className="gap-2 px-3" onClick={onOpenCommand}>
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
            <Button variant="outline" className="gap-2" onClick={onToggleProfile}>
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
  )
}
