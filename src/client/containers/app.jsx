// @flow
import React, { Suspense, lazy } from 'react';
import type { Element, AbstractComponent } from 'react';

import Routes from '../routes';

// Components
const HeaderContainer = lazy(() => import('./panels/header'));

// Styled
import { PageWrapper } from '../styled/main';

const App = (): Element<*> => (
  <Suspense>
    <PageWrapper windowHeight={window.outerHeight}>
      <HeaderContainer />
      <Routes />
    </PageWrapper>
  </Suspense>);

export default App;
