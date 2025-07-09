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
    <Container as="div" className="grid place-items-center mt-12">
      <List
        className="flex gap-4 items-center"
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
                <Icon className="text-current-color lg:w-8 lg:h-8" />
              </a>
            </li>
          )
        }}
      />
    </Container>
  )
}

export default ProfileSocials
