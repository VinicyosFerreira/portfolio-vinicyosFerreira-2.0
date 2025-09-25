import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

interface ContactList {
    socialMedia: string;
    urlSocialMedia?: string;
    icon: React.ReactNode;
}

export const CONTACT_LIST: ContactList[] = [
  {
    socialMedia: 'Linkedin',
    urlSocialMedia: 'https://www.linkedin.com/in/vinicyos-ferreira/',
    icon: <FaLinkedin className="text-blue-500" size={35} />,
  },
  {
    socialMedia: 'Gmail',
    icon: <SiGmail className="text-red-500 " size={35} />,
  },
  {
    socialMedia: 'Github',
    icon: <FaGithub className="text-white" size={35} />,
  },
  {
    socialMedia: 'Whatsapp',
    icon: <FaWhatsapp className="text-green-500" size={35} />,
  },
];
