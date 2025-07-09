import * as React from 'react'
import Image, { StaticImageData } from 'next/image'

import Title from './Title'
import Container from './Container'

interface ProfileInfoPropsType {
  profileName: string
  profileImg: StaticImageData
  profileWork: string
  profileBio: string
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
  profileImg,
  profileName,
  profileWork,
  profileBio,
}) => {
  return (
    <Container as={'section'} className="mb-9">
      <div className="flex justify-center">
        <div className="w-24 h-24 md:w-40 md:h-40">
          <Image
            src={profileImg}
            alt="Photo d'un homme"
            className="rounded-full w-full h-full object-cover aspect-square"
            width={800}
            height={800}
            priority
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <Title
          level="h1"
          className="text-fs-xlg text-foreground font-space-grotesk font-bold"
        >
          {profileName}
        </Title>

        <Title level="h2" className="text-fs-lg text-primary font-bold">
          {profileWork}
        </Title>
        <p className="text-muted-foreground mt-1">&quot;{profileBio}&quot;</p>
      </div>
    </Container>
  )
}

export default ProfileInfo
