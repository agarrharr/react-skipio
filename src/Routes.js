import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Contacts from './pages/Contacts';
import Sms from './pages/Sms';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Contacts} />
      <Route path="/sms/:id" component={Sms} />
    </div>
  </Router>
);

export default Routes;
