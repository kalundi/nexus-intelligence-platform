"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/layout/PageContainer"
import { Sidebar } from "@/components/layout/Sidebar"
import { TopNav } from "@/components/layout/TopNav"

type AppShellProps = {
  children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [commandOpen, setCommandOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-3 py-3 lg:px-6 lg:py-6">
        <div className="flex flex-1 overflow-hidden rounded-[28px] border border-border/70 bg-card/80 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur">
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

          <div className="flex flex-1 flex-col">
            <TopNav
              onOpenSidebar={() => setSidebarOpen(true)}
              onOpenCommand={() => setCommandOpen(true)}
              onToggleProfile={() => setProfileOpen((value) => !value)}
              profileOpen={profileOpen}
            />

            <PageContainer>{children}</PageContainer>
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
