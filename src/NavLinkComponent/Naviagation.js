import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

class Navigation extends Component {
    render() {
        return (
            <div className="main">
                <img src={logo}/>
                <nav>
                    <ul>
                        <Link to="/road">
                            <li>
                                ROAD
                            </li>
                        </Link>

                        <Link to="/mtb">
                            <li>
                                MTB
                            </li>
                        </Link >
                        
                        <Link to="/running">
                            <li>
                            RUNNING
                            </li>
                        </Link>

                        <Link to="/ironman">
                        <li>
                            IRONMAN
                        </li>
                        </Link>

                        <Link to="/shooting">
                        <li>
                            SHOOTING
                        </li>
                        </Link>
                        
                        <Link to="chess">
                        <li>
                            CHESS
                        </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation
