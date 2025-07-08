/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FhHJTdJDd5T
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Link from 'next/link'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'

const Custom404 = () => {
  return (
    <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3">
          <Title
            level="h1"
            className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl animate-bounce"
          >
            404
          </Title>

          <p className="text-muted-foreground">
            Looks like you&apos; ve ventured into the unknown digital realm.
          </p>
        </div>

        <Button>
          <Link href={'/'} prefetch={false}>
            Return to website
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Custom404
