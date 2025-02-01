import profileImg from "./public/images/profile-img.jpg";
import {
  FacebookIcon,
  LinkedInIcon,
  MessengerIcon,
  PhoneIcon,
  SnapchatIcon,
  TwitterIcon,
  WhatsappIcon,
} from "@/components/Icons/Icons.component";

const profileData = {
  profile_name: "Mohamed Lamine Sy",
  profile_img: profileImg,
  profile_work: "Chauffeur - Poids Lourd",
  profile_bio: "Le meilleur chauffeur que je connaisse!",
  profile_links: [
    {
      name: "Curriculum Vitæ - (CV)",
      title: "Consulter Mon CV",
      url: "https://www.google.com",
    },
    {
      name: "E-mail",
      title: "Envoyez-moi Un E-mail",
      url: "mailto:souleymanesyservices@gmail.com",
    },
  ],
  profile_socials: [
    {
      title: "Appeler moi sur mon téléphone",
      url: "tel:+05890000111",
      src: PhoneIcon,
    },
    {
      title: "Contacter moi sur Facebook",
      url: "https://www.facebook.com",
      src: FacebookIcon,
    },
    {
      title: "Contacter moi sur Whatsapp",
      url: "https://www.whatsapp.com",
      src: WhatsappIcon,
    },
    {
      title: "Contacter moi sur Twitter",
      url: "https://www.twitter.com",
      src: TwitterIcon,
    },
    {
      title: "Contacter moi sur Messenger",
      url: "https://www.messenger.com",
      src: MessengerIcon,
    },
    {
      title: "Contacter moi sur LinkedIn",
      url: "https://www.linkedin.com",
      src: LinkedInIcon,
    },
    {
      title: "Contacter moi sur Snapchat",
      url: "https://www.snapchat.com",
      src: SnapchatIcon,
    },
  ],
};

export { profileData };
