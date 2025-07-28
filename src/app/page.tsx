import * as React from 'react'

import Header from '@/components/layouts/Header'
import Main from '@/components/layouts/Main'

import { DotPattern } from '@/components/ui/dot-pattern'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <React.Fragment>
      <div className="absolute inset-0 -z-50 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <DotPattern
          className={cn(
            '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
          )}
        />
      </div>
      <Header />

      <Main />
    </React.Fragment>
  )
}
