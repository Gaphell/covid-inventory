import React, {Suspense} from 'react';
import '../App.css';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import ProtectedRoute from './protected-route';
import NotFound from "../shared/404/not-found"
import SignIn from "../containers/auth/login/signin"
import Dashboard from "../containers/navigation/dashboard";

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Suspense>
                        <Route path="/404" component={NotFound}/>
                        <ProtectedRoute path="/home" component={Dashboard}/>
                        <ProtectedRoute path="/signin" component={SignIn}/>
                    </Suspense>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes;