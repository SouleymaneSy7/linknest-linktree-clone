'use client'

import * as React from 'react'
import Link from 'next/link'

import Container from '@/components/common/Container'
import { ModeToggle } from '@/components/layouts/ModeToggle'

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
