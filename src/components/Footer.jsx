import React from "react";
import {LuFacebook, LuInstagram, LuLinkedin} from 'react-icons/lu'
export default function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div id="socials">
          <a href="#facebook">
            <LuFacebook/>
          </a>
          <a href="#instagram">
            <LuInstagram />
          </a>
          <a href="#linkedin">
            <LuLinkedin />
          </a>
        </div>
        <p>&copy; All rights reserved</p>
      </div>
    </section>
  );
}
