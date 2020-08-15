import React, {Suspense} from 'react';
import '../App.css';
import {BrowserRouter, Redirect} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import ProtectedRoute from './protected-route';
import NotFound from "../shared/404/not-found"
import Auth from "../containers/auth/auth"
import Dashboard from "../containers/navigation/dashboard";
import GlobalStore from '../store/globalStore';

class Routes extends React.Component {

    state = {
        auth: true
    };

    storeSub = null;

    componentDidMount() {
        this.storeSub = GlobalStore.stateChanged.subscribe(state => {
            if (state) {
                this.setState({ auth: state.auth});
            }
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    {!this.state.auth ? <Dashboard/> : ''}
                    <Suspense>
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/auth/signin"/>
                            </Route>
                            <ProtectedRoute path="/auth/:action" component={Auth}/>
                            {this.state.auth ? <Route component={NotFound}/> : ''}
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes;
