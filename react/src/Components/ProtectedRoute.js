import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from "../utils/auth"

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuth = localStorage.getItem('isAuth');
    return (
        <Route {...rest} render={
            (props) => 
            isAuth ? (
                <Component {...props} {...rest} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: {
                              from: props.location
                            }
                        }}
                    />
                )
        } />
    )
}
