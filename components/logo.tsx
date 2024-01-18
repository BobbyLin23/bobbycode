import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export const Logo = () => {
  return (
    <Link
      href="/"
      className="hidden items-center gap-x-2 transition-opacity hover:opacity-70 md:flex"
    >
      <Avatar>
        <AvatarImage src="/image.png" alt="logo" />
        <AvatarFallback>BL</AvatarFallback>
      </Avatar>
      <p className="text-lg font-bold text-sky-500">Code With Bobby</p>
    </Link>
  )
}
