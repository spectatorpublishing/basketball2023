import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Section from './containers/Section';
import ScrollToTop from './components/ScrollToTop'
import { mendata } from './data/mendata';
import { womendata } from './data/womendata';
import { sports_articles } from './data/sports_articles';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/all' render={() => <Section current="all" id="all" header="ALL BASKETBALL" mendata={mendata} womendata={womendata} />} />
      </Switch>
    </Router>
  );
}

export default App;
