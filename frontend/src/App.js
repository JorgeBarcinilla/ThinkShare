import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Index from './views/index';
import SignIn from './views/signIn';
import SignUp from './views/signUp';
import Home from './views/home';
import CreateThink from './views/createThink';
import Notification from './views/notification';
import Acc from './views/ProfilePage';
import AccEdit from './views/accountEdit';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Index}/>
      <Route path="/signIn" exact component={SignIn}/>
      <Route path="/signUp" exact component={SignUp}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/createThink" exact component={CreateThink}/>
      <Route path="/notification" exact component={Notification}/>
      <Route path="/profile" exact component={Acc}/>
      <Route path="/editProfile" exact component={AccEdit}/>
    </Router>
  );
}

export default App;

