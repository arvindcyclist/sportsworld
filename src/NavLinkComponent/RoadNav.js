import React from 'react'
import {Link} from 'react-router-dom'

function RoadNav(){
    return(
    <div className="sub">
        <nav>
        <ul>
            <Link to="/road/overview">
            <li>
                Overview
            </li>
            </Link>

            <Link to="/road/about">
            <li>
                About
            </li>
            </Link>

            <Link to="/road/events">
            <li>
                Events
            </li>
            </Link>
        </ul>
    </nav>
    </div>
    )
}

export default RoadNav