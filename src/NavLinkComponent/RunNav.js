import React from 'react'
import {Link} from 'react-router-dom'

function RunNav(){
    return(
    <div className="sub">
        <nav>
        <ul>
            <Link to="/running/overview">
            <li>
                Overview
            </li>
            </Link>

            <Link to="/running/about">
            <li>
                About
            </li>
            </Link>

            <Link to="/running/events">
            <li>
                Events
            </li>
            </Link>
        </ul>
    </nav>
    </div>
    )
}

export default RunNav