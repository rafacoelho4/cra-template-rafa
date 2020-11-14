import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Test = () => <h1>Hello Rafa!</h1>

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Test} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;