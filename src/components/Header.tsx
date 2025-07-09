'use client'

import * as React from 'react'

import Container from '@/components/Container'
import Link from 'next/link'
import { ModeToggle } from './layouts/ModeToggle'

const Header: React.FC = () => {
  return (
    <Container as={'header'} className="container pt-8">
      <nav
        role="navigation"
        className="flex w-full items-center justify-between"
      >
        <Link
          href={'/'}
          className="font-space-grotesk text-sub-heading font-bold"
        >
          Link<span className="text-primary">Nest</span>
        </Link>

        <ModeToggle />
      </nav>
    </Container>
  )
}

export default Header
