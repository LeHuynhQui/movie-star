import React, { Component } from 'react'
import hero1 from '../../img/hero-1.jpg'
import hero2 from '../../img/hero-2.jpg'
import hero3 from '../../img/hero-3.jpg'
import scrollArrow from '../../img/scroll-arrow.svg'

export default class Carousel extends Component {
    render() {
        return (
            <section id="carousel" className="w-100 h-95vh position-relative">
                <img src={scrollArrow} alt="" className="scrollArrow position-absolute b-0"/>
                <div id="carouselMovie" className="carousel slide w-100 h-100" data-ride="carousel">
                    <ol className="container carousel-indicators justify-content-md-start mx-0 mx-auto pl-4">
                        <li data-target="#carouselMovie" className="rounded-circle border border-white d-inline-block active" data-slide-to={0}/>
                        <li data-target="#carouselMovie" className="rounded-circle border border-white d-inline-block mx-4" data-slide-to={1} />
                        <li data-target="#carouselMovie" className="rounded-circle border border-white d-inline-block" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner w-100 h-100">
                        <div className="carousel-item w-100 h-100 active">
                            <img src={hero1} className="d-block w-100 h-100 object-fit-cover" alt="..." />
                            <div className="carousel-caption text-left d-none w-100 d-flex align-items-center r-0 l-0">
                                <div className="container">
                                    <h5 className="size-16 text-yellow mb-3 letter-spacing-3">ACTION, ADVENTURE, FANTASY</h5>
                                    <h1 className="mb-5">End of the World: Part II</h1>
                                    <p className="mb-3 size-18">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. <br/> Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                                    <span className="d-inline-block text-center mr-2 rounded-circle border border-white">PG</span>
                                    <button className="letter-spacing-3 px-5 py-3 position-relative overflow-hidden border-0 text-white rounded-pill"><i class="fas fa-play"></i> Play Trailer</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item w-100 h-100">
                            <img src={hero2} className="d-block w-100 h-100 object-fit-cover" alt="..." />
                            <div className="carousel-caption text-left d-none w-100 d-flex align-items-center r-0 l-0">
                                <div className="container">
                                    <h5 className="size-16 text-yellow mb-3 letter-spacing-3">ACTION, ADVENTURE, FANTASY</h5>
                                    <h1 className="mb-5">End of the World: Part II</h1>
                                    <p className="mb-3 size-18">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. <br/> Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                                    <span className="d-inline-block text-center mr-2 rounded-circle border border-white">15</span>
                                    <button className="letter-spacing-3 px-5 py-3 position-relative overflow-hidden border-0 text-white rounded-pill"><i class="fas fa-play"></i> Play Trailer</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item w-100 h-100">
                            <img src={hero3} className="d-block w-100 h-100 object-fit-cover" alt="..." />
                            <div className="carousel-caption text-left d-none w-100 d-flex align-items-center r-0 l-0">
                                <div className="container">
                                    <h5 className="size-16 text-yellow mb-3 letter-spacing-3">ACTION, ADVENTURE, FANTASY</h5>
                                    <h1 className="mb-5">End of the World: Part II</h1>
                                    <p className="mb-3 size-18">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. <br/> Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                                    <span className="d-inline-block text-center mr-2 rounded-circle border border-white">PG</span>
                                    <button className="letter-spacing-3 px-5 py-3 position-relative overflow-hidden border-0 text-white rounded-pill"><i class="fas fa-play"></i> Play Trailer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}
