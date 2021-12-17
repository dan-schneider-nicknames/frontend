import React from 'react'
import { Link } from 'react-router-dom'


export default function NavLink(props) {
    return (
        <div className="button button-6">
            <div className="spin"></div>
            <Link {...props}>{props.children}</Link>
        </div>
    )
}
