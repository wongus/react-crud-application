import React from 'react'
import bannerVideo from '../video/banner.mp4'

export default function Herobanner() {
    return (

        <div class="hero is-large is-white has-background">
        <video id="vid" class="hero-background is-transparent" autoPlay muted loop src={bannerVideo}></video>
        <div class="hero-body">
            <div class="container has-text-centered">
                <h3 class="subtitle">
                    saving water, the smart way.
                </h3>
                <a class="button is-black is-rounded is-outlined" href="#pricing">Select a plan</a>
            </div>
        </div>
    </div>

    )
}
