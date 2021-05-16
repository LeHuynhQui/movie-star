import React, { useEffect } from 'react'
import movie5 from '../../img/movie-5.jpg'
import movie6 from '../../img/movie-6.jpg'
import movie7 from '../../img/movie-7.jpg'
import movie8 from '../../img/movie-8.jpg'

import Aos from 'aos'

const ListShow = () => {
    useEffect (() => {
        Aos.init({duration: 1500})
    }, [])

    return (
        <section id="listShow" className="my-5 py-5">
            <div className="container">
                <div>
                    <ul className="nav nav-pills mb-3 border-bottom mb-5" id="pills-tab" role="tablist">
                        <li className="nav-item hover-border-effect" role="presentation">
                            <a className="nav-link text-black px-5 position-relative bg-transparent py-3 size-18" id="mon-tab" data-toggle="pill" href="#mon" role="tab" aria-controls="mon" aria-selected="true">MON</a>
                        </li>
                        <li className="nav-item hover-border-effect" role="presentation">
                            <a className="nav-link text-black px-5 position-relative bg-transparent py-3 size-18" id="tue-tab" data-toggle="pill" href="#tue" role="tab" aria-controls="tue" aria-selected="false">TUE</a>
                        </li>
                        <li className="nav-item hover-border-effect" role="presentation">
                            <a className="nav-link text-black px-5 position-relative bg-transparent py-3 size-18 active" id="wed-tab" data-toggle="pill" href="#wed" role="tab" aria-controls="wed" aria-selected="false">TODAY</a>
                        </li>
                        <li className="nav-item hover-border-effect" role="presentation">
                            <a className="nav-link text-black px-5 position-relative bg-transparent py-3 size-18" id="thu-tab" data-toggle="pill" href="#thu" role="tab" aria-controls="thu" aria-selected="false">THU</a>
                        </li>
                        <li className="nav-item hover-border-effect" role="presentation">
                            <a className="nav-link text-black px-5 position-relative bg-transparent py-3 size-18" id="fri-tab" data-toggle="pill" href="#fri" role="tab" aria-controls="fri" aria-selected="false">FRI</a>
                        </li>
                        <li className="nav-item hover-border-effect" role="presentation">
                            <a className="nav-link text-black px-5 position-relative bg-transparent py-3 size-18" id="sat-tab" data-toggle="pill" href="#sat" role="tab" aria-controls="sat" aria-selected="false">SAT</a>
                        </li>
                        <li className="nav-item hover-border-effect" role="presentation">
                            <a className="nav-link text-black px-5 position-relative bg-transparent py-3 size-18" id="sun-tab" data-toggle="pill" href="#sun" role="tab" aria-controls="sun" aria-selected="false">SUN</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="mon" role="tabpanel" aria-labelledby="mon-tab">
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-left"  data-aos-delay="300">
                                <div className="col-2">
                                    <a href="/news"><img src={movie5} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 bg-secondary text-white mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 bg-secondary text-white mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-right" data-aos-delay="500">
                                <div className="col-2">
                                    <a href="/news"><img src={movie6} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4  bg-dark text-white mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-left" data-aos-delay="700">
                                <div className="col-2">
                                    <a href="/news"><img src={movie7} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 bg-secondary text-white mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 bg-secondary text-white mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 bg-secondary text-white mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5" data-aos="fade-right" data-aos-delay="900">
                                <div className="col-2">
                                    <a href="/news"><img src={movie8} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tue" role="tabpanel" aria-labelledby="tue-tab">
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-left"  data-aos-delay="100">
                                <div className="col-2">
                                    <a href="/news"><img src={movie6} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-right" data-aos-delay="250">
                                <div className="col-2">
                                    <a href="/news"><img src={movie7} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-left" data-aos-delay="300">
                                <div className="col-2">
                                    <a href="/news"><img src={movie5} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5" data-aos="fade-right" data-aos-delay="400">
                                <div className="col-2">
                                    <a href="/news"><img src={movie8} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="wed" role="tabpanel" aria-labelledby="wed-tab">
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-left"  data-aos-delay="100">
                                <div className="col-2">
                                    <a href="/news"><img src={movie8} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-right" data-aos-delay="250">
                                <div className="col-2">
                                    <a href="/news"><img src={movie6} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-left" data-aos-delay="300">
                                <div className="col-2">
                                    <a href="/news"><img src={movie7} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5" data-aos="fade-right" data-aos-delay="400">
                                <div className="col-2">
                                    <a href="/news"><img src={movie5} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="thu" role="tabpanel" aria-labelledby="thu-tab">
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-left"  data-aos-delay="100">
                                <div className="col-2">
                                    <a href="/news"><img src={movie7} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-right" data-aos-delay="250">
                                <div className="col-2">
                                    <a href="/news"><img src={movie5} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-left" data-aos-delay="300">
                                <div className="col-2">
                                    <a href="/news"><img src={movie8} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5" data-aos="fade-right" data-aos-delay="400">
                                <div className="col-2">
                                    <a href="/news"><img src={movie6} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="fri" role="tabpanel" aria-labelledby="fri-tab">
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-left"  data-aos-delay="100">
                                <div className="col-2">
                                    <a href="/news"><img src={movie6} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-right" data-aos-delay="250">
                                <div className="col-2">
                                    <a href="/news"><img src={movie7} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-left" data-aos-delay="300">
                                <div className="col-2">
                                    <a href="/news"><img src={movie8} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5" data-aos="fade-right" data-aos-delay="400">
                                <div className="col-2">
                                    <a href="/news"><img src={movie5} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="sat" role="tabpanel" aria-labelledby="sat-tab">
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-left"  data-aos-delay="100">
                                <div className="col-2">
                                    <a href="/news"><img src={movie7} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-right" data-aos-delay="250">
                                <div className="col-2">
                                    <a href="/news"><img src={movie8} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-left" data-aos-delay="300">
                                <div className="col-2">
                                    <a href="/news"><img src={movie5} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5" data-aos="fade-right" data-aos-delay="400">
                                <div className="col-2">
                                    <a href="/news"><img src={movie6} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="sun" role="tabpanel" aria-labelledby="sun-tab">
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-left"  data-aos-delay="100">
                                <div className="col-2">
                                    <a href="/news"><img src={movie6} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-right" data-aos-delay="250">
                                <div className="col-2">
                                    <a href="/news"><img src={movie8} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5 border-bottom" data-aos="fade-left" data-aos-delay="300">
                                <div className="col-2">
                                    <a href="/news"><img src={movie5} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center py-5" data-aos="fade-right" data-aos-delay="400">
                                <div className="col-2">
                                <   a href="/news"><img src={movie7} className="w-100 border-radius-1" alt=""/></a>
                                </div>
                                <div className="col-10 text-black">
                                    <h4 className="text-orange size-16 letter-spacing-3">ACTION, ADVENTURE, SCI-FI</h4>
                                    <h2 className="size-24 mb-4">Captain America: The First Avenger</h2>
                                    <p className="size-16">Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                    <a className="text-orange size-12 mb-5 text-decoration-none" href="/news">FULL SYNOPSIS <i className="fas fa-angle-right ml-3"></i></a>
                                    <div className="view-time row justify-content-between">
                                        <div className="time col-9 row align-items-center size-12">
                                            <p className="mr-4 letter-spacing-3 mb-0"><i className="far fa-clock ml-4 mr-1"></i>VIEWING TIMES</p>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">11:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">16:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">18:00</button>
                                            <button className="py-3 px-4 mr-3 border-0 rounded-lg">21:00</button>
                                        </div>
                                        <div className="duration col-3 text-right">
                                            <span className="d-inline-block mr-5 size-12">120 MINS</span>
                                            <span className="d-inline-block size-18 text-white font-weight-bolder rounded-circle text-center">PG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default  ListShow 
