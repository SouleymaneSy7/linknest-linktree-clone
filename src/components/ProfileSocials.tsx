import React from 'react'
import Container from './Container'

interface ProfileSocialsPropsType {
  socialsList: {
    title: string
    url: string
    src: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element
  }[]
}

const ProfileSocials: React.FC<ProfileSocialsPropsType> = ({ socialsList }) => {
  return (
    <Container as="div" className="flex justify-center items-center mt-12">
      <ul className="flex gap-4">
        {socialsList.map(({ title, url, src }) => {
          const Icon = src

          return (
            <li key={title}>
              <a href={url} target="_blank" title={title} className="text-foreground hover:text-primary transition-colors">
                <Icon className="text-current-color lg:w-8 lg:h-8" />
              </a>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ProfileSocials
