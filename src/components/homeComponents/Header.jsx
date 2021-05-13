import React, { Component } from 'react'
import logo from '../../img/logo.svg'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="nav justify-content-end py-1 top mt-3">
                    <a className="nav-link  border-ligh border-right" href="tel:0330 123 4567"><i className="fas fa-phone-alt mr-2" /> 0330 123 4567</a>
                    <a className="nav-link" href><i className="fas fa-search" /></a>
                </nav>
               
                <nav className="navbar">
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="d-inline-block align-top" alt />
                    </a>
                    <ul className="nav justify-content-center border-light border-bottom main-nav">
                        <li className="nav-item">
                            <a className="nav-link px-5 py-4 active" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-5 py-4" href="#">WHAT'S ON</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-5 py-4" href="#">SHORTCOEDS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-5 py-4" href="#">NEWS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-5 py-4" href="#">CONTACT</a>
                        </li>
                    </ul>
                </nav>

            </header>

        )
    }
}
