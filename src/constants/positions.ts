interface Positions {
  company: string,
  position: string,
  link: string,
  dateRange: string,
  points: string[],
}

const positions: Positions[] = [
  {
    company: 'Zinari Finance',
    position: 'Lead Smart Contracts Engineer',
    link: 'https://zinax.org/',
    dateRange: 'January 2021 – March 2022',
    points: [
      'Developed and deployed smart contracts on the Binance Smart Chain for the entire platform',
      'Worked with the Frontend team to integrate the smart contracts into the frontend',
    ],
  },
  {
    company: 'Agora Markets',
    position: 'Full Stack Engineer',
    link: 'https://agoramarkets.art/',
    dateRange: 'April 2022 – July 2022',
    points: [
      'Revamped the UI and maintained the website',
    ],
  },
  {
    company: 'Circle House Labs',
    position: 'Chief Technology Officer',
    link: 'https://twitter.com/CircleHouseLabs',
    dateRange: 'August 2022 - December 2022',
    points: [
      'Built Smart Contracts and DApps for in house NFT projects',
      'Built Rarity Checker on Aptos'
    ]
  },
  {
    company: 'Synthr DeFi',
    position: 'Move Developer',
    link: 'https://synthr.io',
    dateRange: 'January 2023 - March 2023',
    points: [
      'Designed and implemented Synthr Contracts in Move for Aptos',
      'Designed and implemented Synthr Contracts in Move for Sui',
    ]
  },
  {
    company: 'Gather Labs',
    position: 'Team Lead',
    link: 'https://gatherlabs.com',
    dateRange: 'April 2023 - November 2023',
    points: [
      'Contributing to early ecosystems and participating in Hackathons',
      'Designed and implemented Smart Contracts for Gather Labs products',
      'Led the development of the Andex insurance protocol',
    ]
  },
  {
    company: 'Razor Labs',
    position: 'Lead Engineer',
    link: 'https://app.razordex.xyz',
    dateRange: 'November 2023 - Till Date',
    points: [
      'Built initial Wallet Extension MVP',
      'Built initial DEX MVP',
      'Designed and Implemented Move Smart Contracts for Razor DEX',
      'Led the development of Razor DEX v2',
    ]
  }
];

export default positions;
