import React from "react";
import { LuActivity, LuAirVent, LuAlignEndHorizontal } from "react-icons/lu";

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2>What I Offer</h2>
        <div className="info">
          <div className="card">
            <span>
              <LuActivity />
            </span>
            <h6>Web Designer</h6>
            <a href="#more">MORE</a>
          </div>
          <div className="card">
            <span>
              <LuAirVent />
            </span>
            <h6>UI/UX Designer</h6>
            <a href="#more">MORE</a>
          </div>
          <div className="card">
            <span>
              <LuAlignEndHorizontal />
            </span>
            <h6>Logo Designer</h6>
            <a href="#more">MORE</a>
          </div>
        </div>
      </div>
    </section>
  );
}
