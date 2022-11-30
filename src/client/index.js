import React from 'react';
import "core-js/stable";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// CONTAINERS
import App from './containers/app';

// HELPERS
import { appendCoreStyles } from './styled/helpers/styles';

// REDUCERS
import reducer from './reducers';

const middleware = [thunk];

middleware.push(createLogger());

const store = createStore(reducer, applyMiddleware(...middleware));

const initializeApp = () => {
  appendCoreStyles()
  const appContainer = document.getElementById('templateReactApplication');
  if (!appContainer) {
    console.log('Application failure at initialization! Unable to find container.');
    return;
  }

  createRoot(appContainer).render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

if (document.readyState === 'complete' || document.readyState !== 'loading') initializeApp();
else document.addEventListener('DOMContentLoaded', initializeApp);
