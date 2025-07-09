import React from 'react'
import { Button } from '@/components/ui/button'

import List from '@/components/List'

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
            <Button
              asChild
              variant="secondary"
              className="font-space-grotesk text-foreground grid h-13 w-full place-items-center rounded-sm font-bold"
            >
              <a href={url} title={title} target="_blank">
                {name}
              </a>
            </Button>
          </li>
        )
      }}
    />
  )
}

export default ProfileLinks
