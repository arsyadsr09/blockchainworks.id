import React from "react";

import Header from "./components/header";
// section page
import Intro from "./components/index/intro";
import What from "./components/index/what";
import OurWork from "./components/index/our-work";
import Why from "./components/index/why";
import OurTeam from "./components/index/our-team";
import Location from "./components/index/location";
import ContactUs from "./components/index/contact-us";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="content">
          <Intro />
          <What />
          <OurWork />
          <Why />
          <OurTeam />
          <Location />
          <ContactUs />
        </main>
      </div>
    );
  }
}

export default Index;
