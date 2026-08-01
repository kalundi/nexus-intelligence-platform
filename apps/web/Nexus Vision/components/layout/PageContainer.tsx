import { ChevronRight } from "lucide-react"

type PageContainerProps = {
  children: React.ReactNode
  breadcrumbs?: string[]
}

export function PageContainer({ children, breadcrumbs = ["Home", "Operations", "Transit Pulse"] }: PageContainerProps) {
  return (
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
  )
}
