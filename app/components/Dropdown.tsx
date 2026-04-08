'use client'

import { useState } from 'react'

export function Dropdown({ title, description, startDate, endDate }: { title: string, description: string, startDate: string, endDate: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <button
        type="button"
        className="w-full text-left font-semibold text-lg px-2 py-1 rounded-md bg-red-800 hover:bg-red-950 p-4"
        onClick={() => setIsOpen((o) => !o)}
      >
        {title}
              {isOpen && (
        <ul className="mt-2 space-y-1 p-4">
          <li className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md p-4">
            <p>Summary: {description}</p>
            <p>Start Date: {startDate}</p>
            <p>End Date: {endDate}</p>
          </li>
        </ul>
      )}

      </button>


  )
}