import React from "react";
import { Parallax } from "react-parallax";

class What extends React.Component {
  render() {
    return (
      <section className="what" id="what">
        <Parallax
          bgImage={require("../../../assets/images/background/our-team-background.jpg")}
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
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </p>
                  <h6>CREATIVE AND BETTER</h6>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </section>
    );
  }
}

export default What;
