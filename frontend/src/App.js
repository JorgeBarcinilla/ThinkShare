import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import axios from "axios";

import './App.css';

import Index from './views/index';
import SignIn from './views/signIn';
import SignUp from './views/signUp';
import Home from './views/home';
import CreateThink from './views/createThink';
import Notification from './views/notification';
import Acc from './views/ProfilePage';
import AccEdit from './views/accountEdit';
import reducers from './reducers';

import authGuard from "./components/HOCs/authGuard";
const jwtToken = localStorage.getItem('JWT_TOKEN');
axios.defaults.headers.common['Authorization'] = jwtToken;

function App() {
  return (
    <Provider store={createStore(reducers, {
      auth:{
        token: jwtToken,
        isAuthenticated : jwtToken ? true : false
      }
    }, applyMiddleware(reduxThunk))}>
      <Router>
        <Route path="/" exact component={Index}/>
        <Route path="/signIn" exact component={SignIn}/>
        <Route path="/signUp" exact component={SignUp}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/createThink" exact component={CreateThink}/>
        <Route path="/notification" exact component={Notification}/>
        <Route path="/profile" exact component={authGuard(Acc)}/>
        <Route path="/editProfile" exact component={AccEdit}/>
      </Router>
    </Provider>
  );
}

export default App;

