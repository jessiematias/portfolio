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
import { useTransition, animated } from 'react-spring'
import { withRouter } from "react-router";
import Hamburger from './components/HamburgerMenu/HamburgerMenu';

const App = () => {

  const location = useLocation()

  const mq = window.matchMedia("(min-width: 600px)")

  const transitions = useTransition(location, location => location.pathname, {
    from: { transform: mq.matches ? "translateX(100%)" : "translateX(0)", position: 'absolute', width: '100vw', opacity: 0 },
    enter: { opacity: 1, width: '100vw', transform: "translateX(0)" },
    leave: { opacity: 0, transform: mq.matches ? "translateX(-50%)" : "translateX(0)" }
  })

  return (
    <>
      <GlobalStyles />
      <Hamburger />
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
