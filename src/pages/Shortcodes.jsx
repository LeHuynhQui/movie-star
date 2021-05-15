import React, { Component } from 'react'
import BoxIcons from '../components/shortCodesComponents/BoxIcons'
import NewsCarousel from '../components/shortCodesComponents/NewsCarousel'
import RowIcons from '../components/shortCodesComponents/RowIcons'
import ShortcodeHero from '../components/shortCodesComponents/ShortcodeHero'
import HeaderShortcodes from '../components/shortCodesComponents/HeaderShortcodes'
import Tabs from '../components/shortCodesComponents/Tabs'
import Accordion from '../components/shortCodesComponents/Accordion'


export default class Shortcodes extends Component {
    render() {
        return (
            <div>
                <HeaderShortcodes />
                <ShortcodeHero />
                <BoxIcons />
                <RowIcons />
                <NewsCarousel />
                <Tabs />
                <Accordion />
            </div>
        )
    }
}
