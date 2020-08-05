import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AppNavBar from "../components/AppNavBar";
import LandingPage from "../pages/LandingPage";

export function Routes() {
    return (
        <div>
            <Router>
                <AppNavBar />
                <Redirect from="/" to="/companies" />
                <Route path="/companies" component={LandingPage} />
                <Route path="/companies/:companyNmae" />
            </Router>
        </div>
    )
}