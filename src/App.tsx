import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Layout'
import './static/css/main.scss';

const { PUBLIC_URL } = import.meta.env;

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Resume = lazy(() => import('./pages/Resume'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Stats = lazy(() => import('./pages/Stats'));
const Projects = lazy(() => import('./pages/Projects'));

const App: React.FC = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/projects" element={<Projects />} />
        <Route element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App
