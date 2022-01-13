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
        <Route exact path='/womens' render={() => <Section current="womens" id="womens" header="WOMEN'S BASKETBALL" mendata={mendata} womendata={womendata} next="Men's Basketball" link="/mens" key={0}/>} />
        <Route exact path='/mens' render={() => <Section current="mens" id="men" header="MEN'S BASKETBALL" mendata={mendata} womendata={womendata} next="All Basketball" link="/all" key={1} />} />
        <Route exact path='/all' render={() => <Section current="all" id="all" header="ALL BASKETBALL" mendata={mendata} womendata={womendata} />} />
      </Switch>
    </Router>
  );
}

export default App;
