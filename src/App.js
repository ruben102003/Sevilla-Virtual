import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import QuienesSomos from './components/QuienesSomos';
import Novedades from './components/Novedades';
import Alojamiento from './components/Alojamiento';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quienes-somos" component={QuienesSomos} />
          <Route path="/novedades" component={Novedades} />
          <Route path="/alojamiento" component={Alojamiento} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
