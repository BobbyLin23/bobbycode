'use client'

import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface SidebarItemProps {
  label: string
  href: string
  icon: LucideIcon
}

export const SidebarItem = ({ label, href, icon: Icon }: SidebarItemProps) => {
  const pathname = usePathname()

  return (
    <Link href={href} className="flex items-center">
      <div
        className={cn(
          `flex w-full cursor-pointer justify-start rounded-lg bg-background px-3 py-3.5 text-sm 
          font-medium text-muted-foreground hover:bg-muted`,
          pathname === href && 'bg-muted text-primary'
        )}
      >
        <Icon className="mr-2 h-5 w-5" />
        {label}
      </div>
    </Link>
  )
}
