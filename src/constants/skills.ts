// TODO: Add Athletic Skills, Office Skills e.t.c
interface Skill {
  title: string;
  competency: number;
  category: string[];
}

const skills: Skill[] = [
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Solidity',
    competency: 4,
    category: ['Blockchain Development', 'Languages', 'Ethereum'],
  },
  {
    title: 'Rust',
    competency: 4,
    category: ['Blockchain Development', 'Languages', 'Solana'],
  },
  {
    title: 'Sway',
    competency: 3,
    category: ['Blockchain Development', 'Languages', 'Fuel'],
  },
  {
    title: 'T-Solidity',
    competency: 3,
    category: ['Blockchain Development', 'Languages', 'Venom'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Vite',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Truffle',
    competency: 3,
    category: ['Blockchain Development', 'Tools', 'Ethereum'],
  },
  {
    title: 'Hardhat',
    competency: 4,
    category: ['Blockchain Development', 'Tools', 'Ethereum'],
  },
  {
    title: 'Anchor',
    competency: 3,
    category: ['Blockchain Development', 'Tools', 'Solana'],
  },
  {
    title: 'Heroku',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Move',
    competency: 5,
    category: ['Aptos', 'Blockchain Development', 'Sui'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Express',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git/Mercurial',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Typescript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors: string[] = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories: { name: string; color: string }[] = [
  // @ts-expect-error
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
