import { Button } from '@/components/ui/button'

// Placeholder until the first feature lands. Styling is shadcn's neutral
// default on purpose: the brand comes from the design system work, not here.
function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Courtside</h1>
      <p className="max-w-md text-muted-foreground">
        Find a tennis coach in the Philippines. Coming soon.
      </p>
      <Button>Find a coach</Button>
    </main>
  )
}

export default App
