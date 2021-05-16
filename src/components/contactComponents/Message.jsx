import React from 'react'

const Message = () => {
    return (
        <section id="message" className="mt-5 py-5">
            <div className="container pb-5 mb-5">
                <h3 className="section-title border-bottom py-4 text-orange position-relative mb-5 size-18">SEND A MESSAGE</h3>
                <div className="row justify-content-between">
                    <div className="col-6">
                        <form>
                            <div className="form-group mb-5">
                                <label className="text-uppercase" htmlFor="exampleInputEmail1">Name *</label>
                                <input type="text" className="form-control size-18 py-4 pl-4 rounded-0" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group mb-5">
                                <label className="text-uppercase" htmlFor="exampleInputPassword1">Email *</label>
                                <input type="email" className="form-control size-18 py-4 pl-4 rounded-0" id="email" />
                            </div>
                            <div className="form-group mb-5">
                                <label className="text-uppercase" htmlFor="exampleInputPassword1">Where did you hear about us ?</label>
                                <input type="text" className="form-control size-18 py-4 pl-4 rounded-0" id="reason" />
                            </div>

                            <div className="form-group">
                                <label className="text-uppercase" htmlFor="exampleInputPassword1">Message *</label>
                                <textarea name="message" id="meassage" cols="30" rows="5" className="w-100 outline-0 pl-4 size-18"></textarea>
                            </div>
                            <div className="w-100 d-flex justify-content-end mt-5">
                                <a href="/contact"><button type="submit" className="letter-spacing-3 px-5 py-3 position-relative overflow-hidden text-orange bg-white rounded-pill">SEND MESSAGE</button></a>
                            </div>
                        </form>

                    </div>
                    <div className="col-5">
                        <div className="col-12 row mb-5">
                            <i className="fas fa-map-marker-alt text-orange size-24 row-icon rounded-circle border border-dark text-center mr-5"></i>
                            <div className="detail">
                                <p className="size-24 m-0">Address</p>
                                <p className="size-18 m-0 font-weight-lighter">342 Sloane St, London, W1D 3NE</p>
                            </div>
                        </div>
                        <div className="col-12 row mb-5">
                            <i className="fas fas fa-envelope text-orange size-24 row-icon rounded-circle border border-dark text-center mr-5"></i>
                            <div className="detail">
                                <p className="size-24 m-0">Email</p>
                                <p className="size-18 m-0 font-weight-lighter">info@moviestar.co.uk</p>
                            </div>
                        </div>
                        <div className="col-12 row mb-5">
                            <i className="fas fa-phone-alt text-orange size-24 row-icon rounded-circle border border-dark text-center mr-5"></i>
                            <div className="detail">
                                <p className="size-24 m-0">Telephone</p>
                                <p className="size-18 m-0 font-weight-lighter">+44 0330 123 4567</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Message 
