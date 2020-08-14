import React, {Suspense} from 'react';
import '../App.css';
import {BrowserRouter, Redirect} from 'react-router-dom';
import {Route} from 'react-router';
import ProtectedRoute from './protected-route';
import NotFound from "../shared/404/not-found"
import Auth from "../containers/auth/auth"
import Dashboard from "../containers/navigation/dashboard";
import CardListComponent from "../component/card-list/card-list.component";
import AddInventoryItemComponent from "../component/add-inventory-items/add-inventory-items.component";

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Suspense>
                        <Route exact path="/">
                            <Redirect to="/auth/signin"/>
                        </Route>
                        <Route path="/404" component={NotFound}/>
                        <ProtectedRoute path="/home" component={Dashboard}/>
                        <ProtectedRoute path="/orders" component={CardListComponent}/>
                        <ProtectedRoute path="/add" component={AddInventoryItemComponent}/>
                        <ProtectedRoute path="/auth/:action" component={Auth}/>
                    </Suspense>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes;
