import React from "react";
import OwlCarousel from "react-owl-carousel2";

const OwlOption = {
  stagePadding: 50,
  loop: true,
  nav: true,
  navText: [
    `<img src='${process.env.PUBLIC_URL + "/images/chevron-left.png"}'>`,
    `<img src='${process.env.PUBLIC_URL + "images/chevron-right.png"}'>`,
  ],
  autoWidth: true,
  dots: false,
};

class OurClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ourClient: [
        {
          name: "DIREKTORAT JENDERAL PAJAK",
          nameSpread: ["DIREKTORAT", "JENDERAL", "PAJAK"],
          image: `${process.env.PUBLIC_URL + "images/our-client/djp.png"}`,
          logo: `${process.env.PUBLIC_URL + "images/our-client/logo/djp.png"}`,
        },
        {
          name: "title",
        },
        {
          name: "TELKOM INDONESIA",
          nameSpread: ["TELKOM", "INDONESIA"],
          image: `${process.env.PUBLIC_URL + "images/our-client/telkom.png"}`,
          logo: `${process.env.PUBLIC_URL +
            "images/our-client/logo/telkom.png"}`,
        },
        {
          name: "BANK NEGARA INDONESIA",
          nameSpread: ["BANK", "NEGARA", "INDONESIA"],
          image: `${process.env.PUBLIC_URL + "images/our-client/bni.png"}`,
          logo: `${process.env.PUBLIC_URL + "images/our-client/logo/bni.png"}`,
        },
        {
          name: "INDONESIA STOCK EXCHANGE",
          nameSpread: ["INDONESIA", "STOCK", "EXCHANGE"],
          image: `${process.env.PUBLIC_URL + "images/our-client/idx.png"}`,
          logo: `${process.env.PUBLIC_URL + "images/our-client/logo/idx.png"}`,
        },
        {
          name: "BADAN WAKAF INDONESIA",
          nameSpread: ["BADAN", "WAKAF", "INDONESIA"],
          image: `${process.env.PUBLIC_URL + "images/our-client/bwi.png"}`,
          logo: `${process.env.PUBLIC_URL + "images/our-client/logo/bwi.png"}`,
        },
        {
          name: "TOKOIN",
          nameSpread: ["TOKOIN"],
          image: `${process.env.PUBLIC_URL + "images/our-client/tokoin.png"}`,
          logo: `${process.env.PUBLIC_URL +
            "images/our-client/logo/tokoin.png"}`,
        },
        {
          name: "INDOCO CRYPTO EXCHANGE",
          nameSpread: ["INDOCO", "CRYPTO", "EXCHANGE"],
          image: `${process.env.PUBLIC_URL + "images/our-client/indoco.png"}`,
          logo: `${process.env.PUBLIC_URL +
            "images/our-client/logo/indoco.png"}`,
        },
        {
          name: "HIMPUNAN PERS ONLINE INDONESIA",
          nameSpread: ["HIMPUNAN", "PERS", "ONLINE", "INDONESIA"],
          image: `${process.env.PUBLIC_URL + "images/our-client/hipoli.png"}`,
          logo: `${process.env.PUBLIC_URL +
            "images/our-client/logo/hipoli.png"}`,
        },
      ],
    };
  }
  render() {
    const { ourClient } = this.state;

    return (
      <section className="our-work" id="our-client">
        <div className="filter-white">
          <OwlCarousel ref="our-client" options={OwlOption}>
            {ourClient.map((item, i) => {
              if (item.name === "title") {
                return (
                  <div key={i} className="owl-panel-item title">
                    <div>
                      <h2>OUR</h2>
                      <h2>CLIENT.</h2>
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
                      backgroundImage: `url(${item.image})`,
                    }}
                    title={item.name}
                  >
                    <div className="plus">
                      <img
                        className="button-expand"
                        src={
                          process.env.PUBLIC_URL +
                          "images/expand-plus-white.png"
                        }
                        alt="expand-button"
                      />
                    </div>
                    <label className="foot">{item.name}</label>
                    <div className="banner">
                      <div className="top">
                        <img src={item.logo} alt={item.name} />
                      </div>
                      <div className="bottom">
                        <div>
                          {item.nameSpread.map((name, j) => {
                            return <h4 key={j}>{name}</h4>;
                          })}
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

export default OurClient;
