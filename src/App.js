import * as React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './styles/style.css';

import NavBar from './components/NavBar';
import Links from './components/Links';

//! Componenets
import TopNews from './components/TopNews';
import Business from './components/Business';
import Entertainment from './components/Entertainment';
import Politics from './components/Politics';
import Technology from './components/Technology';
import Sports from './components/Sports';
import LifeStyle from './components/LifeStyle';
import India from './components/India';
import World from './components/World';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Links/>
          <Route path="/" exact component={TopNews}/>
          <Route path="/business" component={Business}/>
          <Route path="/entertainment" component={Entertainment}/>
          <Route path="/politics" component={Politics}/>
          <Route path="/tech" component={Technology}/>
          <Route path="/sports" component={Sports}/>
          <Route path="/lifeStyle" component={LifeStyle}/>
          <Route path="/india" component={India}/>
          <Route path="/world" component={World}/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
