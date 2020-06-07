import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import GlobalStyles from './GlobalStyles';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';

class App extends React.Component {

  render() {
    return (
        <Router>
        <>
        <GlobalStyles />
        <Navbar />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        </Switch>
         </>
        </Router>
    )
  }
}

export default App;
