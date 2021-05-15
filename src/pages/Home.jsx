import React, { Component } from 'react'
import Carousel from '../components/homeComponents/Carousel'
import ComingSoon from '../components/homeComponents/ComingSoon'
import Contact from '../components/homeComponents/Contact'
import ListShow from '../components/homeComponents/ListShow'
import Newin from '../components/homeComponents/Newin'
import SoonSlider from '../components/homeComponents/SoonSlider'
import Header from '../components/homeComponents/Header'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Newin/>
                <ListShow />
                <ComingSoon />
                <SoonSlider />
                <Contact />
            </div>
        )
    }
}
