import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import App from './app.jsx';

const Routes = () => {
  return (
    <HashRouter>
      <div>
        <Route path='/' component={ App }></Route>
      </div>
    </HashRouter>
  )
}

export default Routes;