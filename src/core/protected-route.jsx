import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthChecker from '../containers/auth/authChecker';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={ props =>
            AuthChecker.getAuth() ? (
                /*<Redirect to={{pathname: "/home"}}/>*/
                //REVISIT Kuenzang restore this line later
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/404"
                    }}
                />
            )
        }
    />
);
export default ProtectedRoute;