import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Loading from '../Loading/Loading';
import Login from "../Login/Login";
import "./App.css";
import useToken from "./useToken";

export default function App() {

    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />
    }

    function onMouseEnter() {
        console.log('ENTER FROM APP')
    }

    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard 
                            onMouseEnter={onMouseEnter}
                        />
                    </Route>
                    <Route path="/preferences">
                        <Preferences />
                    </Route>
                    <Route path="/loading">
                        <Loading />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
