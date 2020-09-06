import React from 'react'
import bannerVideo from '../video/banner.mp4'

export default function Herobanner() {
    return (

    <div className="hero is-large is-white has-background whatever  ">
        <video id="vid" className="hero-background is-transparent " autoPlay muted loop src={bannerVideo}></video>
        <div className="hero-body has-background-black test">
            <div className="container title ">
                <h1 className="title is-1 has-text-white">Niggatech</h1>
                <h1 className=" subtitle is-size-3 has-text-white" >
                    Welcome to my personal portfolio website
                </h1>
                <a className="button is-white is-outlined is-white is-medium has-text-white" href="#projects">Projects</a>
            </div>
        </div>
    </div>

    )
}
