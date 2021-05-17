import React, { useState, useEffect } from 'react'
import videoImg1 from '../../img/slide-1-video.png'
import slide7 from '../../img/slide-7.png'

import Aos from 'aos'


const ComingSoon = () => {
    const [playTrailer, setPlayTrailer] = useState(false)
    useEffect (() => {
        Aos.init({duration:500})
    })


    return (
        <section id="comingSoon" className="py-5 position-relative w-100">
            {/* Handle pop-up video diasplay */}
            <div className={playTrailer ? "playTrailer position-fixed activePlay transition-1000ms z-index-999" : "playTrailer position-fixed z-index-999"}>
                <iframe width="1120" height="630" className="videoFrame" src="https://www.youtube.com/embed/S-UPJyEHmM0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            {/* blur backgound */}
            <div className={playTrailer ? "blur-bg position-fixed w-100 blur-bg-active transition-500ms" : "blur-bg position-fixed w-100"} onClick={()=> setPlayTrailer(false)}>
                <i className="fas fa-times text-white position-absolute t-0 r-0 size-34 p-5" onClick={() => setPlayTrailer(false)}></i>
            </div>




            <img src={slide7} alt="" className="position-absolute w-100 h-100 t-0 l-0 bg"/>
            <div className="container">
                <h3 className="section-title border-bottom py-4 text-white position-relative my-5 size-18">COMING SOON</h3>
                <div className="responsive row justify-content-between align-items-center">
                    <div className="col-5 mb-5 text-white">
                        <p className="text-orange letter-spacing-3">DRAMA, THRILLER</p>
                        <h2 data-aos="zoom-in-down" data-aos-delay="1000" className="size-34 mb-3 letter-spacing-3">Deepwater Horizon</h2>
                        <div className="star-date d-flex w-100 justify-content-start align-items-center mb-5">
                            <div className="star mr-4 text-yellow size-12">
                                <i className="fa fa-star px-1"></i>
                                <i className="fa fa-star px-1"></i>
                                <i className="fa fa-star px-1"></i>
                                <i className="fa fa-star px-1"></i>
                                <i className="fa fa-star px-1"></i>
                            </div>
                            <div className="date d-flex  align-items-center size-12">
                                <i className="far fa-calendar-alt mr-3"></i>
                                <p className="mb-0">30 September, 2017</p>
                            </div>
                        </div>
                        <p>A dramatization of the April 2010 disaster, when the offshore drilling rig Deepwater Horizon exploded and created the worst oil spill in U.S. history.</p>
                        <a className="text-orange size-12 mb-5 text-decoration-none letter-spacing-3" href="/">MORE INFOR <i className="fas fa-angle-right ml-3"></i></a>
                    </div>
                    <div className="col-6 video">
                        <div className="img w-100 position-relative">
                            <img src={videoImg1} alt="video" className="w-100 object-fit-cover"/>
                            <i className="fas fa-play play-btn rounded-circle border text-center text-orange size-24 mb-4 position-absolute" onClick={() => setPlayTrailer(true)}></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default  ComingSoon 

