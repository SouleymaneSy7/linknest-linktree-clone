import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import Container from './Container'
import List from './List'

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
        className="flex items-center gap-4"
        items={socialsList}
        renderItem={({ title, url, src }) => {
          const Icon = src

          return (
            <li key={title}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" asChild>
                    <a
                      href={url}
                      target="_blank"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Icon
                        className="text-current-color w- lg:h-8 lg:w-8"
                        stroke="currentcolor"
                        strokeWidth={2}
                      />
                    </a>
                  </Button>
                </TooltipTrigger>

                <TooltipContent>
                  <p>{title}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          )
        }}
      />
    </Container>
  )
}

export default ProfileSocials
