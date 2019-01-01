import React from "react";
import OwlCarousel from "react-owl-carousel2";

//images
import ChevronLeft from "../../../assets/images/chevron-left.png";
import ChevronRight from "../../../assets/images/chevron-right.png";
import ExpandWhite from "../../../assets/images/expand-plus-white.png";
import Canon from "../../../assets/images/our-work/canon.jpg";
import NationalPark from "../../../assets/images/our-work/nationalpark.jpg";
import Nike from "../../../assets/images/our-work/nike.jpg";
import Corvette from "../../../assets/images/our-work/corvette.jpg";
import Rolex from "../../../assets/images/our-work/rolex.jpg";
import Dolby from "../../../assets/images/our-work/dolby.jpg";

const OwlOption = {
  stagePadding: 50,
  loop: true,
  nav: true,
  navText: [`<img src='${ChevronLeft}'>`, `<img src='${ChevronRight}'>`],
  autoWidth: true,
  dots: false
};

class OurWork extends React.Component {
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
    const { ourWork } = this.state;

    return (
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
    );
  }
}

export default OurWork;
