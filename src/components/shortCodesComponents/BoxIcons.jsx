import React, {useEffect} from 'react'
import Aos from'aos'

const BoxIcons = () => {
    useEffect(() => {
        Aos.init({duration:1500})
    })
    return (
        <section id="boxIcons" className="mt-5 py-5">
            <div className="container mb-5">
                <h3 className="section-title border-bottom py-4 text-orange position-relative mb-5 size-18">BOX ICONS</h3>
                <div className="row">
                    <div data-aos="fade-up" className="col-4 text-center">
                        <i className="fas fa-lemon text-orange size-34 mb-5"></i>
                        <h4 className="size-24 mb-4">BOX ICON TITLE</h4>
                        <p className="font-weight-lighter">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                    

                    <div data-aos="fade-up" data-aos-delay="150" className="col-4 text-center">
                        <i className="fas fa-radiation text-orange size-34 mb-5"></i>
                        <h4 className="size-24 mb-4">BOX ICON TITLE</h4>
                        <p className="font-weight-lighter">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300" className="col-4 text-center">
                        <i className="fab fa-artstation text-orange size-34 mb-5"></i>
                        <h4 className="size-24 mb-4">BOX ICON TITLE</h4>
                        <p className="font-weight-lighter">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BoxIcons 
