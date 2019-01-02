import React from "react";
import YouTube from "react-youtube";

const YouTubeOption = {
  playerVars: {
    modestbranding: 0,
    autoplay: 1,
    controls: 0,
    showinfo: 0,
    branding: 0,
    rel: 0,
    autohide: 0,
    start: 0,
    mute: 1,
    loop: 1
  }
};

class Why extends React.Component {
  render() {
    return (
      <section className="why" id="why">
        <YouTube
          className="yt-background"
          videoId="QJbpJQscn9E"
          opts={YouTubeOption}
        />
        <div className="why-content">
          <div className="container" style={{ height: "100%" }}>
            <div className="row" style={{ height: "100%" }}>
              <div className="col-6 no-margin border-right">
                <div className="title-why">
                  <div>
                    <h1>WHY MUST</h1>
                    <h1>INDONESIA</h1>
                    <h1>CREATIVE</h1>
                  </div>
                </div>
              </div>
              <div className="col-6 padding-p">
                <div>
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
                  <h6>CREATIVE AND BETTER</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Why;
