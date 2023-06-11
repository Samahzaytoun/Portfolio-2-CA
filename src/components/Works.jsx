import React from "react";
import Work1 from "../images/work-1.png.jpeg";
import Work2 from "../images/wor-2.jpeg";
import Work3 from "../images/work-3.jpeg";
import Work4 from "../images/work-4.jpeg";
import Work5 from "../images/work-5.png";
import Work6 from "../images/work-6.jpeg";
export default function Works() {
  const works = [
    {
      img: Work1,
      link: "https://github.com/Samahzaytoun/Semester-project-2",
    },
    {
      img: Work2,
      link: "https://github.com/Samahzaytoun/JavaScript-Frameworks-CA",
    },
    {
      img: Work3,
      link: "https://github.com/Samahzaytoun/Project-Exam-2",
    },
    {
      img: Work4,
      link: "https://github.com/Samahzaytoun",
    },
    {
      img: Work5,
      link: "https://github.com/Samahzaytoun",
    },
    {
      img: Work6,
      link: "https://dapper-raindrop-a48519.netlify.app/",
    },
  ];
  return (
    <section id="works">
      <div className="container">
        <h2>Recent Works</h2>
        <div className="info">
          {works.map((work, index) => (
            <div className="card" key={"index-" + index}>
              <div className="image-holder">
                <img src={work.img} alt="Image" />
              </div>
              <h6>Work - {index + 1}</h6>
              <a target="_blank" href={work.link ?? "#more"}>MORE</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
