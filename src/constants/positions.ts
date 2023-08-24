interface Positions {
  company: string,
  position: string,
  link: string,
  daterange: string,
  points: string[],
}

const positions: Positions[] = [
  {
    company: 'Zinari Finance',
    position: 'Lead Smart Contracts Engineer',
    link: 'https://zinax.org/',
    daterange: 'October 2021 – March 2022',
    points: [
      'Developed and deployed smart contracts on the Binance Smart Chain for the entire platform',
    ],
  },
  {
    company: 'Agora Markets',
    position: 'Full Stack Engineer',
    link: 'https://agoramarkets.art/',
    daterange: 'April 2022 – July 2022',
    points: [
      'Revamped the UI and maintained the website',
    ],
  },
  {
    company: 'Circle House Labs',
    position: 'Chief Technology Officer',
    link: 'https://twitter.com/CircleHouseLabs',
    daterange: 'August 2022 - December 2022',
    points: [
      'Built Smart Contracts and DApps for in house NFT projects',
      'Built Rarity Checker on Aptos'
    ]
  },
  {
    company: 'Synthr DeFi',
    position: 'Move Developer',
    link: 'https://synthr.io',
    daterange: 'January 2023 - March 2023',
    points: [
      'Implemented Synthr Contracts in Move for Aptos and Sui',
    ]
  },
  {
    company: 'Gather Labs',
    position: 'Team Lead',
    link: 'https://gatherlabs.com',
    daterange: 'April 2023 - Till Date',
    points: [
      'Contributing to early ecosystems and participating in Hackathons',
    ]
  }
];

export default positions;
