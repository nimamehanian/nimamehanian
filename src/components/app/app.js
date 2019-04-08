import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import GlobalStyles from 'styles/global';

import Badge from 'components/badge/badge';
import Sidebar from 'components/sidebar/sidebar';
import Background from 'components/background/background';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Badge />
      <Sidebar />
      <Background />
      {/* <Header /> */}
      {/* <Switch> */}
      {/* <Route exact path="/pathA" component={CompA} /> */}
      {/* <Route exact path="/pathB" component={CompB} /> */}
      {/* </Switch> */}
      {/* <Footer /> */}
    </div>
  );
}

export default hot(module)(App);
