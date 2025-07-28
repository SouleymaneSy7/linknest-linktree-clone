import React from 'react'

import { profileData } from '../../../data'

import ProfileInfo from './ProfileInfo'
import ProfileLinks from './ProfileLinks'
import ProfileSocials from './ProfileSocials'
import ProfileMap from './ProfileMap'

const ProfileContents: React.FC = () => {
  return (
    <main role="main" className="container py-8 lg:py-14">
      <ProfileInfo
        profileName={profileData.profile_name}
        profileImg={profileData.profile_img}
        profileWork={profileData.profile_work}
        profileBio={profileData.profile_bio}
      />
      <ProfileLinks linkList={profileData.profile_links} />
      <ProfileMap />
      <ProfileSocials socialsList={profileData.profile_socials} />
    </main>
  )
}

export default ProfileContents
