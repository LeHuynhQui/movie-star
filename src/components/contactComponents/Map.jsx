import React from 'react'

const Map = () => {
    return (
        <section id="map" className="w-100 position-relative">
           <div className="container container-map w-100 h-100 bg-white p-4 border-radius-3 position-absolute center-x">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4727672883846!2d106.70207861478613!3d10.775056692322398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f952850d29b%3A0xbb620c5531c58b1a!2sDong%20Khoi%20Street%20Photography!5e0!3m2!1svi!2s!4v1621146900304!5m2!1svi!2s" 
                style={{border: 0}} 
                allowFullScreen loading="lazy" 
                className="w-100 h-100 border-radius-3" />

           </div>

        </section>
    )
}

export default Map
