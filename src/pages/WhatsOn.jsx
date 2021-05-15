import React, { Component } from 'react'
import Contact from '../components/homeComponents/Contact'
import HeroWhatson from '../components/whatsonComponents/HeroWhatson'
import WhatsonListShow from '../components/whatsonComponents/WhatsonListShow'
import HeaderWhatsOn from '../components/whatsonComponents/HeaderWhatsOn'

export default class WhatsOn extends Component {
    render() {
        return (
            <div>
                <HeaderWhatsOn />
                <HeroWhatson />
                <WhatsonListShow />
                <Contact />
            </div>
        )
    }
}
