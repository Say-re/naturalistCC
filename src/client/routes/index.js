// @flow
import React, { Suspense, lazy } from 'react';
import type { Element } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// Containers
import ScrollToTop from '../containers/elements/scroll-top';
import Home from '../containers/pages/home/home';

const ApplicationRoutes = (): Element<*> => <Suspense>
  <ScrollToTop>
    <Routes>
      <Route path={'/'} element={<Home />}/>
    </Routes>
  </ScrollToTop>
</Suspense>;

export default (connect()(ApplicationRoutes): any);
