import React from 'react'
import bannerVideo from '../video/banner.mp4'

export default function Herobanner() {
    return (

        <div className="hero is-large is-white has-background">
        <video id="vid" className="hero-background is-transparent" autoPlay muted loop src={bannerVideo}></video>
        <div className="hero-body">
            <div className="container has-text-centered">
                <h3 className="subtitle">
                    saving water, the smart way.
                </h3>
                <a className="button is-black is-rounded is-outlined" href="#pricing">Select a plan</a>
            </div>
        </div>
    </div>

    )
}
