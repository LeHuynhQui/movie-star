import React, { Component } from 'react'
import logo from '../../img/logo.svg'

export default class Header extends Component {
    render() {
        return (
            <header className="position-absolute top-0 w-100">
                <div className="container">
                    <nav className="nav justify-content-end py-1 top mt-3">
                        <a className="nav-link  border-ligh border-right text-white" href="tel:0330 123 4567"><i className="fas fa-phone-alt mr-2" /> 0330 123 4567</a>
                        <a className="nav-link text-white" href="/"><i className="fas fa-search" /></a>
                    </nav>

                    <nav className="navbar">
                        <a className="navbar-brand text-white" href="/">
                            <img src={logo} className="d-inline-block align-top" alt="minhhoa" />
                        </a>
                        <ul className="nav justify-content-center border-bottom main-nav">
                            <li className="nav-item">
                                <a className="nav-link px-5 py-4 letter-spacing-3 position-relative active text-white" href="/">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-5 py-4 letter-spacing-3 position-relative text-white" href="/">WHAT'S ON</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-5 py-4 letter-spacing-3 position-relative text-white" href="/">SHORTCOEDS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-5 py-4 letter-spacing-3 position-relative text-white" href="/">NEWS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-5 py-4 letter-spacing-3 position-relative text-white" href="/">CONTACT</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </header>

        )
    }
}
