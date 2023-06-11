import React from 'react'
import Image from "../images/about-img.jpg";
import {LuSend} from "react-icons/lu";

export default function About() {
  return (
    <section id='about'>
        <div className="container">
            <h2>About Me</h2>
            <div className="info">
                <div className="image-holder">
                    <img src={Image} alt="About" />
                </div>

                <div className='about'>
                    <h3>Samah</h3>
                    <p>I'm Samah, a future Frontend Developer.Currently based in Norway and i'm learning Javascript, React.js HTML, CSS and Wordpress studied at the Noroff School of technology and digital media.

languages and tools: Java, React.js, HTML, CSS framwork, Wordpress.</p>
                    <a href='#contact'>CONTACT <LuSend/></a>
                </div>
            </div>
        </div>
    </section>
  )
}
