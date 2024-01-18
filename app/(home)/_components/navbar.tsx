import { Logo } from '@/components/logo'
import { Search } from './search'
import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'
import { MobileSidebar } from './mobile-sidebar'

export const Navbar = () => {
  return (
    <nav className="flex h-full items-center gap-x-4 border-b bg-background p-4">
      <Logo />
      <MobileSidebar />
      <Search />
      <Button variant="outline" className="ml-auto">
        <LogIn className="mr-2 h-4 w-4" />
        Login
      </Button>
    </nav>
  )
}
