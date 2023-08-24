import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../../components/Layout';

import Cell from '../../components/Cell';
import data from '../../constants/projects';

const Projects: React.FC = () => (
  <Main
    title="Projects"
    description="Learn about 0xNeit's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
