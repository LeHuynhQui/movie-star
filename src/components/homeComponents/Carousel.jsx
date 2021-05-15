import React, { useState  } from 'react'
import hero1 from '../../img/hero-1.jpg'
import hero2 from '../../img/hero-2.jpg'
import hero3 from '../../img/hero-3.jpg'
import scrollArrow from '../../img/scroll-arrow.svg'
import {motion} from 'framer-motion'


const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}

const Carousel = () => {
    const [playTrailer, setPlayTrailer] = useState(false)
    

    return (
        <section id="carousel" className="w-100 h-95vh position-relative mb-5">
            {/* Handle pop-up video diasplay */}
            <div className={playTrailer ? "playTrailer position-fixed activePlay transition-1000ms z-index-999" : "playTrailer position-fixed z-index-999"}>
                <iframe width="1120" height="630" src="https://www.youtube.com/embed/RhFMIRuHAL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <img src={scrollArrow} alt="" className="scrollArrow position-absolute b-0" />

            {/* blur backgound */}
            <div className={playTrailer ? "blur-bg position-fixed w-100 blur-bg-active transition-500ms" : "blur-bg position-fixed w-100"} onClick={()=> setPlayTrailer(false)}>
                <i class="fas fa-times text-white position-absolute t-0 r-0 size-34 p-5" onClick={() => setPlayTrailer(false)}></i>
            </div>



            <div id="carouselMovie" className="carousel slide w-100 h-100" data-ride="carousel">
                <ol className="container carousel-indicators justify-content-md-start mx-0 mx-auto pl-4">
                    <li data-target="#carouselMovie" className="rounded-circle border border-white d-inline-block active" data-slide-to={0} />
                    <li data-target="#carouselMovie" className="rounded-circle border border-white d-inline-block mx-4" data-slide-to={1} />
                    <li data-target="#carouselMovie" className="rounded-circle border border-white d-inline-block" data-slide-to={2} />
                </ol>
                <div className="carousel-inner w-100 h-100">
                    <div className="carousel-item w-100 h-100 active">
                        <img src={hero1} className="d-block w-100 h-100 object-fit-cover" alt="..." />
                        <div className="carousel-caption text-left d-none w-100 d-flex align-items-center r-0 l-0">
                            <div className="container">
                                <motion.h5 
                                    initial={{opacity:0, y:40}} 
                                    animate={{opacity:1, y:0}} 
                                    className="size-16 text-yellow mb-3 letter-spacing-3">
                                        ACTION, ADVENTURE, FANTASY
                                </motion.h5>
                                <motion.h1 
                                    initial={{opacity:0, scale: 4.5}} 
                                    animate={{opacity:1, scale:1, transition: {delay: 1, ...transition}}} 
                                    className="mb-5">
                                        End of the World: Part II
                                </motion.h1>
                                <motion.p 
                                    initial={{opacity:0, x: -50}} 
                                    animate={{opacity:1, x:0, transition: {delay: 1, ...transition}}} 
                                    className="mb-3 size-18">
                                        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. <br /> Mirum est notare quam littera gothica, quam nunc putamus parum.
                                </motion.p>
                                <motion.span 
                                    initial={{opacity:0, scale: 2.5 }} 
                                    animate={{opacity:1, scale:1, transition: {delay: 0.5, ...transition}}} 
                                    className="d-inline-block text-center mr-2 rounded-circle border border-white">
                                        PG
                                </motion.span>
                                <motion.button 
                                    initial={{opacity:0, scale: 2.5, y: 50}} 
                                    animate={{opacity:1, scale:1, y: 0, transition: {delay: 0.5, ...transition}}} 
                                    className="letter-spacing-3 px-5 py-3 position-relative overflow-hidden border-0 text-white rounded-pill" onClick={()=> setPlayTrailer(true)}>
                                        <i class="fas fa-play"></i> 
                                        Play Trailer
                                </motion.button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item w-100 h-100">
                        <img src={hero2} className="d-block w-100 h-100 object-fit-cover" alt="..." />
                        <div className="carousel-caption text-left d-none w-100 d-flex align-items-center r-0 l-0">
                            <div className="container">
                                <h5 className="size-16 text-yellow mb-3 letter-spacing-3">ACTION, ADVENTURE, FANTASY</h5>
                                <h1 className="mb-5">End of the World: Part II</h1>
                                <p className="mb-3 size-18">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. <br /> Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                                <span className="d-inline-block text-center mr-2 rounded-circle border border-white">15</span>
                                <button className="letter-spacing-3 px-5 py-3 position-relative overflow-hidden border-0 text-white rounded-pill" onClick={()=> setPlayTrailer(true)}><i class="fas fa-play"></i> Play Trailer</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item w-100 h-100">
                        <img src={hero3} className="d-block w-100 h-100 object-fit-cover" alt="..." />
                        <div className="carousel-caption text-left d-none w-100 d-flex align-items-center r-0 l-0">
                            <div className="container">
                                <h5 className="size-16 text-yellow mb-3 letter-spacing-3">ACTION, ADVENTURE, FANTASY</h5>
                                <h1 className="mb-5">End of the World: Part II</h1>
                                <p className="mb-3 size-18">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. <br /> Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                                <span className="d-inline-block text-center mr-2 rounded-circle border border-white">PG</span>
                                <button className="letter-spacing-3 px-5 py-3 position-relative overflow-hidden border-0 text-white rounded-pill" onClick={()=> setPlayTrailer(true)}><i class="fas fa-play"></i> Play Trailer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carousel 
