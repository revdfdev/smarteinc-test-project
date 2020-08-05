import React from "react";
import { Switch, Route } from "react-router-dom";
import CompanyDetails from "../CompanyDetails";
import Employees from "../Employees";


export function Wrapper({ match }) {
    return (
        <Switch>
            <Route path={`${match.path}`}  component={CompanyDetails} exact />
            <Route path={`${match.path}/employees`} component={Employees} />
        </Switch>
    );
}