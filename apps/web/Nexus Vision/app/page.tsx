import { Activity, ArrowUpRight, Circle, Sparkles, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"

const cards = [
  { title: "Active routes", value: "124", detail: "+8% vs last week" },
  { title: "On-time rate", value: "94.2%", detail: "Stable across 4 districts" },
  { title: "Critical alerts", value: "3", detail: "1 requires immediate attention" },
]

export default function Page() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-border/70 bg-gradient-to-br from-primary/10 via-background to-background p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              Intelligent operations briefing
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Monitor every route, signal, and patient handoff from one control surface.
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              This shell gives the platform a usable foundation for dashboards, maps, and research workflows with live status insights.
            </p>
          </div>
          <Button className="gap-2">
            Open incident review
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title} className="rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm">
            <p className="text-sm text-muted-foreground">{card.title}</p>
            <p className="mt-3 text-3xl font-semibold">{card.value}</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-emerald-600">
              <TrendingUp className="h-4 w-4" />
              {card.detail}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
        <div className="rounded-3xl border border-border/70 bg-card/70 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Operational health</p>
              <h2 className="text-xl font-semibold">Current coverage snapshot</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600">
              <Circle className="h-2.5 w-2.5 fill-current" />
              Stable
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {[
              ["North corridor", "82% capacity"],
              ["Central district", "91% capacity"],
              ["East transfer", "74% capacity"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary" />
                  <span className="font-medium">{label}</span>
                </div>
                <span className="text-sm text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border/70 bg-card/70 p-6 shadow-sm">
          <p className="text-sm text-muted-foreground">Next actions</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="rounded-2xl border border-border/70 bg-background/70 p-3">Review delayed transfers in the East corridor</li>
            <li className="rounded-2xl border border-border/70 bg-background/70 p-3">Reconcile the latest demand forecast inputs</li>
            <li className="rounded-2xl border border-border/70 bg-background/70 p-3">Share the weekly observatory summary with stakeholders</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
