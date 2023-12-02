'use client'
 
import { useSelectedLayoutSegments } from 'next/navigation'
 
export default function LayoutSegments() {
  const segments = useSelectedLayoutSegments()
 
  return (
    <ul>
      {segments.map((segment, index) => (
        <li key={index}>seg: {segment}</li>
      ))}
    </ul>
  )
}