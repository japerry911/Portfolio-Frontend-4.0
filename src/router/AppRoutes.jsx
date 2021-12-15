import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/About/About';
import Blogposts from '../pages/Blogposts/Blogposts';
import ContactPage from '../pages/Contact/Contact';
import HomePage from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';
import ScrollToTop from './ScrollToTop';

const AppRoutes = () => (
  <Fragment>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogposts" element={<Blogposts />} />
    </Routes>
  </Fragment>
);

export default AppRoutes;
