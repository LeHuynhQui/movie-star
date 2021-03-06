import React from 'react'
import {motion} from 'framer-motion'
import heroShortcode from '../../img/hero-shortcodes.jpeg'
import scrollArrow from '../../img/scroll-arrow.svg'

const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}

const ShortcodeHero = () => {
    return (
        
        <motion.section id="shortcodeHero" className="position-relative">
            <img src={scrollArrow} alt="" className="scrollArrow position-absolute b-0" />
            <div id="carouselMovie" className="carousel slide w-100 h-100 h-45rem" data-ride="carousel">
                <div className="carousel-inner w-100 h-100">
                    <div id="carouselHero" className="carousel-item w-100 h-100 active">
                        <img src={heroShortcode} className="d-block w-100 h-100 object-fit-cover" alt="..." />
                        <div className="carousel-caption text-left d-none w-100 d-flex align-items-center r-0 l-0">
                            <div className="container center-y">
                                <motion.h5 initial={{opacity:0, y:40}} animate={{opacity:1, y:0}} transition={transition} exit={{opacity:0, y:40}} className="size-16 text-yellow mb-3 letter-spacing-3">THE VERY LATEST</motion.h5>
                                <motion.h1 initial={{opacity:0, scale: 4.5}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale: 4.5}} transition={transition}  className="mb-5 size-46 letter-spacing-3">Cinema news</motion.h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default ShortcodeHero
