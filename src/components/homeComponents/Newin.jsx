import React, { Component } from 'react'
import movie1 from '../../img/movie-1.jpg'
import movie2 from '../../img/movie-2.jpg'
import movie3 from '../../img/movie-3.jpg'
import movie4 from '../../img/movie-4.jpg'

export default class Newin extends Component {
    render() {
        return (
            <section id="new-in" className="mt-5">
                <div className="container">
                    <h3 className="border-bottom py-4 text-orange position-relative mb-5 size-18">NEW IN</h3>
                    <div className="row flex-nowrap film-slider">
                        <div className="col-3">
                            <div className="card border-0">
                                <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1">
                                    <img src={movie1} className="card-img-top w-100 border-radius-1" alt="..." />
                                    <div className="overlay position-absolute h-100 t-0"></div>
                                    <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                        <i class="fas fa-play rounded-circle border border-white text-center size-18 mb-4"></i>
                                        <p className="letter-spacing-3 font-weight-bolder">READ MORE</p>
                                        <p>Released: 7 Mar, 2017</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title text-center my-3">The last post</h2>
                                    <div className="row justify-content-center">
                                        <i class="fa fa-star px-1 text-yellow"></i>
                                        <i class="fa fa-star px-1 text-yellow"></i>
                                        <i class="fa fa-star px-1 text-yellow"></i>
                                        <i class="fa fa-star px-1 text-yellow"></i>
                                        <i class="fa fa-star px-1 text-yellow"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card border-0">
                                <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1">
                                    <img src={movie2} className="card-img-top w-100 border-radius-1" alt="..." />
                                    <div className="overlay position-absolute h-100 t-0"></div>
                                    <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                        <i class="fas fa-play rounded-circle border border-white text-center size-18 mb-4"></i>
                                        <p className="letter-spacing-3 font-weight-bolder">READ MORE</p>
                                        <p>Released: 7 Mar, 2017</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title text-center my-3">Dark and lonely</h2>
                                    <div className="row justify-content-center">
                                        <i class="fa fa-star px-1 text-yellow"></i>
                                        <i class="fa fa-star px-1 text-yellow"></i>
                                        <i class="fas fa-star-half-alt px-1 text-yellow"></i>
                                        <i class="far fa-star px-1 text-yellow"></i>
                                        <i class="far fa-star px-1 text-yellow"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card border-0">
                                <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1">
                                    <img src={movie3} className="card-img-top w-100 border-radius-1" alt="..." />
                                    <div className="overlay position-absolute h-100 t-0"></div>
                                    <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                        <i class="fas fa-play rounded-circle border border-white text-center size-18 mb-4"></i>
                                        <p className="letter-spacing-3 font-weight-bolder">READ MORE</p>
                                        <p>Released: 7 Mar, 2017</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title text-center my-3">Venture</h2>
                                    <div className="row justify-content-center">
                                        <i class="fa fa-star px-1 text-yellow"></i>
                                        <i class="fa fa-star px-1 text-yellow"></i>
                                        <i class="fa fa-star px-1 text-yellow"></i>
                                        <i class="fas fa-star-half-alt px-1 text-yellow"></i>
                                        <i class="far fa-star px-1 text-yellow"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card border-0">
                                <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1">
                                    <img src={movie4} className="card-img-top w-100 border-radius-1" alt="..." />
                                    <div className="overlay position-absolute h-100 t-0"></div>
                                    <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                        <i class="fas fa-play rounded-circle border border-white text-center size-18 mb-4"></i>
                                        <p className="letter-spacing-3 font-weight-bolder">READ MORE</p>
                                        <p>Released: 7 Mar, 2017</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title text-center my-3">Hush</h2>
                                    <div className="row justify-content-center">
                                        <i class="fa fa-star px-1 text-yellow"></i>
                                        <i class="fa fa-star px-1 text-yellow"></i>
                                        <i class="fa fa-star px-1 text-yellow"></i>
                                        <i class="fa fa-star px-1 text-yellow"></i>
                                        <i class="far fa-star px-1 text-yellow"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card border-0">
                                <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1">
                                    <img src={movie3} className="card-img-top w-100 border-radius-1" alt="..." />
                                    <div className="overlay position-absolute h-100 t-0"></div>
                                    <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                        <i class="fas fa-play rounded-circle border border-white text-center size-18 mb-4"></i>
                                        <p className="letter-spacing-3 font-weight-bolder">READ MORE</p>
                                        <p>Released: 7 Mar, 2017</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title text-center my-3">Venture</h2>
                                    <div className="row justify-content-center">
                                    <i class="fa fa-star px-1 text-yellow"></i>
                                        <i class="fa fa-star px-1 text-yellow"></i>
                                        <i class="fa fa-star px-1 text-yellow"></i>
                                        <i class="fas fa-star-half-alt px-1 text-yellow"></i>
                                        <i class="far fa-star px-1 text-yellow"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
