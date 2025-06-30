'use client'

import dynamic from 'next/dynamic'

// Dynamically load your real Navbar on the client, with no SSR
const Navbar = dynamic(() => import('./Navbar'), { ssr: false })

export default function NavbarClient() {
  return <Navbar />
}
