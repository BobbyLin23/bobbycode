'use client'

import { SearchIcon, X } from 'lucide-react'
import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const Search = () => {
  const [value, setValue] = useState('')

  const onClear = () => {
    setValue('')
  }

  return (
    <div className="ml-auto hidden md:block">
      <form className="relative flex items-center">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0 md:w-[300px] lg:w-[600px]"
          placeholder="Search for a course"
        />
        {value && (
          <Button
            variant="link"
            size="icon"
            className="absolute right-12 hover:opacity-70"
            onClick={onClear}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
        <Button className="rounded-l-none bg-sky-500">
          <SearchIcon className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}
