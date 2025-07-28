import * as React from 'react'
import Image, { StaticImageData } from 'next/image'

import Title from '@/components/common/Title'
import Container from '@/components/common/Container'

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
        <div className="h-24 w-24 md:h-40 md:w-40">
          <Image
            src={profileImg}
            alt="profile image"
            className="aspect-square h-full w-full rounded-full object-cover"
            width={800}
            height={800}
            priority
          />
        </div>
      </div>

      <div className="mt-4 text-center">
        <Title
          level="h1"
          className="text-heading text-foreground font-space-grotesk font-bold"
        >
          {profileName}
        </Title>

        <Title level="h2" className="text-sub-heading text-primary font-medium">
          {profileWork}
        </Title>
        <p className="text-muted-foreground mt-1">&quot;{profileBio}&quot;</p>
      </div>
    </Container>
  )
}

export default ProfileInfo
