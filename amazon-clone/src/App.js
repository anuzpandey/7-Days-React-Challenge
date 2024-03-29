import React, { useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "../src/config/firebase";

import { useStateValue } from "./context/StateProvider";

function App() {

    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log('The User is >>> ', authUser);
            if (authUser) {
                // the user just logged in / the user was logged in
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                // the user is logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route path='/checkout'>
                        <Header/>
                        <Checkout/>
                    </Route>
                    <Route path='/'>
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
