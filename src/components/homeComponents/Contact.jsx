import React, { useEffect } from 'react'
import Aos from 'aos'


const Contact = () => {
    useEffect(() => {
        Aos.init({duration:500})
    }, [])

    return (
        <section id="contact" className="py-5 border-top">
            <div className="container py-5">
                <div className="row flex-column align-items-center justify-content-center">
                    <p className="size-24 text-black">Need help? Contact our support team on</p>
                    <h2 data-aos= "zoom-in-up" data-aos-delay="1000" className="size-34 text-orange font-weight-bold">0330 123 4567</h2>
                </div>
            </div>
        </section>
    )
}

export default Contact
