/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/tablebox.jpg";

const imageAltText = "desktop with all techstack of web development and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Personal Website 🎉",
    description:
      "This project is designed to provide a complete overview about me. ",
    url: "https://akanksha038.github.io/Portfolio/",
  },
  {
    title: "JavaScript Project for Beginners",
    description:
      "The Tic-Tac-Toe Game is a classic two-player game implemented using modern web technologies. The objective of this project is to create a simple, interactive, and fun game that demonstrates my skills in front-end development.",
    url: "https://github.com/Akanksha038/Tic-Tac-Toe-Game",
  },
  {
    title: "Random Password Generator Website",
    description:
      "The Random Password Generator is a web application designed to create secure and random passwords for users. Its purpose is to help users generate strong passwords that can protect their online accounts from unauthorized access.",
    url: "https://github.com/Akanksha038/Password-Generator",
  },
  {
    title: "Parallax-Website",
    description:
      "Parallax scrolling is a web design technique where background images move at a slower rate than foreground images, creating an illusion of depth and immersion as users scroll down a webpage.",
    url: "https://github.com/Akanksha038/Parallax-Website",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
