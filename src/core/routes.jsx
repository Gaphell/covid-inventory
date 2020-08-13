import React, {Suspense} from 'react';
import '../App.css';
import {BrowserRouter, Redirect} from 'react-router-dom';
import {Route} from 'react-router';
import ProtectedRoute from './protected-route';
import NotFound from "../shared/404/not-found"
import Auth from "../containers/auth/auth"
import Dashboard from "../containers/navigation/dashboard";

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Suspense>
                        <Route exact path="/">
                            <Redirect to="/signin"/>
                        </Route>
                        <Route path="/404" component={NotFound}/>
                        <ProtectedRoute path="/home" component={Dashboard}/>
                        <ProtectedRoute path="/signin" component={Auth}/>
                    </Suspense>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes;