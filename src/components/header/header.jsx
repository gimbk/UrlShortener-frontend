import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header id="header" className="fixed-top d-flex align-items-center ">
                <div className="container d-flex align-items-center justify-content-between">

                    <h1 className="logo"><a href="index.html">ShortnGo</a></h1>

                </div>
            </header>
        )
    }
}

export default Header