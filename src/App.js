import React from 'react';
import {
 useLocation,
  Switch,
  Route
} from "react-router-dom";
import GlobalStyles from './GlobalStyles';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './Footer/Footer';
import {useTransition, animated} from 'react-spring'
import { withRouter } from "react-router";

const App = () => {

  const location = useLocation()

  const transitions = useTransition(location, location => location.pathname, {
    from: {position:'absolute', width: '100%', opacity: 0, transform: "translate(100%, 0)"},
    enter: {opacity: 1, transform: "translate(0, 0)"},
    leave: {opacity: 0, transform: "translate(-50%, 0)"}
  })

    return (
        <>
        <GlobalStyles />
        <Navbar />
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
             <Switch location={item}>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        </Switch>
          </animated.div>
        ))}
         </>
    )
  }

export default withRouter(App);
