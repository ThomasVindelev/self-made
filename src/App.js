import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard'
import Preferences from './components/Preferences/Preferences'

export default function App() {
    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preferences />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
