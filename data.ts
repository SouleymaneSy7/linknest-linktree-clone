import profileImg from './public/images/profile-img.jpeg'

import {
  PhoneIcon,
  GithubIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  CodepenIcon,
  SlackIcon,
  DribbbleIcon,
} from 'lucide-react'

const profileData = {
  profile_name: 'Souleymane Sy',
  profile_img: profileImg,
  profile_work:
    'Frontend - Web Developer, serving up hot code with a smile & zero bugs (fingers crossed)! 😄🔥',
  profile_bio:
    'Skilled Frontend Developer delivering innovative, design-driven solutions, proudly from Guinea-Conakry. 🌍',
  profile_links: [
    {
      name: 'Portfolio',
      title: 'Hack into my Terminal Portfolio! 🎉',
      url: 'https://terminal-portfolio-website-xi.vercel.app/',
    },
    {
      name: 'E-mail',
      title: 'Drop me a super cool e-mail! ✉️',
      url: 'mailto:souleymanesydeveloppers@gmail.com',
    },
  ],
  profile_socials: [
    {
      title: 'Give me a ring, let’s chat! 📞',
      url: 'tel:+224612918764',
      src: PhoneIcon,
    },
    {
      title: 'Check out my epic Github! 🚀',
      url: 'https://github.com/SouleymaneSy7',
      src: GithubIcon,
    },
    {
      title: 'Hang out with me on Facebook! 😄',
      url: 'https://www.facebook.com',
      src: FacebookIcon,
    },
    {
      title: 'Join my LinkedIn crew and let’s network! 💼',
      url: 'https://www.linkedin.com/in/souleymane-sy-a40ba9357/',
      src: LinkedinIcon,
    },
    {
      title: 'Tweet with me, it’s gonna be fun! 🐦',
      url: 'https://twitter.com/souleymanesy43',
      src: TwitterIcon,
    },
    {
      title: 'Swing by my Dribbble for some flair! 🎨',
      url: 'https://dribbble.com/souleymane-sy',
      src: DribbbleIcon,
    },
    {
      title: 'Chill with me on Slack, let’s vibe!',
      url: 'https://www.slack.com',
      src: SlackIcon,
    },
    {
      title: 'Code with me on Codepen, let’s rock it! 💻',
      url: 'https://codepen.io/souleymanesy7',
      src: CodepenIcon,
    },
  ],
}

export { profileData }
