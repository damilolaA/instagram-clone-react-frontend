import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './components/Signup';
import Login from './components/Login';
import Profile from './components/ProfilePage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={SignUp}/>
          <Route path="/login" component={Login}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
