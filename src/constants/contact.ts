import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

interface Data {
  link: string,
  label: string,
  icon: any
}

const data: Data[] = [
  {
    link: 'https://github.com/0xNeit',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/nathan-irikefe-774b6226b/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/0xNeit',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:nate@0xneit.dev',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
