import React, { Component } from 'react'
import hero1 from '../../img/hero-1.jpg'
import hero2 from '../../img/hero-2.jpg'
import hero3 from '../../img/hero-3.jpg'
import scrollArrow from '../../img/scroll-arrow.svg'

export default class Carousel extends Component {
    render() {
        return (
            <section id="carousel">
                <img src={scrollArrow} alt="" className="scrollArrow"/>
                <div id="carouselMovie" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselMovie" data-slide-to={0} className="active" />
                        <li data-target="#carouselMovie" data-slide-to={1} />
                        <li data-target="#carouselMovie" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={hero1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>ACTION, ADVENTURE, FANTASY</h5>
                                <h1>End of the World: Part II</h1>
                                <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                                <span>PG</span>
                                <button><i class="fas fa-play"></i> Play Trailer</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={hero2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>ACTION, ADVENTURE, FANTASY</h5>
                                <h1>End of the World: Part II</h1>
                                <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                                <span>15</span>
                                <button><i class="fas fa-play"></i> Play Trailer</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={hero3} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>ACTION, ADVENTURE, FANTASY</h5>
                                <h1>End of the World: Part II</h1>
                                <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                                <span>PG</span>
                                <button><i class="fas fa-play"></i> Play Trailer</button>
                            </div>
                        </div>
                    </div>
                    {/* <a className="carousel-control-prev" href="#carouselMovie" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselMovie" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a> */}
                </div>

            </section>
        )
    }
}
