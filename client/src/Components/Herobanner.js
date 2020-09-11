import React, {useState} from 'react'
import bannerVideo from '../video/banner.mp4'
import Modal from './Modal'


export default function Herobanner() {
const [modalStatus, setModalStatus] = useState(true);

    
const toggleModal = () => {
    setModalStatus(!modalStatus);
  };

    return (
        <div className="hero is-fullheight has-background">
            <video id="vid" className="hero-background is-transparent " autoPlay muted loop src={bannerVideo}></video>
            <div className="hero-head has-text-right has-background-black ">
                <a onClick={toggleModal} className="button is-outlined is-white mr-5 mt-4 bottom-border-white">Log in</a>
            </div>
            
            <div className="hero-body has-background-black">
                <div className="container title ">
                    <h1 className="title is-1 has-text-white">lolitech</h1>
                    <h1 className=" subtitle is-size-3 has-text-white" >
                        Welcome to my personal portfolio website
                </h1>
                    <a className="button is-white is-outlined is-white is-medium has-text-white" href="#projects">Projects</a>
                </div>
            </div>

            <Modal modalStatus={modalStatus} setModalStatus={setModalStatus} toggleModal={toggleModal}/>
        </div>

    )
}
