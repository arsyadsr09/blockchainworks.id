import React from "react";
import Particles from "react-particles-js";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      <section className="intro">
        <Particles
          params={{
            particles: {
              number: {
                value: 150
              },
              size: {
                value: 1
              }
            }
          }}
          width="100vw"
          height="100vh"
        />
        <div className="intro-content">
          <div className="text-intro">
            <h1 className="show-h1">A DIGITAL AGENCY</h1>
            <h1 className="show-h1">THAT BUILDS</h1>
            <h1 className="show-h1">
              <Typed
                className="text-marquee"
                strings={["WEB APPS", "GAME APPS", "IOS APPS"]}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </h1>
            <h1 className="show-h1">INNOVATIVELY</h1>
            <h1 className="show-h1">USEFUL</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
