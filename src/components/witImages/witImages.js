import React, { useState, useCallback } from "react"
import Gallery from './wit'
import Carousel, { Modal, ModalGateway } from "react-images"
// import style from "./../style/wit.module.scss"
import { photos } from "./witphotos"

function WitImages(props) {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div>
   
      <Gallery onClick={openLightbox} images = {props.images} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              zoomWidth={10}
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}
export default WitImages
