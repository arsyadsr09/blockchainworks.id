import React from "react";

import Header from "./components/header.jsx";
// section page
import Intro from "./components/home/intro.jsx";
import What from "./components/home/what.jsx";
import OurClient from "./components/home/our-client.jsx";
import Why from "./components/home/why.jsx";
import OurGallery from "./components/home/our-gallery.jsx";
import Location from "./components/home/location.jsx";
import ContactUs from "./components/home/contact-us.jsx";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="content">
          <Intro />
          <What />
          <OurClient />
          <Why />
          <OurGallery />
          <Location />
          <ContactUs />
        </main>
      </div>
    );
  }
}

export default Index;
