import * as React from 'react'

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
              <a
                href={url}
                target="_blank"
                title={title}
                className="text-foreground hover:text-primary transition-colors"
              >
                <Icon
                  className="text-current-color h-6 w-6 lg:h-8 lg:w-8"
                  stroke="currentcolor"
                  strokeWidth={2}
                />
              </a>
            </li>
          )
        }}
      />
    </Container>
  )
}

export default ProfileSocials
