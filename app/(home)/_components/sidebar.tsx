'use client'

import { Compass, Grip, Mail } from 'lucide-react'
import { SidebarItem } from './sidebar-item'

export const Sidebar = () => {
  const routes = [
    {
      name: 'Browse',
      href: '/',
      icon: Compass,
    },
    {
      name: 'Newsletter',
      href: '/newsletter',
      icon: Mail,
    },
    {
      name: 'About',
      href: '/about',
      icon: Grip,
    },
  ]

  return (
    <aside className="flex h-full flex-col border-r bg-background">
      <div className="flex w-full flex-col space-y-1.5 p-3">
        {routes.map((item) => (
          <SidebarItem
            key={item.name}
            label={item.name}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </div>
    </aside>
  )
}
