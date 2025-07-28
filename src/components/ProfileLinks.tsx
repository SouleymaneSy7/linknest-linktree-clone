import React from 'react'
import { Button } from '@/components/ui/button'

import List from '@/components/List'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface ProfileLinksPropsType {
  linkList: {
    name: string
    title: string
    url: string
  }[]
}

const ProfileLinks: React.FC<ProfileLinksPropsType> = ({ linkList }) => {
  return (
    <List
      className="mt-10 flex flex-col gap-3"
      items={linkList}
      renderItem={({ name, title, url }) => {
        return (
          <li key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="secondary"
                  className="font-space-grotesk text-foreground grid h-13 w-full place-items-center rounded-sm font-bold"
                >
                  <a href={url} target="_blank">
                    {name}
                  </a>
                </Button>
              </TooltipTrigger>

              <TooltipContent>{title}</TooltipContent>
            </Tooltip>
          </li>
        )
      }}
    />
  )
}

export default ProfileLinks
