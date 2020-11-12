import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Order from './components/Dashboard/Customar/Order/Order';
import ServiceLists from './components/Dashboard/Customar/ServiceLists/ServiceLists';
import Feedback from './components/Dashboard/Customar/Feedback/Feedback';
import AllServiceLists from './components/Dashboard/Admin/AllServiceLists/AllServiceLists';
import AddService from './components/Dashboard/Admin/AddService/AddService';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin/MakeAdmin';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [admin, setAdmin] = useState(null); 
  return (
    <UserContext.Provider value={{admin, setAdmin, loggedInUser,setLoggedInUser}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login /> 
            </Route>
            <PrivateRoute path="/order">
              <Order /> 
            </PrivateRoute>
            <Route path="/serviceLists">
              <ServiceLists />
            </Route>
            <Route path="/feedback">
              <Feedback />
            </Route>
            <Route path="/allServiceLists">
              <AllServiceLists /> 
            </Route>
            <Route path="/addService">
              <AddService /> 
            </Route>
            <Route path="/makeAdmin">
               <MakeAdmin /> 
            </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
