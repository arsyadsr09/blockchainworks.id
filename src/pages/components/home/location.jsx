import React from "react";
import { Parallax } from "react-parallax";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="location" id="location">
        <Parallax
          bgImage={process.env.PUBLIC_URL + "/images/location/mandiri.jpg"}
          strength={350}
        >
          <div className="location-content">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12 flex-fix">
                <div className="square">
                  <div>
                    <h2>OUR</h2>
                    <h2>OFFICE.</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12 flex-content">
                <div className="item-loc">
                  <h1>JAKARTA</h1>
                  <p className="address">
                    Mandiri Tower I 16th Floor (IDX Inc)
                  </p>
                  <p className="address">Jl. Jendral Sudirman Kav. 54-55</p>
                  <p className="address">Jakarta - 12190</p>
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
