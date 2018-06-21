import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './components/signup.js';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Route exact path="/" component={SignUp}/>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
