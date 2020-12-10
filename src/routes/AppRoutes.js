import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import  Counter from '../components/Counter/Counter';
import { Register } from '../components/Auth/Register';
import { Molitalia } from '../components/Home/Molitalia';
import { startLogin } from '../redux/actions/authAction';


export const AppRoutes= () => {

  const [isLoggedIn, setisLoggedIn] = useState(false);
  const code = useSelector( state => state.code );
  const name = useSelector( state => state.name );


  const dispatch = useDispatch()

  useEffect( () => {

    if( code?.length >= 0 ) {
      // dispatch( startLogin( rCode, rName ) );
      setisLoggedIn( true );
    } else {
      setisLoggedIn( false )
    }

  }, )

    return (
      <div>
        <Router>
          <div>
            <Switch>
                {/* Protected routes with Auth */}
                
                {/* {
                  isLoggedIn ? ( */}
                    <Route exact path="/clientes/molitalia/mapa" component={ Molitalia } />

                  {/* ) :
                  (
                    <> */}
                    <Route exact path="/clientes/molitalia/registro" component={ Register } />
                    
                    {/* </>  
                    )
                  } */}
                  <Route exact path="/clientes/molitalia/" component={ Counter } />

                  <Redirect to="/clientes/molitalia/" />

            </Switch>
          </div>
        </Router>
      </div>
    )
}

