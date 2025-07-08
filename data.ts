import profileImg from "./public/images/profile-img.jpg";
// import {
//   FacebookIcon,
//   LinkedInIcon,
//   MessengerIcon,
//   PhoneIcon,
//   SnapchatIcon,
//   TwitterIcon,
//   WhatsappIcon,
// } from "@/components/Icons/Icons.component";

import { PhoneIcon, GithubIcon, FacebookIcon, LinkedinIcon, TwitterIcon, CodepenIcon, SlackIcon, DribbbleIcon } from 'lucide-react'

const profileData = {
  profile_name: "Mohamed Lamine Sy",
  profile_img: profileImg,
  profile_work: "Chauffeur - Poids Lourd",
  profile_bio: "Le meilleur chauffeur que je connaisse!",
  profile_links: [
    {
      name: "Portfolio",
      title: "Consulter Mon Portfolio",
      url: "https://www.google.com",
    },
    {
      name: "E-mail",
      title: "Envoyez-moi Un E-mail",
      url: "mailto:souleymanesydeveloppers@gmail.com",
    },
  ],
  profile_socials: [
    {
      title: "Appeler moi sur mon téléphone",
      url: "tel:+224624896251",
      src: PhoneIcon,
    },
    {
     title: "Consulter mon Github",
     url: "https://github.com/SouleymaneSy7",
     src: GithubIcon,
    },
    {
      title: "Contacter moi sur Facebook",
      url: "https://www.facebook.com",
      src: FacebookIcon,
    },
{
      title: "Contacter moi sur LinkedIn",
      url: "https://www.linkedin.com",
      src: LinkedinIcon,
    },

    {
      title: "Contacter moi sur Twitter",
      url: "https://www.twitter.com",
      src: TwitterIcon,
    },
    {
      title: "Contacter moi sur Dribbble",
      url: "https://www.dribbble.com",
      src: DribbbleIcon,
    },
        {
      title: "Contacter moi sur Slack",
      url: "https://www.slack.com",
      src: SlackIcon,
    },

    {
      title: "Contacter moi sur Codepen",
      url: "https://www.codepen.com",
      src: CodepenIcon,
    },
  ],
};

export { profileData };
