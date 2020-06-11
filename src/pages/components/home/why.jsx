import React from "react";
import { Parallax } from "react-parallax";
// import YouTube from "react-youtube";

const YouTubeOption = {
  playerVars: {
    modestbranding: 0,
    autoplay: 0,
    controls: 0,
    showinfo: 0,
    branding: 0,
    rel: 0,
    autohide: 0,
    start: 0,
    mute: 1,
    loop: 1,
  },
};

class Why extends React.Component {
  render() {
    return (
      <section className="why" id="why">
        {/* <YouTube
          className="yt-background"
          videoId="QJbpJQscn9E"
          opts={YouTubeOption}
        /> */}
        <Parallax
          bgImage={
            process.env.PUBLIC_URL + "/images/background/blockchain-getty.jpg"
          }
          strength={350}
        >
          <div className="why-content">
            <div className="container" style={{ height: "100%" }}>
              <div className="row" style={{ height: "100%" }}>
                <div className="col-6 no-margin border-right">
                  <div className="title-why">
                    <div>
                      <h1>WHY MUST</h1>
                      <h1>BLOCKCHAIN</h1>
                      <h1>WORKS</h1>
                    </div>
                  </div>
                </div>
                <div className="col-6 padding-p">
                  <div>
                    <p>
                      Blockchain brings trust, accountability, and transparency
                      to digital transactions. All transactions that exist on a
                      blockchain are shared and distributed among a network of
                      peer-to-peer computers. Transactions are encrypted before
                      they are stored and shared.
                    </p>
                    <p>
                      As well as the data itself, each block also contains a
                      record of when that block was created or edited, which
                      makes it very useful for maintaining a detailed system of
                      record that cannot be corrupted or lost. Because the whole
                      blockchain is duplicated across many computers, any user
                      can view the entire blockchain.
                    </p>
                    <h6>SAFE AND SECURE</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </section>
    );
  }
}

export default Why;
