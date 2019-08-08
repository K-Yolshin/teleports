import React from 'react';
import { render } from 'react-dom';

import Routes from '@/Routes';
import App from '@/App';

render(
  <App>
    <Routes />
  </App>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
