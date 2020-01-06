import React from "react"
import Panacloud from "./../../../images/footer_logo.png"

const footer = () => (
  <div style={{ height: "70px", backgroundColor: "#12232f" }}>
    <p
      style={{
        fontSize: "12px",
    
        color: "white",
        fontWeight: "700px",
        textAlign: "center",
      msAlignSelf:'center',
       alignItems: "center",
     justifyContent:"center"
        
      }}
    >
      
      © 2019 PIAIC. All rights reserved.
     
      <div
        style={{
          
          float: "right",
        }}
      >
        <a href="#!"  style={{color:"white"}}>
        <span style={{fontSize:"14px", fontWeight:"normal"}}>powered by</span>
        <br />
        <img style={{}} height="44px" width="80px" src={Panacloud} />
        </a>
      </div>
    </p>
  </div>
)

export default footer
