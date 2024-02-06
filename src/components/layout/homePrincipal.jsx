import React, { Component } from 'react'
import Topbar from '../topbar/topbar'
import Header from '../header/header'
import Hero from '../hero/hero'
import Main from '../main/main'

export class HomePrincipal extends Component {
    render() {
        return (
            <>
                <Topbar />
                <Header />
                <Hero />
                <Main />
            </>
        )
    }
}

export default HomePrincipal