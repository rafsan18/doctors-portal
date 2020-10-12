import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../../App";
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);

    // to keep user logged in after reload
    const isLoggedIn = () => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            return false;
        }
        const decodedToken = jwt_decode(token);
        //const { name, email } = decodedToken;
        // const signedInUser = { name, email };
        //setLoggedInUser(signedInUser);

        const currentTime = new Date().getTime() / 1000;
        return decodedToken.exp > currentTime;
    };
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email || isLoggedIn() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
