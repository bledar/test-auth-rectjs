import React, { useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    browserHistory
} from "react-router-dom";
import axios from "axios"


import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function Routeri({ isAuthenticated, login }) {   

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={isAuthenticated} exact path="/">
                        <Login login={login}/>
                    </PublicRoute>
                    <PrivateRoute isAuthenticated={isAuthenticated} path="/dashboard">
                        <Dashboard/>
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

function PrivateRoute({ children, isAuthenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}
function PublicRoute({ children, isAuthenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                !isAuthenticated ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/dashboard",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}
