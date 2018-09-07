import PropTypes from 'prop-types';
import React from 'react';
import User from './User';
import Login from './Login';
import Admin from './Admin';
import {Provider} from 'react-redux';
import UserLogin from './UserLogin';
import createHistory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router-dom'
import configureStore from '../store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //fetch global config of store
    const store = configureStore();
    //fetch global history of app
    const history = createHistory()
    //Define Routes Of The App
    return (
      <div>
        <Provider store={store}>
        <Router history={history}>
          <Switch>
           
           <Route
             exact path='/hello_world/'
             component={ Login }
            /> 
            <Route
             exact path='/hello_world/user'
             component={ User }
            /> 
            <Route
              exact path='/hello_world/admin'
              component={ Admin }
            />   
            <Route
              exact path='/hello_world/userlogin'
              component={ UserLogin }
            />
        </Switch>
      </Router>
      </Provider>
    </div>
    );
  }
}

