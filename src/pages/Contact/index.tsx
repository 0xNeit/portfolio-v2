import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../../components/Layout';
import EmailLink from '../../components/Contact/EmailLink';
import ContactIcons from '../../components/Contact/ContactIcons';

const Contact: React.FC = () => (
  <Main
    title="Contact"
    description="Contact 0xNeit via email @ nate@0xneit.dev"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
