import React from 'react'
import { Button } from '@/components/ui/button'

interface ProfileLinksPropsType {
  linkList: {
    name: string
    title: string
    url: string
  }[]
}

const ProfileLinks: React.FC<ProfileLinksPropsType> = ({ linkList }) => {
  return (
    <React.Fragment>
      <ul className="flex flex-col gap-3 mt-10">
        {linkList.map(({ name, title, url }) => {
          return (
            <li key={name}>
              <Button asChild variant="secondary" className="font-semibold">
                <a
                  href={url}
                  title={title}
                  target="_blank"
                  className="font-space-grotesk font-fw-bold text-text-clr w-full h-14 flex justify-center items-center rounded-sm bg-secondary-bg-clr "
                >
                  {name}
                </a>
              </Button>
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

export default ProfileLinks
