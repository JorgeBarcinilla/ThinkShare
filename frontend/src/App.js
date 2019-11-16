import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Index from './views/index';
import SignIn from './views/signIn';
import SignUp from './views/signUp';
import Home from './views/home';
import Profile from './views/profile';
import CreateThink from './views/createThink';
import Notification from './views/notification';
import Acc from './views/account';
import AccEdit from './views/accountEdit';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Index}/>
      <Route path="/signIn" exact component={SignIn}/>
      <Route path="/signUp" exact component={SignUp}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/profile" exact component={Profile}/>
      <Route path="/createThink" exact component={CreateThink}/>
      <Route path="/notification" exact component={Notification}/>
      <Route path="/acc" exact component={Acc}/>
      <Route path="/accEdit" exact component={AccEdit}/>
    </Router>
  );
}

export default App;

