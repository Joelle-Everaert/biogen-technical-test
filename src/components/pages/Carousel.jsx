import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
}

const GeneralCarousel = ({ title, children }) => {
  return (
    <>
      {title}
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        renderButtonGroupOutside={false}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        {children}
      </Carousel>
    </>
  )
}

export default GeneralCarousel
