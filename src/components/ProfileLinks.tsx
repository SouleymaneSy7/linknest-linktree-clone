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
      className="flex flex-col gap-3 mt-10"
      items={linkList}
      renderItem={({ name, title, url }) => {
        return (
          <li key={name}>
            <Button
              asChild
              variant="secondary"
              className="font-bold font-space-grotesk text-foreground w-full h-12 flex justify-center items-center rounded-sm"
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
