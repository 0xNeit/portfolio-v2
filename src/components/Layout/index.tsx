import React, { ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import ScrollToTop from '../../utils/scrollToTop';

interface MainProps {
    children?: ReactNode;
    fullPage?: boolean;
    title?: string | null;
    description?: string;
}

const Main: React.FC<MainProps> = (props) => (
  <HelmetProvider>
    <ScrollToTop />
    <Helmet titleTemplate="%s | 0xNeit" defaultTitle="0xNeit" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <Navbar />
      <div id="main">
        {props.children}
      </div>
      {props.fullPage ? null : <Sidebar />}
    </div>
  </HelmetProvider>
);

export default Main;
