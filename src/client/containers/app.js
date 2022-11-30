// @flow
import React, { Suspense } from 'react';
import type { Element } from 'react';

import Routes from '../routes';

// Styled
import { PageWrapper } from '../styled/main';

const App = (): Element<*> => (
  <Suspense>
    <PageWrapper windowHeight={window.outerHeight} windowWidth={window.outerWidth}>
      <Routes />
    </PageWrapper>
  </Suspense>);

export default App;
