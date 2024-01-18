import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Sidebar } from './sidebar'

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="link" size="icon" className="block md:hidden">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
