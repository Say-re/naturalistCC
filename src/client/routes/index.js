// @flow
import React, { Suspense, lazy } from 'react';
import type { Element } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// Containers
import ScrollToTop from '../containers/elements/scroll-top';

const ApplicationRoutes = (): Element<*> => <Suspense>
  <ScrollToTop>
    <Routes>
      <Route path='/' element={<p>Template React Application! If you're seeing this, you are ready to go.</p>}/>
    </Routes>
  </ScrollToTop>
</Suspense>;

export default (connect()(ApplicationRoutes): any);
