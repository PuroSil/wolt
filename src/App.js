import React, {  useContext,  useState, Suspense, lazy } from 'react';
import { Redirect, withRouter, Switch, Route, __RouterContext } from 'react-router-dom';
import { config, useTransition, animated } from 'react-spring';
import Landing from './pages/landing';
const Dashboard = lazy(() => import('./pages/dashboard'));

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { location } = useContext(__RouterContext);

  const pageTransitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" },
    config: config.slow
  });

  return (
    <div className="App">
      {pageTransitions.map(({item, props, key}) => (
      <animated.div key={key} style={props} >
        <Suspense fallback={<h1>Restaurants loading...</h1>}>
          <Switch location={item}>
            <Route path="/" exact component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Suspense>
      </animated.div>
      ))}
    </div>
  );
};

export default withRouter(App);
