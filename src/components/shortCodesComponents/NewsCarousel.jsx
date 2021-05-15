import React, {useState} from 'react'
import news1 from '../../img/news-1.png'
import news2 from '../../img/news-2.png'
import news3 from '../../img/news-3.png'


const NewsCarousel = () => {
    const [playTrailer, setPlayTrailer] = useState(false)
    
    return (
        <section id="newsCarousel" className="mt-5 py-5">
            {/* Handle pop-up video diasplay */}
            <div className={playTrailer ? "playTrailer position-fixed activePlay transition-1000ms z-index-999" : "playTrailer position-fixed z-index-999"}>
                <iframe width="1120" height="630" src="https://www.youtube.com/embed/d96cjJhvlMA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            {/* blur backgound */}
            <div className={playTrailer ? "blur-bg position-fixed w-100 blur-bg-active transition-500ms" : "blur-bg position-fixed w-100"} onClick={()=> setPlayTrailer(false)}>
                <i className="fas fa-times text-white position-absolute t-0 r-0 size-34 p-5" onClick={() => setPlayTrailer(false)}></i>
            </div>



            <div className="container pb-5 mb-5">
                <h3 className="section-title border-bottom py-4 text-orange position-relative mb-5 size-18">NEWS CAROUSEL</h3>
                <div className="row flex-nowrap news-carousel">
                    <div className="col-4">
                        <div className="card border-0">
                            <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1">
                                <img src={news1} className="card-img-top w-100 border-radius-1" alt="..." />
                                <div className="overlay position-absolute h-100 t-0"></div>
                                <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                    <i className="fas fa-link play-btn rounded-circle border border-white text-center size-18 mb-4"  onClick={()=> setPlayTrailer(true)}></i>
                                    <a href="/single-movie" className="letter-spacing-3 font-weight-bolder text-decoration-none">READ MORE</a>
                                </div>
                            </div>
                            <div className="card-body p-0 mt-5">
                                <p className="text-orange mb-0">8 MARCH, 2017</p>
                                <h2 className="card-title mb-3">Lorem ipsum delor sit amet</h2>
                                <p className="font-weight-lighter">Classified advertising is a form of advertising that is particularly common in newspapers and other periodicals.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card border-0">
                            <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1">
                                <img src={news2} className="card-img-top w-100 border-radius-1" alt="..." />
                                <div className="overlay position-absolute h-100 t-0"></div>
                                <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                    <i className="fas fa-link play-btn rounded-circle border border-white text-center size-18 mb-4"  onClick={()=> setPlayTrailer(true)}></i>
                                    <a href="/single-movie" className="letter-spacing-3 font-weight-bolder text-decoration-none">READ MORE</a>
                                </div>
                            </div>
                            <div className="card-body p-0 mt-5">
                                <p className="text-orange mb-0">2 MARCH, 2017</p>
                                <h2 className="card-title mb-3">Lorem ipsum delor sit amet</h2>
                                <p className="font-weight-lighter">Classified advertising is a form of advertising that is particularly common in newspapers and other periodicals.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card border-0">
                            <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1">
                                <img src={news3} className="card-img-top w-100 border-radius-1" alt="..." />
                                <div className="overlay position-absolute h-100 t-0"></div>
                                <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                    <i className="fas fa-link play-btn rounded-circle border border-white text-center size-18 mb-4"  onClick={()=> setPlayTrailer(true)}></i>
                                    <a href="/single-movie" className="letter-spacing-3 font-weight-bolder text-decoration-none">READ MORE</a>
                                </div>
                            </div>
                            <div className="card-body p-0 mt-5">
                                <p className="text-orange mb-0">14 FEBRUARY, 2017</p>
                                <h2 className="card-title mb-3">Lorem ipsum delor sit amet</h2>
                                <p className="font-weight-lighter">Classified advertising is a form of advertising that is particularly common in newspapers and other periodicals.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card border-0">
                            <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1">
                                <img src={news2} className="card-img-top w-100 border-radius-1" alt="..." />
                                <div className="overlay position-absolute h-100 t-0"></div>
                                <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                    <i className="fas fa-link play-btn rounded-circle border border-white text-center size-18 mb-4"  onClick={()=> setPlayTrailer(true)}></i>
                                    <a href="/single-movie" className="letter-spacing-3 font-weight-bolder text-decoration-none">READ MORE</a>
                                </div>
                            </div>
                            <div className="card-body p-0 mt-5">
                                <p className="text-orange mb-0">2 MARCH, 2017</p>
                                <h2 className="card-title mb-3">Lorem ipsum delor sit amet</h2>
                                <p className="font-weight-lighter">Classified advertising is a form of advertising that is particularly common in newspapers and other periodicals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsCarousel 
