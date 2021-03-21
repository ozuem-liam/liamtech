import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <header>      
                    <div className="menub">
                    <span className="menub__burger"></span>
                    </div>

                    <div className="navbar">
                    <h1>Liam</h1>

                    <ul className="navlist">
                        <li className="menu-nav__item active">
                        <a href="index.html" className="menu-nav__link">
                            Home
                        </a>
                        </li>               
                        <li className="menu-nav__item">
                        <a href="about.html" className="menu-nav__link">
                            About Me
                            </a>
                        </li>
                        <li className="menu-nav__item">
                        <a href="projects.html" className="menu-nav__link">
                            My Projects
                            </a>
                        </li>

                        <li className="menu-nav__item">
                        <a href="contact.html" className="menu-nav__link">
                            Contact Me
                            </a>
                        </li>
                    </ul>

                    </div>

                </header> 
            </div>
        );
    }
}

export default Navbar;