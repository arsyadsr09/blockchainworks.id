import React from "react";
import Header from "./components/header";
import { Parallax } from "react-parallax";
import Typed from "react-typed";
import OwlCarousel from "react-owl-carousel2";
import Particles from "react-particles-js";

import ChevronLeft from "../assets/images/chevron-left.png";
import ChevronRight from "../assets/images/chevron-right.png";
import ExpandWhite from "../assets/images/expand-plus-white.png";
import Canon from "../assets/images/our-work/canon.jpg";
import NationalPark from "../assets/images/our-work/nationalpark.jpg";
import Nike from "../assets/images/our-work/nike.jpg";
import Corvette from "../assets/images/our-work/corvette.jpg";
import Rolex from "../assets/images/our-work/rolex.jpg";
import Dolby from "../assets/images/our-work/dolby.jpg";

const OwlOption = {
  stagePadding: 50,
  loop: true,
  nav: true,
  navText: [`<img src='${ChevronLeft}'>`, `<img src='${ChevronRight}'>`],
  autoWidth: true,
  dots: false
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ourWork: [
        {
          name: "NATIONAL PARK",
          image: NationalPark
        },
        {
          name: "title"
        },
        {
          name: "CANON",
          image: Canon
        },
        {
          name: "CORVETTE",
          image: Corvette
        },
        {
          name: "ROLEX",
          image: Rolex
        },
        {
          name: "NIKE",
          image: Nike
        },
        {
          name: "DOLBY",
          image: Dolby
        }
      ]
    };
  }
  render() {
    let { ourWork } = this.state;
    return (
      <div>
        <Header />
        <main className="content">
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
            {/* </Parallax> */}
          </section>
          <section className="what">
            <Parallax
              bgImage={require("../assets/images/background/our-team-background.jpg")}
              strength={350}
            >
              <div className="what-content">
                <div className="container">
                  <div className="row">
                    <div className="col-6 no-margin border-right">
                      <div className="title-what">
                        <div>
                          <h1>WHAT IS</h1>
                          <h1>INDONESIA</h1>
                          <h1>CREATIVE</h1>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 padding-p">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English.
                      </p>
                      <h6>CREATIVE AND BETTER</h6>
                    </div>
                  </div>
                </div>
              </div>
            </Parallax>
          </section>
          <section className="our-work">
            <div className="filter-white">
              <OwlCarousel ref="our-work" options={OwlOption}>
                {ourWork.map((item, i) => {
                  if (item.name === "title") {
                    return (
                      <div key={i} className="owl-panel-item title">
                        <div>
                          <h2>OUR</h2>
                          <h2>WORK.</h2>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                      <a
                        key={i}
                        href={`#${item.name.toLowerCase()}`}
                        className="owl-panel-item regular"
                        style={{
                          backgroundImage: `url(${item.image})`
                        }}
                        title={item.name}
                      >
                        <div className="plus">
                          <img
                            className="button-expand"
                            src={ExpandWhite}
                            alt="expand-button"
                          />
                        </div>
                        <label className="foot">{item.name}</label>
                        <div className="banner">
                          <div className="top">
                            <label>
                              {item.name} &nbsp;
                              <i className="fa fa-chevron-right" />
                            </label>
                          </div>
                          <div className="bottom">
                            <div>
                              <h2>SEE</h2>
                              <h2>THE</h2>
                              <h2>WORK</h2>
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  }
                })}
              </OwlCarousel>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Index;
