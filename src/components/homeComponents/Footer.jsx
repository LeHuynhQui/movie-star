import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="py-5">
                <div className="container text-white">
                    <div className="row border-bottom pb-5 mb-5">
                        <div className="col-3 responsive">
                            <h4 className="text-orange mb-5 letter-spacing-3 pt-5">GET IN TOUCH</h4>
                            <ul className="list-unstyled">
                                <li className="mb-3"><a href="/" className="text-decoration-none">FAQs</a></li>
                                <li className="mb-3"><a href="/" className="text-decoration-none">Give us feedback</a></li>
                                <li className="mb-3"><a href="/" className="text-decoration-none">Contact us</a> </li> 
                            </ul>
                        </div>
                        <div className="col-3 responsive">
                            <h4 className="text-orange mb-5 letter-spacing-3 pt-5">ABOUT MOVIE STAR</h4>
                            <ul className="list-unstyled">
                                <li className="mb-3"><a href="/" className="text-decoration-none">About us</a></li>
                                <li className="mb-3"><a href="/" className="text-decoration-none">Find us</a></li>
                                <li className="mb-3"><a href="/" className="text-decoration-none">Scheduel</a></li>
                                <li className="mb-3"><a href="/" className="text-decoration-none">News</a></li>
                            </ul>
                        </div>
                        <div className="col-3 responsive">
                            <h4 className="text-orange mb-5 letter-spacing-3 pt-5">LEGAL STUFF</h4>
                            <ul className="list-unstyled">
                                <li className="mb-3"><a href="/" className="text-decoration-none">Terms & Conditions</a></li>
                                <li className="mb-3"><a href="/" className="text-decoration-none">Privacy polic</a></li>
                                <li className="mb-3"><a href="/" className="text-decoration-none">Cookie policy</a></li>
                            </ul>
                        </div>
                        <div className="col-3 responsive">
                            <h4 className="text-orange mb-5 letter-spacing-3 pt-5">CONNECT WITH US</h4>
                            <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <a href="/" className="text-decoration-none">
                                            <i className="fab fa-facebook-f"></i>
                                            Facebook
                                        </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="/" className="text-decoration-none">
                                            <i className="fab fa-twitter"></i>
                                            Twitter
                                        </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="/" className="text-decoration-none">
                                            <i className="fab fa-google-plus-g"></i>
                                            Google +
                                        </a>
                                    </li>
                            </ul>
                        </div>
                    </div>
                    <p className="">2017 © Movie Star/ <a href="https://www.klevermedia.co.uk/" className="copy-right text-decoration-none" target="_blank" rel="noreferrer">Web design by Klever media</a></p>
                </div>
            </footer>
        )
    }
}
