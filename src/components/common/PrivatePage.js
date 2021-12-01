import React from 'react';
import Login from "../pages/Login"

export default function PrivatePage({ component: Component, ...rest }) {

    return localStorage.getItem("token") ? (
        <Component {...rest}  />
    ) : (
        <Login/>
    )
}