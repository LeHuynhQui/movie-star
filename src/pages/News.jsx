import React, { Component } from 'react'
import HeroNews from '../components/newsComponents/HeroNews'
import MainNews from '../components/newsComponents/MainNews'
import NewsHeader from '../components/newsComponents/NewsHeader'

export default class News extends Component {
    render() {
        return (
            <div>
                <NewsHeader />
                <HeroNews />
                <MainNews />
            </div>
        )
    }
}
