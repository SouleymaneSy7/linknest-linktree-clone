import React from "react";
import Image, { StaticImageData } from "next/image";

import Title from "./Title";

interface ProfileInfoPropsType {
  profileName: string;
  profileImg: StaticImageData;
  profileWork: string;
  profileBio: string;
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
  profileImg,
  profileName,
  profileWork,
  profileBio,
}) => {
  return (
    <section className="mb-9">
      <div className="flex justify-center">
        <div className="w-24 h-24 md:w-40 md:h-40">
          <Image
            src={profileImg}
            alt="Photo d'un homme"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <Title
          level="h1"
          className="text-fs-xlg text-text-clr font-space-grotesk font-fw-bold"
        >
          {profileName}
        </Title>
        <Title
          level="h2"
          className="text-fs-lg text-primary-clr font-fw-bold"
        >
          {profileWork}
        </Title>
        <p className="text-paragraph-text-clr mt-1">&quot;{profileBio}&quot;</p>
      </div>
    </section>
  );
};

export default ProfileInfo;
