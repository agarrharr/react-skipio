import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from './App';
import Sms from './pages/Sms';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/sms/:id" component={Sms} />
    </div>
  </Router>
);

export default Routes;
