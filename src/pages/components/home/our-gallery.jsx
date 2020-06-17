import React, { useState, useCallback } from "react";
// import { Parallax } from "react-parallax";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

function OurGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/1.jpeg",
      width: 4,
      height: 3,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/2.jpeg",
      width: 5,
      height: 3,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/3.jpeg",
      width: 4,
      height: 3,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/6.jpeg",
      width: 4,
      height: 3,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/4.jpeg",
      width: 4,
      height: 3,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/5.jpeg",
      width: 4,
      height: 3,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/7.jpeg",
      width: 2.5,
      height: 3,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/8.jpeg",
      width: 1.8,
      height: 2,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/9.jpeg",
      width: 4,
      height: 3,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/10.jpeg",
      width: 1,
      height: 1,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/11.jpeg",
      width: 1,
      height: 2,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/12.jpeg",
      width: 2.5,
      height: 5,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/13.jpeg",
      width: 3.8,
      height: 3,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/14.jpeg",
      width: 4,
      height: 2.6,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/15.jpeg",
      width: 3,
      height: 2.6,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/16.jpeg",
      width: 3,
      height: 2.3,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/17.jpeg",
      width: 0.8,
      height: 1,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/18.jpeg",
      width: 4.5,
      height: 3,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/19.jpeg",
      width: 4.5,
      height: 3,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/20.jpeg",
      width: 1.5,
      height: 2,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/21.jpeg",
      width: 2,
      height: 1,
    },
    {
      src: process.env.PUBLIC_URL + "/images/our-client/meet-up/22.jpeg",
      width: 1.2,
      height: 2,
    },
  ];

  return (
    <section className="gallery">
      {/* <Parallax
        bgImage={process.env.PUBLIC_URL + "/images/background/gallery.jpg"}
        strength={350}
      > */}
      <div className="gallery-content" id="gallery">
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
      {/* </Parallax> */}
    </section>
  );
}

export default OurGallery;
