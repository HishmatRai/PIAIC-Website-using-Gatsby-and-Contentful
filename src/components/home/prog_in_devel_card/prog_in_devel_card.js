import AOS from 'aos';
import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Style from "./prog_in_devel_card.module.scss"
import './chech.css'
import {
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
} from "mdbreact"
import 'aos/dist/aos.css';
AOS.init();
export default class Posts extends React.Component {
  render() {
    
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3.5,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 785 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 785, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    }
    return (
      <div
      className={Style.maindiv}
      style={{
        width: "100%",
        margin: "0 auto",
        padding: "30px 0px 0px 66px ",
      }}
      >
        <div data-aos="zoom-in-right">
<span className={Style.line}>piaic</span>
</div>
<br />
<div data-aos="zoom-in-left">
        <p className={Style.ProgransHeading1}>{this.props.developmenttitle}</p>
        </div>
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
          {this.props.developmentdetail.map((v, i) => {
            // console.log(v)
            return (
              <MDBRow>
                <MDBCol lg="12">
                <div data-aos="fade-up"
     data-aos-duration="3000">

                  <div            
                    className={v.class}
                    >

                    
                    <MDBCardBody className={Style.bodyMdb}>
                      <MDBCardTitle className={Style.mainText}>
                        {v.title}
                      </MDBCardTitle>
                    </MDBCardBody>
                  </div>
                  </div>
                </MDBCol>
              </MDBRow>
            )
          })}
        </Carousel>
      </div>
    )
  }
}
