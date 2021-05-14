import React, { Component } from 'react'
import Carousel from '../components/homeComponents/Carousel'
import ComingSoon from '../components/homeComponents/ComingSoon'
import Contact from '../components/homeComponents/Contact'
import Footer from '../components/homeComponents/Footer'
import Header from '../components/homeComponents/Header'
import ListShow from '../components/homeComponents/ListShow'
import Newin from '../components/homeComponents/Newin'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Newin />
                <ListShow />
                <ComingSoon />
                <Contact />
                <Footer />
            </div>
        )
    }
}
