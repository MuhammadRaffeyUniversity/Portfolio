/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a passionate Applied Gen AI Developer and Web Developer studying in University of Lahore with a focus on user experience and inclusive design. I am always looking for new ways to make tech accessible to all.";

const skillsList = [
  "Web Development",
  "Python",
  "OpenAI",
  "Applied Generative AI",
  "NextJS",
  "TyepScipt",
];

const detailOrQuote =
  "I am passionate about solving problems and creating new things. I am always looking for new ways to make tech accessible to all.";

const About = () => {
  return (
    <section className="" id="about">
      <div
        style={{
          backgroundColor: "black",
          width: "50%",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2 className="font-semibold mb-3">About Myself</h2>
        <p className="text-white text-2xl font-medium">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "3rem 3rem",
            gap: "5rem",
            color: "white",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill} className="list-disc custom-marker ">
              {skill}
            </li>
          ))}
        </ul>
        <hr />
        <p className="text-white text-2xl font-medium">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
