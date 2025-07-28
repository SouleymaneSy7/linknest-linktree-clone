import * as React from 'react'
import { Button } from '@/components/ui/button'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import Container from '@/components/common/Container'
import List from '@/components/common/List'

interface ProfileSocialsPropsType {
  socialsList: {
    title: string
    url: string
    src: React.ElementType
  }[]
}

const ProfileSocials: React.FC<ProfileSocialsPropsType> = ({ socialsList }) => {
  return (
    <Container as="div" className="mt-12 grid place-items-center">
      <List
        className="flex flex-wrap items-center justify-center gap-4"
        items={socialsList}
        renderItem={({ title, url, src }) => {
          const Icon = src

          return (
            <li key={title}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className="[&_svg:not([class*='size-'])]:size-6"
                    asChild
                  >
                    <a
                      href={url}
                      target="_blank"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Icon
                        className="text-current-color"
                        stroke="currentcolor"
                        strokeWidth={2.3}
                      />
                    </a>
                  </Button>
                </TooltipTrigger>

                <TooltipContent>{title}</TooltipContent>
              </Tooltip>
            </li>
          )
        }}
      />
    </Container>
  )
}

export default ProfileSocials
