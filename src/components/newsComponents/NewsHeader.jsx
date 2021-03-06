import React, { useState } from 'react'
import logo from '../../img/logo.svg'


const NewsHeader = () => {
    const [active, setActive] = useState(false)


    const [close, setClose] = useState(false)
    

    window.addEventListener('scroll', e => {
        window.scrollY > 550 ? setActive(true) : setActive(false)
    })

    
    return (
        <header className= {active ? "position-fixed top-0 transition-500ms w-100 bg-black z-index-10 pb-3" : "position-absolute top-0 w-100"}>
            <div className="container">
                <nav className={active ? "nav justify-content-end py-1 top mt-3 unactive" : "nav justify-content-end py-1 top mt-3"}>
                    <a className={close? "nav-link unactive  border-ligh border-right text-white" : "nav-link  border-ligh border-right text-white"} href="tel:0330 123 4567"><i className="fas fa-phone-alt mr-2" /> 0330 123 4567</a>
                    <a className={close ? "nav-link unactive text-white" : "nav-link text-white"} href="/"><i className="fas fa-search" /></a>
                </nav>

                <nav className="navbar flex-nowrap justify-content-between nav-responsive">
                    <a className="" href="/">
                        <img src={logo} className="w-75" alt="minhhoa" />
                    </a>

                    <div className="hamburger" onClick={() => setClose(!close)}>
                        <div className={close ? "line line-1 close" : "line line-1"}></div>
                        <div className={close ? "line line-2 close" : "line line-2"}></div>
                        <div className={close ? "line line-3 close" : "line line-3"}></div>
                    </div>

                    <ul className={close ? "list-unstyled border-bottom main-nav active" : "list-unstyled border-bottom main-nav"}>
                        <li className="nav-item hover-border-effect d-inline-block">
                            <a className="nav-link pages px-4 py-4 letter-spacing-3 position-relative text-white"  href="/">HOME</a>
                        </li>
                        <li className="nav-item hover-border-effect d-inline-block">
                            <a className="nav-link pages px-4 py-4 letter-spacing-3 position-relative text-white" href="/whats-on">WHAT'S ON</a>
                        </li>
                        <li className="nav-item hover-border-effect d-inline-block">
                            <a className="nav-link pages px-4 py-4 letter-spacing-3 position-relative text-white" href="/shortcodes">SHORTCOEDS</a>
                        </li>
                        <li className="nav-item hover-border-effect d-inline-block position-relative news">
                            <a className="nav-link pages px-4 py-4 letter-spacing-3 position-relative text-white active" href="/news">NEWS</a>
                            <div className="sub-nav-news position-absolute text-white l-0 d-flex align-items-center transition-500ms overflow-hidden">
                                <a href="/news" className="m-0 position-absolute transition-1000ms;">NEWS SINGLE</a>
                            </div>
                        </li>
                        <li className="nav-item hover-border-effect d-inline-block">
                            <a className="nav-link pages px-4 py-4 letter-spacing-3 position-relative text-white" href="/contact">CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default NewsHeader
