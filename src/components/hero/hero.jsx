import React, { Component } from 'react'

export class Hero extends Component {
    render() {
        return (
            <section id="hero" className="d-flex justify-cntent-center align-items-center">
                <div id="heroCarousel" data-bs-interval="5000" className="container carousel carousel-fade" data-bs-ride="carousel">

                    <div className="carousel-item active" style={{ marginTop: "60px" }}>
                        <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">Welcome to <span>ShortnGo</span></h2>
                            <p className="animate__animated animate__fadeInUp">
                                Le site de raccourcissement d'URL ShortnGo
                                simplifie les liens longs en générant
                                des versions courtes et conviviales.
                                Il permet aux utilisateurs de partager
                                rapidement des liens plus gérables
                            </p>
                            {/* <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a> */}
                        </div>
                    </div>


                </div>
            </section>
        )
    }
}

export default Hero