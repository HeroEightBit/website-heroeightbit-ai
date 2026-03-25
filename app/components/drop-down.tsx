'use client'
 
import { useState, useLayoutEffect } from 'react'
 
export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
 
  // Close dropdown when this component becomes hidden
  useLayoutEffect(() => {
    return () => {
      setIsOpen(false)
    }
  }, [])
 
  return (
    <div>
      <button onClick={() => setIsOpen((o) => !o)}>Options</button>
      {isOpen && (
        <ul>
          <li>
            <button>Edit Profile</button>
          </li>
          <li>
            <button>Change Password</button>
          </li>
        </ul>
      )}
    </div>
  )
}