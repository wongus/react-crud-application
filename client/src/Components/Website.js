import React from 'react'

export default function Website() {
    return (
<div className="wrapper">
    <nav className="navbar is-fixed-top is-white" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
                <b style={{fontSize: '20px', fontFamily: 'Nunito'}}>Flant</b>
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu has-text-black">
            <div className="navbar-end">
                <a className="navbar-item">
                    Home
                </a>

                <a className="navbar-item">
                    Documentation
                </a>

            </div>
        </div>
    </nav>

    <div className="hero is-fullheight is-primary has-shadow has-background">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title">
                    <img src={require("../images/logo.svg")} style={{width: '200px'}}></img>
                </h1>
                <h3 className="subtitle has-text-black">
                    The new, smart, way of drinking water.
                </h3>
                <a className="button is-success is-rounded has-shadow has-text-white" href="#what">What?</a>
            </div>
        </div>
    </div>

    <div className="section has-background has-shadow" id="what">
        <div className="is-overlay is-overlay-video">
            <video className="section-background is-transparent video" autoplay muted loop id="video">
                <source src={require('../images/video2.webm')} type="video/webm"></source>
            </video>
        </div>
        <div className="container has-text-centered">
            <div className="columns is-centered">
                <div className="column is-three-fifths">

                    <div className="card">
                        <div className="card-content">
                            <div className="content has-text-centered">
                                <h2 className="title has-text-black">What in the world is a Flant?</h2>
                                <hr/>
                                <p className="subtitle has-text-black">Flant is your personal digital plant that you can
                                    keep
                                    healthy by
                                    drinking enough water yourself using our Flant smart bottle or entering the amount
                                    you just
                                    drank in
                                    the
                                    app.</p>
                                <p className="subtitle has-text-black">Every time you drink some water, the bottle will keep
                                    track
                                    of
                                    your
                                    water
                                    intake allowing your virtual plant to grow. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="section" id="pricing">
        <div className="container">
            <div className="columns">
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <div className="is-overlay">
                            </div>
                            <figure className="image is-4by3">
                                <img src={require('../images/image1.jpg')}></img>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content has-text-centered">
                                <h1 className="title is-pricing has-text-black">$ 0.00</h1>
                                <hr/>
                                <p className="title has-text-black">The starterpack</p>
                                <p className="subtitle has-text-black">Manually enter the amount of water you drink.</p>
                                <hr/>
                                <a className="button is-success is-rounded has-text-white has-shadow">Buy now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card is-primary">
                        <div className="card-image">
                            <div className="is-overlay">
                            </div>
                            <figure className="image is-4by3">
                                <img src={require("../images/image 2.jpg")} alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content has-text-centered">
                                <div className="title is-pricing has-text-black">$ 39.99</div>
                                <hr/>
                                <p className="title has-text-black">The fanatic</p>
                                <p className="subtitle has-text-black">Smart bottle that keeps track of your water drinking
                                    habits for you.
                                </p>
                                <hr/>
                                <a className="button is-success is-rounded has-text-white has-shadow">Buy now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card is-primary">
                        <div className="card-image">
                            <div className="is-overlay">
                            </div>
                            <figure className="image is-4by3">
                                <img src={require("../images/image 3.jpg")} alt="Placeholder image"></img>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content has-text-centered">
                                <div className="title is-pricing has-text-black">$ 49.99</div>
                                <hr/>
                                <p className="title has-text-black">The superfan</p>
                                <p className="subtitle has-text-black">Fanatic's smart bottle, Exclusive cosmetics for your
                                    plant and a
                                    +20% coin multiplier</p>
                                <hr/>
                                <a className="button is-success is-rounded has-text-white has-shadow">Buy now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )

    // document.getElementByClassName('video').play();
}

