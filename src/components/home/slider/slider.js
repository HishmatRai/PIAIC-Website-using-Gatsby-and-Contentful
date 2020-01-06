import React from "react"
import AOS from 'aos';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import {
  MDBCardBody,
  MDBRow,
  MDBCol,
} from "mdbreact"
import ImagesHome from "./imagesHome"
import "./slider.scss"
import 'aos/dist/aos.css';
AOS.init();
export default class Posts extends React.Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    }
    return (
      <div style={{ width: "100%" }}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {this.props.sliderData.map((val, i) => (
            <MDBRow>
              <MDBCol xl={12}>
                <div>
                  <MDBCardBody style={{ backgroundColor: "#00bf9a" }}>
                  <div data-aos="zoom-out-right">
                    <h1 className="sliderHeading">Images</h1>
                    </div>

                    <ImagesHome data={val} />
                  </MDBCardBody>
                </div>
              </MDBCol>
            </MDBRow>
          ))}
        </Carousel>
      </div>
    )
  }
}
