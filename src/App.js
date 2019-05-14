import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    );
}

export default App;
