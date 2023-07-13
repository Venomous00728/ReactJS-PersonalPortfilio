import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import "../../styles/imageGallery.css";

const ImageGallery = ({ photos }) => {
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

  const renderImage = useCallback(
    ({ index, left, top, key, photo }) => (
      <img
        key={key}
        style={{ objectFit: "cover", margin: "0.1rem", cursor: "pointer" }}
        className="gallery-images"
        src={photo.src}
        alt={photo.title}
        width={photo.width}
        height={photo.height}
        onClick={(e) => openLightbox(e, { photo, index })}
      />
    ),
    [openLightbox]
  );

  return (
    <div>
      <Gallery photos={photos} renderImage={renderImage} />
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
  );
};

export default ImageGallery;
