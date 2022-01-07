import React from 'react'
import { NavLink as Link } from 'react-router-dom'


export default function NavLink(props) {
    return (
        <Link {...props} className={({ isActive }) => `button button-6 ${isActive && "hover"}`}>
            <div className="spin"></div>
            <span>{props.children}</span>
        </Link>
    )
}
