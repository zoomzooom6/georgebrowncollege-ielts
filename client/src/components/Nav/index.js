import React from 'react';

function Nav() {
    return (
        <header>
            <h2>
                <a href='/'>
                    George Brown College IELTS Test Centre
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-1">
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="#Locations">
                            Locations
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="#register">
                            Register
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="#preparation">
                            Preparation
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="#testday">
                            Test Day
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="#results">
                            Results
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;