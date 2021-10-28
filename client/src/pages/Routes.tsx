import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { List } from "../components/List";
import { Add } from "../components/Add";
import { Edit } from "../components/Edit";

export const Routes = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <Route exact path="/">
                <Redirect to="/players" />
            </Route>
            <Route exact path="/players/" component={List} />
            <Route exact path="/players/add/" component={Add} />
            <Route exact path="/players/edit/:id" component={Edit} />
        </React.Fragment>
    </BrowserRouter>
);



