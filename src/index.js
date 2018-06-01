import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { Home } from './components/Home/Home';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Catalog } from './components/Catalog';
import { Localize } from './components/Localize';
import { PageNotFound } from './components/PageNotFound';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }


  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/galery" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/localize" component={Localize} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
