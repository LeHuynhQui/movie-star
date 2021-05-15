import React, { useState } from 'react'
import hero1 from '../../img/hero-1.jpg'
import hero2 from '../../img/hero-2.jpg'
import hero3 from '../../img/hero-3.jpg'
import post1 from '../../img/post-1.png'
import post5 from '../../img/post-5.png'
const MainNews = () => {
    const [playTrailer, setPlayTrailer] = useState(false)


    return (
        <section id="mainNews" className="my-5 py-5">
            {/* Handle pop-up video diasplay */}
            <div className={playTrailer ? "playTrailer position-fixed activePlay transition-1000ms z-index-999" : "playTrailer position-fixed z-index-999"}>
                <iframe width="1120" height="630" src="https://www.youtube.com/embed/d96cjJhvlMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            {/* blur backgound */}
            <div className={playTrailer ? "blur-bg position-fixed w-100 blur-bg-active transition-500ms" : "blur-bg position-fixed w-100"} onClick={() => setPlayTrailer(false)}>
                <i class="fas fa-times text-white position-absolute t-0 r-0 size-34 p-5" onClick={() => setPlayTrailer(false)}></i>
            </div>




            <div className="container">
                <div className="row justify-content-between align-items-start">
                    <div className="col-7">
                        <div className="w-100 border-bottom mb-5 pt-5">
                            <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1 mb-3">
                                <img src={post1} className="card-img-top w-100 border-radius-1" alt="..." />
                                <div className="overlay position-absolute h-100 t-0"></div>
                                <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                    <i class="fas fa-link play-btn rounded-circle border border-white text-center size-18 mb-4" onClick={() => setPlayTrailer(true)}></i>
                                    <p>Released: 7 Mar, 2017</p>
                                </div>
                            </div>
                            <div className="card-body px-0 pb-5">
                                <p className="letter-spacing-3 text-orange m-0 mb-1">NEW RELEASES, WHAT'S HOT</p>
                                <h3 className="letter-spacing-3 size-24 mb-5">15 Tips To Increase Your Adwords Profits</h3>
                                <p className="font-weight-lighter mb-3">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                                <a href="/"><button className="letter-spacing-3 px-5 py-3 position-relative overflow-hidden text-orange bg-white rounded-pill">READ FULL POST</button></a>
                            </div>
                        </div>

                        <div className="w-100 border-bottom mb-5 pt-5">
                            <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1 mb-3">
                                <img src={hero2} className="card-img-top w-100 border-radius-1" alt="..." />
                                <div className="overlay position-absolute h-100 t-0"></div>
                                <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                    <i class="fas fa-link play-btn rounded-circle border border-white text-center size-18 mb-4" onClick={() => setPlayTrailer(true)}></i>
                                    <p>Released: 7 Mar, 2017</p>
                                </div>
                            </div>
                            <div className="card-body px-0 pb-5">
                                <p className="letter-spacing-3 text-orange m-0 mb-1">NEW MOVIES, ANIMATION</p>
                                <h3 className="letter-spacing-3 size-24 mb-5">There Is No Competition</h3>
                                <p className="font-weight-lighter mb-3">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                                <a href="/"><button className="letter-spacing-3 px-5 py-3 position-relative overflow-hidden text-orange bg-white rounded-pill">READ FULL POST</button></a>
                            </div>
                        </div>

                        <div className="w-100 border-bottom mb-5 pt-5">
                            <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1 mb-3">
                                <img src={hero1} className="card-img-top w-100 border-radius-1" alt="..." />
                                <div className="overlay position-absolute h-100 t-0"></div>
                                <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                    <i class="fas fa-link play-btn rounded-circle border border-white text-center size-18 mb-4" onClick={() => setPlayTrailer(true)}></i>
                                    <p>Released: 7 Mar, 2017</p>
                                </div>
                            </div>
                            <div className="card-body px-0 pb-5">
                                <p className="letter-spacing-3 text-orange m-0 mb-1">NEW MOVIES, ANIMATION</p>
                                <h3 className="letter-spacing-3 size-24 mb-5">There Is No Competition</h3>
                                <p className="font-weight-lighter mb-3">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                                <a href="/"><button className="letter-spacing-3 px-5 py-3 position-relative overflow-hidden text-orange bg-white rounded-pill">READ FULL POST</button></a>
                            </div>
                        </div>

                        <div className="w-100 border-bottom mb-5 pt-5">
                            <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1 mb-3">
                                <img src={hero3} className="card-img-top w-100 border-radius-1" alt="..." />
                                <div className="overlay position-absolute h-100 t-0"></div>
                                <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                    <i class="fas fa-link play-btn rounded-circle border border-white text-center size-18 mb-4" onClick={() => setPlayTrailer(true)}></i>
                                    <p>Released: 7 Mar, 2017</p>
                                </div>
                            </div>
                            <div className="card-body px-0 pb-5">
                                <p className="letter-spacing-3 text-orange m-0 mb-1">NEW MOVIES, ANIMATION</p>
                                <h3 className="letter-spacing-3 size-24 mb-5">There Is No Competition</h3>
                                <p className="font-weight-lighter mb-3">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                                <a href="/"><button className="letter-spacing-3 px-5 py-3 position-relative overflow-hidden text-orange bg-white rounded-pill">READ FULL POST</button></a>
                            </div>
                        </div>

                        <div className="w-100 mb-5 pt-5">
                            <div className="card-img w-100 h-100 position-relative overflow-hidden border-radius-1 mb-3">
                                <img src={post5} className="card-img-top w-100 border-radius-1" alt="..." />
                                <div className="overlay position-absolute h-100 t-0"></div>
                                <div className="overlay-text text-white  position-absolute w-100 h-100 t-0 l-0 text-center d-flex flex-column justify-content-center align-items-center">
                                    <i class="fas fa-link play-btn rounded-circle border border-white text-center size-18 mb-4" onClick={() => setPlayTrailer(true)}></i>
                                    <p>Released: 7 Mar, 2017</p>
                                </div>
                            </div>
                            <div className="card-body px-0 pb-5">
                                <p className="letter-spacing-3 text-orange m-0 mb-1">NEW MOVIES, ANIMATION</p>
                                <h3 className="letter-spacing-3 size-24 mb-5">There Is No Competition</h3>
                                <p className="font-weight-lighter mb-3">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                                <a href="/"><button className="letter-spacing-3 px-5 py-3 position-relative overflow-hidden text-orange bg-white rounded-pill">READ FULL POST</button></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className=" w-100 seach-input position-relative pt-5 border-radius-3 border-bottom-radius-none mb-5">
                            <input type="text" name="" id="seach" className="w-100 border p-3 border-radius-3 outline-none" placeholder="Search..." />
                            <i className="fas fa-search position-absolute text-orange b-0 r-0 p-4"></i>
                        </div>
                        <div className="caterogies mb-5">
                            <h3 className="section-title border-bottom py-4 text-orange position-relative mb-5 size-18">CATEGORIES</h3>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="/" className="text-black">Coming soon</a></li>
                                <li className="mb-2"><a href="/" className="text-black">New releases</a></li>
                                <li className="mb-2"><a href="/" className="text-black">What's hot</a></li>
                                <li className="mb-2"><a href="/" className="text-black">Events</a></li>
                            </ul>
                        </div>
                        <div className="archives mb-5">
                            <h3 className="section-title border-bottom py-4 text-orange position-relative mb-5 size-18">ARCHIVES</h3>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="/" className="text-black">July 2017</a></li>
                                <li className="mb-2"><a href="/" className="text-black">June 2017</a></li>
                                <li className="mb-2"><a href="/" className="text-black">May 2017</a></li>
                                <li className="mb-2"><a href="/" className="text-black">April 2017</a></li>
                            </ul>
                        </div>
                        <div className="tags">
                            <h3 className="section-title border-bottom py-4 text-orange position-relative mb-5 size-18">TAGS</h3>
                            <a className="py-2 px-4 mr-3 mb-3 rounded d-inline-block" href="/">Thriller</a>
                            <a className="py-2 px-4 mr-3 mb-3 rounded d-inline-block" href="/">Kids</a>
                            <a className="py-2 px-4 mr-3 mb-3 rounded d-inline-block" href="/">Offers</a>
                            <a className="py-2 px-4 mr-3 mb-3 rounded d-inline-block" href="/">Movie nights</a>
                            <a className="py-2 px-4 mr-3 mb-3 rounded d-inline-block" href="/">Premiere</a>
                            <a className="py-2 px-4 mr-3 mb-3 rounded d-inline-block" href="/">Animation</a>
                            <a className="py-2 px-4 mr-3 mb-3 rounded d-inline-block" href="/">Comedy</a>
                            <a className="py-2 px-4 mr-3 mb-3 rounded d-inline-block" href="/">New</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainNews
