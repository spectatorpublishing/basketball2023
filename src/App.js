import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Section from './containers/Section';
import ScrollToTop from './components/ScrollToTop'
import { news_articles } from './data/news_articles';
import { opinion_articles } from './data/opinion_articles';
import { sports_articles } from './data/sports_articles';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/womens' render={() => <Section current="womens" id="womens" header="WOMEN'S BASKETBALL" articles={news_articles} next="Men's Basketball" link="/mens" key={0}/>} />
        <Route exact path='/mens' render={() => <Section current="mens" id="men" header="MEN'S BASKETBALL" articles={opinion_articles} next="All Basketball" link="/all" key={1} />} />
        <Route exact path='/all' render={() => <Section current="all" id="all" header="ALL BASKETBALL" articles={sports_articles} next="Women's Basketball" link="/womens" key={3}/>} />
      </Switch>
    </Router>
  );
}

export default App;
