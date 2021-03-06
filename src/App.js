import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import EmmaStreet from './components/properties/EmmaStreet';
import LaurelStreet from './components/properties/LaurelStreet'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Properties/EmmaStreet' exact component={EmmaStreet} />
          <Route path='/Properties/LaurelStreet' exact component={LaurelStreet} />
          <Route component={Error} />
        </Switch>
      </div>
      <div className="footer">
        <Footer />
      </div>

    </BrowserRouter>
    );
}

export default App;
