/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/profile-pic.png";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center ">
      <div id="home" className="flex flex-row mt-24 ml-10 min-h">
        <img
          className="flex flex-row  h-40 w-40 rounded-full justify-center mr-5"
          src={image}
          alt="Muhammad Raffey"
        />
        <div className="flex flex-col">
          <h1>{name}</h1>
          <h2>{title}</h2>
          <img src={arrowSvg} alt="Down arrow" className="w-16 h-16  mt-4 " />
        </div>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
