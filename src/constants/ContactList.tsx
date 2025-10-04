import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

interface CONTACT_LIST_TYPE {
    socialMedia: string;
    urlSocialMedia?: string;
    icon: React.ReactNode;
    username: string;
}

export const CONTACT_LIST: CONTACT_LIST_TYPE[] = [
  {
    socialMedia: 'Linkedin',
    urlSocialMedia: 'https://www.linkedin.com/in/vinicyos-ferreira/',
    icon: <FaLinkedin className="text-blue-500" size={35} />,
    username: '@vinicyosferreira',
  },
  {
    socialMedia: 'Gmail',
    icon: <SiGmail className="text-red-500 " size={35} />,
    username: 'vinicyosferreiradev@gmail.com',
  },
  {
    socialMedia: 'Github',
    icon: <FaGithub className="text-white" size={35} />,
    username: 'VinicyosFerreira',
  },
  {
    socialMedia: 'Whatsapp',
    icon: <FaWhatsapp className="text-green-500" size={35} />,
    username: '(41) 98873-1434',
  },
];
