import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { pageTwoPhotos,  galleryPhotos } from "./photos";

import '../assets/css/pageOne.css'

export default function PageTwo() {
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

  const customStyles = {
    footerCount: () => ({
      fontSize: '3.0vmax',
    }),

    footerCaption: () => ({
      fontSize: '3.0vmax',
    })
  }

  return (
    <div className='pageMargins'>
        <Gallery photos={pageTwoPhotos} onClick={openLightbox}/>
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                styles={customStyles}
                currentIndex={currentImage + 6}
                views={galleryPhotos.map(x => ({
                  ...x,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
  )    
}