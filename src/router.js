import { Suspense } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './constant/routes';

export const RouterConfig = (props) => {
  return (
    <Router>
      <Suspense
        fallback={
          <BarLoader
            loading={true}
            height={10}
            width={'50%'}
            size={150}
            color={'#ff0082'}
            css={{
              display: 'block',
              margin: '20% auto',
            }}
          />
        }
      >
        <Switch>
          {routes.map((i, index) => {
            return (
              <Route
                key={index}
                path={i.path}
                exact={true}
                component={i.component}
              />
            );
          })}
        </Switch>
      </Suspense>
    </Router>
  );
};
