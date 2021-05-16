import React, {useEffect} from 'react'
import Aos from'aos'


const RowIcons = () => {
    useEffect(() => {
        Aos.init({duration:500})
    })
    return (
        <section id="rowIcons" className="mt-5 py-5">
            <div className="container pb-5 mb-5">
                <h3 className="section-title border-bottom py-4 text-orange position-relative mb-5 size-18">ROW ICONS</h3>
                <div className="row">
                    <div data-aos="zoom-in-down" data-aos-delay="1000" className="col-4 row justify-content-between">
                        <div className="col-3">
                            <i className="fas fa-lemon text-orange size-24 row-icon rounded-circle border border-dark text-center"></i>
                        </div>
                        <div className="col-9">
                            <h4 className="size-24 mb-4 ">Box icon title</h4>
                            <p className="font-weight-lighter">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                        </div>
                    </div>
                    
                    <div data-aos="zoom-in-down" data-aos-delay="1000" className="col-4 row justify-content-between">
                        <div className="col-3">
                            <i className="fas fa-lemon text-orange size-24 row-icon rounded-circle border border-dark text-center"></i>
                        </div>
                        <div className="col-9">
                            <h4 className="size-24 mb-4 ">Box icon title</h4>
                            <p className="font-weight-lighter">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                        </div>
                    </div>

                    <div data-aos="zoom-in-down" data-aos-delay="1000" className="col-4 row justify-content-between">
                        <div className="col-3">
                            <i className="fas fa-lemon text-orange size-24 row-icon rounded-circle border border-dark text-center"></i>
                        </div>
                        <div className="col-9">
                            <h4 className="size-24 mb-4 ">Box icon title</h4>
                            <p className="font-weight-lighter">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RowIcons 
