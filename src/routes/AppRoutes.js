import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import  Counter from '../components/Counter/Counter';
import { Register } from '../components/Auth/Register';
import { Molitalia } from '../components/Home/Molitalia';


export const AppRoutes= () => {


    return (
      <div>
        <Router>
          <div>
            <Switch>
                {/* Protected routes with Auth */}
                {/* {
                  isLoggedIn ? ( */}
                    <Route exact path="/mapa" component={ Molitalia } />

                    <Route exact path="/registro" component={ Register } />
                    
                   
                  <Route exact path="/contador" component={ Counter } />

                  <Redirect to="/contador" />

            </Switch>
          </div>
        </Router>
      </div>
    )
}

