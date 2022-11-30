// @flow
import React, { Suspense } from 'react';
import type { Element } from 'react';

import Routes from '../routes';

const App = (): Element<*> => (<Suspense>
    <Routes />
  </Suspense>);

export default App;
