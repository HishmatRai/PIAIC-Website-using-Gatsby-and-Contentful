import React from "react"
import AOS from 'aos';
import "./../style/index.scss"
import Header from "../components/home/navbar/navbar.js"
import SpacingGrid from "../components/home/presidential_initiative/presidential_initiative.js"
import Video from "../components/home/video-part/video-part.js"
import { useStaticQuery, graphql } from "gatsby"
import Card from "../components/home/available_prog_card/available_prog_card.js"
import Posts from "../components/home/prog_in_devel_card/prog_in_devel_card.js"
import Slider from "./../components/home/slider/slider.js"
import StrategicPartners from "./../components/home/strategicPartners/strategicPartners"
import MainFooter from "./../components/home/footer/mainfooter"
import Footer from "./../components/home/footer/footer"
import 'aos/dist/aos.css';
AOS.init();
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulHome {
        edges {
          node {
            title
            subTitle
            shortDescription {
              shortDescription
            }
            availableProgram
            card {
              title
              detail
              sub_title
              color
            }
            developmenttitle
            developmentdetail {
              title
              class
            }
            videotitle
            videoDescraption
            images
            sliderData {
              title
              url
              descraption
            }
            strategicPartners
            partnerLogos {
              width
              url
              image
            }
            video {
              description
              imageurl
              title
              videourl
            }
          }
        }
      }
    }
  `)

  let presedent = data.allContentfulHome.edges[0].node

  return (
    <div className="man">
 


 


      <Header />
     


      <SpacingGrid
        subtitle={presedent.subTitle}
        shortDescription={presedent.shortDescription.shortDescription}
        title={presedent.title}

      />

      <div style={{ marginTop: "-100px" }}>
        <div>
        <div data-aos="fade-down"
     data-aos-easing="linear"
    data-aos-duration="1500">
          <p className="ProgransHeading">{presedent.availableProgram}</p>
          </div>
        </div>
        
        {presedent.card.map((v, i) => {
          if(i < presedent.card.length-1){
            return (
          <Card
            key = {i}
            heading={v.title}
            subheading={v.sub_title}
            description={v.detail}
            color={v.color}
            float = "right" 
          />)
        }
        if(i >= presedent.card.length-1){
          return (
          <Card
          key = {i}

            heading={v.title}
            subheading={v.sub_title}
            description={v.detail}
            color={v.color}
          />
          )
        }
        })}
      </div>
      <br />
      <br />
  
      <div>
        <Posts
          developmenttitle={presedent.developmenttitle}
          developmentdetail={presedent.developmentdetail}
        />
      </div>

      <p className="videoPor">
        <h1 style={{ color: "white" }}>{presedent.videotitle}</h1>
        <Video video={presedent.video} />
        <h4 style={{ color: "#8acdbc" }}>{presedent.videotitle}</h4>
        <p style={{ color: "white" }}>
          {presedent.videoDescraption}
          <br />
          Computing on December 9, 2018.
        </p>
      </p>
      <Slider sliderData={presedent.sliderData} />

      <StrategicPartners />
      <MainFooter />
      <Footer />
    </div>
  )
}
export default IndexPage

