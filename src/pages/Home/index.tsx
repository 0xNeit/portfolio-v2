import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../../components/Layout';

const Home: React.FC = () => (
  <Main
    description={"0xNeit's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with Typescript and powered by Vite.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/0xNeit/portfolio-v2">here</a>.</p>
    </article>
  </Main>
);

export default Home;
