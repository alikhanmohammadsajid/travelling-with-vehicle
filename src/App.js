import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Destination from './Components/Destination/Destination';


export const userContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/destination">
            <Destination/>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </Router>

    </userContext.Provider>
  );
}

export default App;
