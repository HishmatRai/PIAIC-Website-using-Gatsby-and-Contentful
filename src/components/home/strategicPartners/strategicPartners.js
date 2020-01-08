
import React from "react"
import AOS from 'aos';
import "./strategicPartners.scss"
import panacloud from "./../../../images/panacloudLogo.svg"
import pxd from "./../../../images/psx.png"
import saylani from "./../../../images/saylaniLogo..png"
 import 'aos/dist/aos.css';
AOS.init();
const centerField = () => (
  <div>
         <div data-aos="fade-down"
     data-aos-easing="linear"
    data-aos-duration="1500">
    <h1 className="maintext">Strategic Partners</h1>
</div>
    <div className="main">
    <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">



      <img
        className="PresImg0"
        src={panacloud}
        alt='panacloud Picture'
        width="100px"
      />
      </div>
      <div data-aos="fade-up"
     data-aos-duration="3000">
      <img className="PresImg1" src={pxd} alt='pxd' width="100PX" 
      
      
      height="58px"
      />
</div>
<div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
      <img className="PresImg2" src={saylani} alt='saylani' width="100px"
      
      
      height="58px"
      />
      </div>
    </div>
  </div>
)

export default centerField
