import React, {  useContext,  useState, Suspense, lazy } from 'react';
import { Redirect, withRouter, Switch, Route, __RouterContext } from 'react-router-dom';
import { config, useTransition, animated } from 'react-spring';
import Landing from './pages/landing';
import AbsoluteContainer from './containers/absoluteContainer';
const Results = lazy(() => import('./pages/results'));

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { location } = useContext(__RouterContext);

  const pageTransitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(0, 100%)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(0, -50%)" },
    config: config.slow
  });

  return (
    <div className="App">
      {pageTransitions.map(({item, props, key}) => (
        <AbsoluteContainer content={
          <animated.div key={key} style={props} >
            <Suspense fallback={<h1>Restaurants loading...</h1>}>
              <Switch location={item}>
                <Route path="/" exact component={Landing} />
                <Route path="/results" component={Results} />
              </Switch>
            </Suspense>
          </animated.div>
        } />
      ))}
    </div>
  );
};

export default withRouter(App);
