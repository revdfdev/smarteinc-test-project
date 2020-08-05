import React from 'react'
import { Switch, Route } from "react-router-dom";
import Wrapper from "../Wrapper";
import CompaniesList from "../CompaniesList"

export function LandingPage({ history, match }) {
    
    return (
        <Switch>
            <Route path={`${match.path}`} exact>
                <CompaniesList />
            </Route>
            <Route path={`${match.path}/:companyName`}>
                <Wrapper />
            </Route>
        </Switch>
    )
}
