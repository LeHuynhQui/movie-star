import React from 'react'

const Tabs = () => {
    return (
        <section id="tabs" className="mt-5 py-5">
            <div className="container mb-5">
                <h3 className="section-title border-bottom py-4 text-orange position-relative mb-5 size-18">TABS</h3>
                <div className="row justify-content-between">
                    <div className="col-5">
                        <div>
                            <ul className="nav nav-pills mb-3 border-bottom mb-5" id="pills-tab" role="tablist">
                                <li className="nav-item hover-border-effect" role="presentation">
                                    <a className="nav-link text-black px-5 position-relative bg-transparent py-3 size-18 active" id="tab-number-1" data-toggle="pill" href="#tab-1" role="tab" aria-controls="1" aria-selected="true">TAB 1</a>
                                </li>
                                <li className="nav-item hover-border-effect" role="presentation">
                                    <a className="nav-link text-black px-5 position-relative bg-transparent py-3 size-18" id="tab-number-2" data-toggle="pill" href="#tab-2" role="tab" aria-controls="2" aria-selected="false">TAB 2</a>
                                </li>
                                <li className="nav-item hover-border-effect" role="presentation">
                                    <a className="nav-link text-black px-5 position-relative bg-transparent py-3 size-18" id="tab-number-3" data-toggle="pill" href="#tab-3" role="tab" aria-controls="3" aria-selected="false">TAB 3</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-number-1">
                                    <p className="mb-5">Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                </div>
                                <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-number-2">
                                    <p className="mb-5">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                    <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
                                </div>
                                <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-number-3">
                                    <p className="mb-5">Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-5">
                        <div>
                            <ul className="nav nav-pills mb-3 border-bottom mb-5 rounded-pill bg-gray" id="pills-tab" role="tablist">
                                <li className="nav-item hover-border-effect" role="presentation">
                                    <a className="nav-link nav-link-right text-black px-5 rounded-pill position-relative py-3 size-18 active" id="tab-number-1-right" data-toggle="pill" href="#tab-1-right" role="tab" aria-controls="1-right" aria-selected="true">TAB 1</a>
                                </li>
                                <li className="nav-item hover-border-effect" role="presentation">
                                    <a className="nav-link nav-link-right text-black px-5 rounded-pill position-relative py-3 size-18" id="tab-number-2-right" data-toggle="pill" href="#tab-2-right" role="tab" aria-controls="2-right" aria-selected="false">TAB 2</a>
                                </li>
                                <li className="nav-item hover-border-effect" role="presentation">
                                    <a className="nav-link nav-link-right text-black px-5 rounded-pill position-relative py-3 size-18" id="tab-number-3-right" data-toggle="pill" href="#tab-3-right" role="tab" aria-controls="3-right" aria-selected="false">TAB 3</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab-1-right" role="tabpanel" aria-labelledby="tab-number-1-right">
                                    <p className="mb-5">Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                </div>
                                <div className="tab-pane fade" id="tab-2-right" role="tabpanel" aria-labelledby="tab-number-2-right">
                                    <p className="mb-5">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                    <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
                                </div>
                                <div className="tab-pane fade" id="tab-3-right" role="tabpanel" aria-labelledby="tab-number-3-right">
                                    <p className="mb-5">Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tabs
