import React from "react";

interface ProfileLinksPropsType {
  linkList: {
    name: string;
    title: string;
    url: string;
  }[];
}

const ProfileLinks: React.FC<ProfileLinksPropsType> = ({ linkList }) => {
  return (
    <React.Fragment>
      <ul className="flex flex-col gap-3">
        {linkList.map(({ name, title, url }) => {
          return (
            <li key={name}>
              <a
                href={url}
                title={title}
                className="font-space-grotesk font-fw-bold text-text-clr w-full h-14 flex justify-center items-center rounded-sm bg-secondary-bg-clr "
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default ProfileLinks;
