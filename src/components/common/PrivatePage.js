import React from 'react';
import LoginPage from "../pages/LoginPage"

export default function PrivatePage({ component: Component, ...rest }) {

    return localStorage.getItem("token") ? (
        <Component {...rest}  />
    ) : (
        <LoginPage/>
    )
}