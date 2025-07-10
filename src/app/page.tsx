import Header from '@/components/Header'
import Main from '@/components/Main'

import { cn } from '@/lib/utils'
import { DotPattern } from '@/components/layouts/DotPattern'

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 -z-50 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <DotPattern
          glow={true}
          className={cn(
            '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
          )}
        />
      </div>
      <Header />

      <Main />
    </>
  )
}
