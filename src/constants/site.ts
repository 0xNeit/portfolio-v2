import dayjs from 'dayjs';

export interface GitHubData {
  label: string;
  key?: string;
  link?: string;
  value?: any;
  format?: (x: string) => string;
}

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/0xNeit/portfolio-v2
 */
const data: GitHubData[] = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/0xNeit/portfolio-v2/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/0xNeit/portfolio-v2/stargazers',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: 'https://github.com/0xNeit/portfolio-v2/network',
  },
  {
    label: 'Number of spoons',
    value: '0',
  },
  {
    label: 'Number of linter warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Open github issues',
    key: 'open_issues_count',
    link: 'https://github.com/0xNeit/portfolio-v2/issues',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/0xNeit/portfolio-v2/commits',
    format: (x: string) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Typescript powering this website',
    value: '2115',
    link: 'https://github.com/0xNeit/portfolio-v2/graphs/contributors',
  },
];

export default data;
