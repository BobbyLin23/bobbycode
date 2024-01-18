import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main>
      <div className="p-2">
        <Button>Click</Button>
        <ModeToggle />
      </div>
    </main>
  )
}
