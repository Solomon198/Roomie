import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {store,persistor} from './store/store';
import {PersistGate} from 'redux-persist/integration/react'
import { Route, Link, BrowserRouter as Router,Switch} from 'react-router-dom'
import Login from './pages/login';
import SignUp from './pages/signup';
import Profile from './pages/profile'
import ForgottPassword from './pages/forgottPassword';
import RessetPassword from './pages/resset-password';
import Questions from './pages/questions'
import questions from './pages/questions';
import ViewMatch from './pages/viewMatch'
const Routes = (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<h1>loadding...</h1>}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/resset-password/:token" component={RessetPassword}/>
          <Route path="/forgotpassword" component={ForgottPassword}></Route>
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={SignUp}/>    
          <Route path="/question" component={Questions}/>   
          <Route path="/view-match" component={ViewMatch}/>  
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
)

ReactDOM.render(
   Routes,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
