import React from "react";
import { Parallax } from "react-parallax";
import Gallery from "react-photo-gallery";

class OurGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [
        {
          src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
          width: 4,
          height: 3,
        },
        {
          src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
          width: 1,
          height: 1,
        },
        {
          src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
          width: 3,
          height: 4,
        },
        {
          src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
          width: 3,
          height: 4,
        },
        {
          src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
          width: 3,
          height: 4,
        },
        {
          src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
          width: 4,
          height: 3,
        },
        {
          src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
          width: 3,
          height: 4,
        },
        {
          src: "https://source.unsplash.com/PpOHJezOalU/800x599",
          width: 4,
          height: 3,
        },
        {
          src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
          width: 4,
          height: 3,
        },
      ],
    };
  }

  render() {
    const { photos } = this.state;
    return (
      <section className="gallery">
        <Parallax
          bgImage={process.env.PUBLIC_URL + "/images/background/gallery.jpg"}
          strength={350}
        >
          <div className="gallery-content" id="gallery">
            {/* <Gallery photos={photos} /> */}
          </div>
        </Parallax>
      </section>
    );
  }
}

export default OurGallery;
