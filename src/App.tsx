import React, { FC, ReactNode } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from '@/createStore';
import initLocales from '@/initLocales';
import Fonts from '@/Fonts';
import Styles from '@/Styles';

/**
 * Properties of the App.
 */
interface Props {

  /**
   * Collection of the routes.
   */
  children: ReactNode;
}

/**
 * Main component of application.
 */
const App: FC<Props> = ({ children }) => {
  initLocales();

  const store = createStore();

  return (
    <Provider store={store}>
      <Fonts />
      <Styles />
      <Router>
        {children}
      </Router>
    </Provider>
  );
};

export default App;
