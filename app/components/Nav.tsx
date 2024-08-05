'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [showNav, setShowNav] = useState(false)

  if (showNav) {
    return (
      <nav className="absolute right-0 bottom-0 flex flex-col gap-1 p-4 bg-slate-600 me-4 mb-4 text-slate-100 shadow-lg rounded-lg">
        <div
          className="cursor-pointer bg-slate-100 text-slate-900 rounded-full w-5 h-5 self-end text-center mb-2 hover:bg-red-500"
          onClick={() => setShowNav(false)}
        ></div>
        <Link href="/url-segmenter">URL Segmenter</Link>
        <Link href="/base64-decoder">Base64 Decoder</Link>
        <Link href="/sql-formatter">SQL Formatter</Link>
      </nav>
    )
  } else {
    return (
      <nav
        className="absolute right-0 bottom-0 flex flex-col gap-1 px-5 py-2 bg-slate-600 me-4 mb-4 text-slate-100 shadow-lg rounded-full cursor-pointer"
        onClick={() => setShowNav(true)}
      >
        Open Nav
      </nav>
    )
  }
}
