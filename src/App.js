import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './Home';
import { ReactPage} from './ReactPage';
import { HooksPage} from './HooksPage';
import { JsPage} from './JsPage';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/react" component={ReactPage} />
            <Route path="/js" component={JsPage}/>
            <Route path="/hooks" component={HooksPage}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
};
