import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink(props) {
    return (
        <div class="button" id="button-6">
            <div id="spin"></div>
            <Link {...props}>{props.children}</Link>
        </div>
    )
}
