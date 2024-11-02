/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Muhammad Raffey",
  title: "Applied Gen AI Developer, Web Developer",
  email: "muhammadraffey26@gmail.com",
  gitHub: "MuhammadRaffey",
  instagram: "muhammad._.raffey",
  linkedIn: "muhammad-raffey",
  medium: "",
  twitter: "MuhammadRaffey",
  youTube: "MuhammadRaffey-26",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
