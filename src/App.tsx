import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Layout'
import './static/css/main.scss';

const { PUBLIC_URL } = import.meta.env;

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

const App: React.FC = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App
