import {
  AcademicCapIcon,
  // ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Zachary Miller',
  description: "Here, you can know enough about me!",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Zachary Miller`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">full-stack engineer</strong> with 7+ years of experience in{' '}
        <strong className="text-stone-100">Web/Mobile/Blockchain</strong> development and passionate about cutting-edge
        technologies like ML and blockchain. I'm open to new <strong className="text-stone-100">opportunities</strong>{' '}
        and <strong className="text-stone-100">challenges</strong>.
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: ArrowDownTrayIcon,
    //},
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    //},
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Terrel, TX', Icon: MapIcon},
    {label: 'Age', text: '34', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Unite States / Japanese', Icon: FlagIcon},
    {label: 'Interests', text: 'Swimming, Climbing, Judo', Icon: SparklesIcon},
    {label: 'Study', text: 'Texas Tech University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Japanese',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React, Angluar, Vue',
        level: 9,
      },
      {
        name: 'Typescript, Javascript',
        level: 9,
      },
      {
        name: 'GraphQL, Redux, Restful API',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js, Express, Nest',
        level: 8,
      },
      {
        name: 'Django',
        level: 6,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Swift',
        level: 6,
      },
      {
        name: 'Flutter',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Free the wood',
    description: '',
    url: 'https://liftcannabis.ca/',
    image: porfolioImage1,
  },
  {
    title: 'Ravi Surya Partnership Program',
    description: '',
    url: 'https://www.ravisuryagroup.com/surya/',
    image: porfolioImage2,
  },
  {
    title: 'Baby Healthcare Site',
    description: '',
    url: 'https://chibebe.com.au/',
    image: porfolioImage4,
  },
  {
    title: 'PRAGUE AIRPORT',
    description: '',
    url: 'https://www.prague-airport.com/',
    image: porfolioImage5,
  },
  {
    title: 'Rent/Buy Books on Chegg',
    description: '',
    url: 'https://www.chegg.com/books',
    image: porfolioImage7,
  },
  {
    title: 'Book Top-Rated House Cleaners',
    description: '',
    url: 'https://www.instamaids.com/',
    image: porfolioImage12,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 * Texas Tech University logo
Texas Tech University
Bachelor of Science - BS, Computer Science
 */

export const education: TimelineItem[] = [
  {
    date: 'April 2015',
    location: 'Texas Tech University',
    title: 'Bachelor of Science(BS) in Computer Science',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Feb 2018 - Present',
    location: 'Awesome Development Company | Remote',
    title: 'Senior UX Engineer',
    content: (
      <div>
        <p>I worked on 5+ projects, including health care and blockchain projects</p>
        <p> - Blockchain-based medical data platform</p>
        <p>- Microservice architecture</p>
        <p>- Salesforce administration</p>
      </div>
    ),
  },
  {
    date: 'May 2015 - Jan 2018',
    location: 'NETPUT | Remote',
    title: 'Full Stack Engineer',
    content: (
      <p>
        I started work as a full-stack engineer. Built and maintained the recruiting platform using PHP, Mern Stack, Managed CI/CD using Github and AWS.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Alex Saga',
      text: 'I am realy happy to know him and it is a oppotunity for me. Thanks to god.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Keep in touch.',
  description: 'Contact me anytime, anywhere',
  items: [
    // {
    //   type: ContactType.Email,
    //   text: 'reachout@timbaker.me',
    //   href: 'mailto:reachout@timbaker.me',
    //},
    {
      type: ContactType.Location,
      text: 'Terrel TX, US',
      // href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/zacharymillerm',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/zm0818/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
