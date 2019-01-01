import React from "react";
import { Parallax } from "react-parallax";

//images
import ExpandPlus from "../../../assets/images/expand-plus.png";

import Amsterdam from "../../../assets/images/location/amsterdam.jpg";
import Belo from "../../../assets/images/location/belo.jpg";
import Jakarta from "../../../assets/images/location/jakarta.jpg";
import London from "../../../assets/images/location/london.jpg";
import Oakland from "../../../assets/images/location/oakland.jpg";
import Vienna from "../../../assets/images/location/vienna.jpg";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.onItemLocClicked = this.onItemLocClicked.bind(this);
    this.onItemLocMouseLeave = this.onItemLocMouseLeave.bind(this);
    this.state = {
      nickLoc: "",
      background: "",
      location: [
        {
          nickname: "JKT",
          address:
            "WIMO Building 3rd fl, No., Jl. Kemang I No.7, Jakarta Selatan, DKI Jakarta",
          background: Jakarta
        },
        {
          nickname: "AMS",
          address: "Linnaeusstraat 2C, 1092 CK Amsterdam, Netherlands",
          background: Amsterdam
        },
        {
          nickname: "LKC",
          address: "34b York Way, Kings Cross, London N1 9AB, Great Britain",
          background: London
        },
        {
          nickname: "BEL",
          address:
            "Av. Getúlio Vargas, 1492 - Savassi, Belo Horizonte - MG, 30112-021, Brasil",
          background: Belo
        },
        {
          nickname: "VI",
          address: "Lindengasse 56, 1070 Wien, Austria",
          background: Vienna
        },
        {
          nickname: "OA",
          address: "2323 Broadway, Oakland, CA 94612, USA",
          background: Oakland
        }
      ]
    };
  }

  componentWillMount() {
    this.setState({
      background: this.state.location[0].background
    });
  }

  onItemLocClicked = (item, e) => {
    e.preventDefault();
    if (e.currentTarget.classList[1] === "selected") {
      e.currentTarget.classList.remove("selected");
      this.setState({
        nickLoc: ""
      });
    } else {
      e.currentTarget.classList.add("selected");
      this.setState({
        nickLoc: item.nickname,
        background: item.background
      });
    }
  };

  onItemLocMouseLeave = (item, e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("selected");
    this.setState({
      nickLoc: ""
    });
  };

  render() {
    const { nickLoc, background, location } = this.state;
    return (
      <section className="location">
        <Parallax bgImage={background} strength={350}>
          <div className="location-content">
            <div className="container">
              <div className="row">
                <div className="col-5 flex-fix">
                  <div className="square">
                    <div>
                      <h2>OUR {nickLoc}</h2>
                      <h2>{nickLoc.length > 1 ? "OFFICE." : "OFFICES."}</h2>
                    </div>
                  </div>
                </div>
                <div className="col-7">
                  {location.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="item-loc"
                        onClick={e => this.onItemLocClicked(item, e)}
                        onMouseLeave={e => this.onItemLocMouseLeave(item, e)}
                      >
                        <div className="left">
                          <img
                            src={ExpandPlus}
                            className="expand-plus mask"
                            alt="Expand Plus"
                          />
                          <div className="layer">
                            <i className="fa fa-times" />
                          </div>
                        </div>
                        <div className="right">
                          <h1 className="mask">{item.nickname}</h1>
                          <div className="layer">
                            <p className="address">{item.address}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </section>
    );
  }
}

export default Location;
