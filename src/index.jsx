import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from '@redux/store/store';
import App from '@src/App';

/** Main Component which calls app component and creates the root element in HTML */
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
