import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {AnimatePresence} from 'framer-motion'



import Home from './pages/Home';
import WhatsOn from './pages/WhatsOn';
import Shortcodes from './pages/Shortcodes';
import News from './pages/News';
import ContactPage from './pages/ContactPage';
import SingleMovie from './pages/SingleMovie';

import Footer from './components/homeComponents/Footer'

import 'aos/dist/aos.css'

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>

        <Route render={({location}) => (
          <AnimatePresence initial={true} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path= '/' render={() => <Home />}/>
              <Route exact path= '/whats-on' render={() => <WhatsOn />}/>
              <Route exact path= '/shortcodes' render={() => <Shortcodes />}/>
              <Route exact path= '/news' render={() => <News />}/>
              <Route exact path= '/contact' render={() => <ContactPage />}/>
              <Route exact path= '/single-movie' render={() => <SingleMovie />}/>
            </Switch>
          </AnimatePresence>
        )}
        />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
