import React, {useState} from 'react'

const Accordion = () => {
    const buttons = document.querySelectorAll('button')
    console.log(buttons)

    return (
        <section id="accordion" className="mt-5 py-5">
            <div className="container mb-5">
                <h3 className="section-title border-bottom py-4 text-orange position-relative mb-5 size-18">ACCORDION</h3>
                <div className="row responsive justify-content-between">
                    <div className="col-5 p-0">
                        <div className="accordion" id="accordionExample">
                            <div className="border-bottom">
                                <div className="card-header bg-transparent" id="headingOneLeft">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link text-decoration-none text-orange size-18 btn-block text-left position-relative" type="button" data-toggle="collapse" data-target="#oneLeft" aria-expanded="true" aria-controls="oneLeft">
                                        ASTRONOMY OR ASTROLOGY
                                        </button>
                                    </h2>
                                </div>
                                <div id="oneLeft" className="collapse show" aria-labelledby="headingOneLeft" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom">
                                <div className="card-header bg-transparent" id="headingTwoLeft">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link text-decoration-none text-black size-18 btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#twoLeft" aria-expanded="false" aria-controls="twoLeft">
                                        THE AMAZING HUBBLE
                                        </button>
                                    </h2>
                                </div>
                                <div id="twoLeft" className="collapse" aria-labelledby="headingTwoLeft" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom">
                                <div className="card-header bg-transparent" id="headingThreeLeft">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link text-decoration-none text-black size-18 btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#threeLeft" aria-expanded="false" aria-controls="threeLeft">
                                        VACATION HOME RENTAL SUCCESS
                                        </button>
                                    </h2>
                                </div>
                                <div id="threeLeft" className="collapse" aria-labelledby="headingThreeLeft" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
                                    </div>
                                </div>
                            </div>

                            <div className="border-bottom">
                                <div className="card-header bg-transparent" id="headingFourLeft">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link text-decoration-none text-black size-18 btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#fourLeft" aria-expanded="false" aria-controls="fourLeft">
                                        WHEN THE MORNING DAWNS
                                        </button>
                                    </h2>
                                </div>
                                <div id="fourLeft" className="collapse" aria-labelledby="headingFourLeft" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-5">
                    <div className="accordion" id="accordionExample">
                            <div className="border-bottom">
                                <div className="card-header" id="headingOneRight">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link text-decoration-none text-orange size-18 btn-block text-left position-relative" type="button" data-toggle="collapse" data-target="#oneRight" aria-expanded="true" aria-controls="oneRight">
                                        ASTRONOMY OR ASTROLOGY
                                        </button>
                                    </h2>
                                </div>
                                <div id="oneRight" className="collapse show" aria-labelledby="headingOneRight" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom">
                                <div className="card-header" id="headingTwoRight">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link text-decoration-none text-black size-18 btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#twoRight" aria-expanded="false" aria-controls="twoRight">
                                        THE AMAZING HUBBLE
                                        </button>
                                    </h2>
                                </div>
                                <div id="twoRight" className="collapse" aria-labelledby="headingTwoRight" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom">
                                <div className="card-header" id="headingThreeRight">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link text-decoration-none text-black size-18 btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#threeRight" aria-expanded="false" aria-controls="threeRight">
                                        VACATION HOME RENTAL SUCCESS
                                        </button>
                                    </h2>
                                </div>
                                <div id="threeRight" className="collapse" aria-labelledby="headingThreeRight" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
                                    </div>
                                </div>
                            </div>

                            <div className="border-bottom">
                                <div className="card-header" id="headingFourRight">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link text-decoration-none text-black size-18 btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#fourRight" aria-expanded="false" aria-controls="fourRight">
                                        WHEN THE MORNING DAWNS
                                        </button>
                                    </h2>
                                </div>
                                <div id="fourRight" className="collapse" aria-labelledby="headingFourRight" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accordion
