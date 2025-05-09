import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import Main from '../../components/Layout';


import markdown from '../../constants/about.md';

const count: number = markdown.split(/\s+/)
  .map((s: string) => s.replace(/\W/g, ''))
  .filter((s: string) => s.length).length;

// Make all hrefs react router links
const LinkRenderer: React.FC<LinkProps> = ({to, ...children }) => <Link to={to} {...children} />;

const About: React.FC = () => (
  <Main
    title="About"
    description="Learn about 0xNeit"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">About Me</Link></h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      <ReactMarkdown
        children={markdown}
        // @ts-ignore
        renderers={{
          Link: LinkRenderer,
        }}
      />
    </article>
  </Main>
);

export default About;
