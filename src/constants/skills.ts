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
    category: ['Frontend', 'Languages', 'Javascript'],
  },
  {
    title: 'Solidity',
    competency: 4,
    category: ['Smart Contracts', 'Languages', 'Ethereum'],
  },
  {
    title: 'Rust',
    competency: 4,
    category: ['Smart Contracts', 'Languages', 'Solana'],
  },
  {
    title: 'Sway',
    competency: 3,
    category: ['Smart Contracts', 'Languages', 'Fuel'],
  },
  {
    title: 'T-Solidity',
    competency: 3,
    category: ['Smart Contracts', 'Languages', 'Venom'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Backend', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Frontend', 'Javascript'],
  },
  {
    title: 'Vite',
    competency: 4,
    category: ['Frontend', 'Javascript'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Truffle',
    competency: 3,
    category: ['Smart Contracts', 'Tools', 'Ethereum'],
  },
  {
    title: 'Hardhat',
    competency: 4,
    category: ['Smart Contracts', 'Tools', 'Ethereum'],
  },
  {
    title: 'Anchor',
    competency: 3,
    category: ['Smart Contracts', 'Tools', 'Solana'],
  },
  {
    title: 'Heroku',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Move',
    competency: 5,
    category: ['Smart Contracts', 'Languages', 'Aptos', 'Sui'],
  },
  {
    title: 'MongoDB',
    competency: 5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Express',
    competency: 5,
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
    category: ['Frontend', 'Languages', 'Javascript', 'Backend'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 5,
    category: ['Frontend', 'Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'GraphQL',
    competency: 5,
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
