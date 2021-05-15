import React, { useState , useEffect } from 'react'
import movie1 from '../../img/movie-1.jpg'
import movie2 from '../../img/movie-2.jpg'
import movie3 from '../../img/movie-3.jpg'
import movie4 from '../../img/movie-4.jpg'
import Aos from 'aos'


const Newin = () => {
    const [playTrailer, setPlayTrailer] = useState(false)
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <section id="new-in" className="mt-5 py-5">
            {/* Handle pop-up video diasplay */}
            <div className={playTrailer ? "playTrailer position-fixed activePlay transition-1000ms z-index-999" : "playTrailer position-fixed z-index-999"}>
                <iframe width="1120" height="630" src="https://www.youtube.com/embed/d96cjJhvlMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            {/* blur backgound */}
            <div className={playTrailer ? "blur-bg position-fixed w-100 blur-bg-active transition-500ms" : "blur-bg position-fixed w-100"} onClick={()=> setPlayTrailer(false)}>
                <i class="fas fa-times text-white position-absolute t-0 r-0 size-34 p-5" onClick={() => setPlayTrailer(false)}></i>
            </div>




            <div className="container">
                <h3 className="section-title border-bottom py-4 text-orange position-relative mb-5 size-18">NEW IN</h3>
                <div className="row flex-nowrap film-slider">
                    <div data-aos="fade-up" data-aos-delay="100" className="col-3">
                        <div className="card border-0">
                            <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1">
                                <img src={movie1} className="card-img-top w-100 border-radius-1" alt="..." />
                                <div className="overlay position-absolute h-100 t-0"></div>
                                <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                    <i class="fas fa-play play-btn rounded-circle border border-white text-center size-18 mb-4"  onClick={()=> setPlayTrailer(true)}></i>
                                    <a href="/single-movie" className="letter-spacing-3 font-weight-bolder text-decoration-none">READ MORE</a>
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

                    <div data-aos="fade-up" data-aos-delay="300" className="col-3">
                        <div className="card border-0">
                            <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1">
                                <img src={movie2} className="card-img-top w-100 border-radius-1" alt="..." />
                                <div className="overlay position-absolute h-100 t-0"></div>
                                <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                    <i class="fas fa-play play-btn rounded-circle border border-white text-center size-18 mb-4"  onClick={()=> setPlayTrailer(true)}></i>
                                    <a href="/single-movie" className="letter-spacing-3 font-weight-bolder text-decoration-none">READ MORE</a>
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

                    <div data-aos="fade-up" data-aos-delay="500" className="col-3">
                        <div className="card border-0">
                            <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1">
                                <img src={movie3} className="card-img-top w-100 border-radius-1" alt="..." />
                                <div className="overlay position-absolute h-100 t-0"></div>
                                <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                    <i class="fas fa-play play-btn rounded-circle border border-white text-center size-18 mb-4"  onClick={()=> setPlayTrailer(true)}></i>
                                    <a href="/single-movie" className="letter-spacing-3 font-weight-bolder text-decoration-none">READ MORE</a>
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

                    <div data-aos="fade-up" data-aos-delay="700" className="col-3">
                        <div className="card border-0">
                            <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1">
                                <img src={movie4} className="card-img-top w-100 border-radius-1" alt="..." />
                                <div className="overlay position-absolute h-100 t-0"></div>
                                <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                    <i class="fas fa-play play-btn rounded-circle border border-white text-center size-18 mb-4"  onClick={()=> setPlayTrailer(true)}></i>
                                    <a href="/single-movie" className="letter-spacing-3 font-weight-bolder text-decoration-none">READ MORE</a>
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

                    <div data-aos="fade-up" data-aos-delay="800" className="col-3">
                        <div className="card border-0">
                            <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1">
                                <img src={movie3} className="card-img-top w-100 border-radius-1" alt="..." />
                                <div className="overlay position-absolute h-100 t-0"></div>
                                <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                    <i class="fas fa-play play-btn rounded-circle border border-white text-center size-18 mb-4"  onClick={()=> setPlayTrailer(true)}></i>
                                    <a href="/single-movie" className="letter-spacing-3 font-weight-bolder text-decoration-none">READ MORE</a>
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

export default  Newin
