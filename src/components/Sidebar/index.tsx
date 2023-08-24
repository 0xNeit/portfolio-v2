import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import me from '../../assets/images/me.png'

const Sidebar: React.FC = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={me} alt="me" />
      </Link>
      <header>
        <h2>Nate - (0xNeit)</h2>
        <p><a href="mailto:silentpitcher@gmail.com">silentpitcher@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Nate. I like Building things.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Nathan Irikefe</p>
    </section>
  </section>
);

export default Sidebar;
