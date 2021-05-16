import React, { Component } from 'react'
import ContactHeader from '../components/contactComponents/ContactHeader'
import HeroContact from '../components/contactComponents/HeroContact'
import Map from '../components/contactComponents/Map'
import Message from '../components/contactComponents/Message'
import Contact from '../components/homeComponents/Contact'

export default class ContactPage extends Component {
    render() {
        return (
            <div>
                <ContactHeader />
                <HeroContact />
                <Map />
                <Message />
                <Contact />
            </div>
        )
    }
}
