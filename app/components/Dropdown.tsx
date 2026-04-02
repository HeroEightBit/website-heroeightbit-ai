'use client'

import { useState, useLayoutEffect } from 'react'

export function Dropdown({ title, description, startDate, endDate }: { title: string, description: string, startDate: string, endDate: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen((o) => !o)}>{title}</button>
      {isOpen && (
        <ul>
          <li>
            <p>{description}</p>
            <p>{startDate} - {endDate}</p>
          </li>
        </ul>
      )}
    </div>
  )
}