import React from 'react'
import {LuSend} from "react-icons/lu";

export default function Contact() {
  return (
    <section id='contact'>
        <div className="container">
            <h2>Hire Me</h2>
            <form action="/" method='POST'>
                <div>
                    <input type="text" name="name" placeholder='Example: Jane '/>
                </div>
                <div>
                    <input type="email" name="email" placeholder='Example: jane@gmail.com'/>
                </div>
                <div>
                    <textarea name="info" placeholder='Example: Hello,'></textarea>
                </div>
                <div>
                    <button type="submit">CONTACT <LuSend/></button>
                </div>
            </form>
        </div>
    </section>
  )
}
