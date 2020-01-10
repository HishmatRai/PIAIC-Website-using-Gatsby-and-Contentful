import React from "react"
import Panacloud from "./../../../images/footer_logo.png"
import { Link } from "gatsby"

const footer = () => 
{  
  const footer = useStaticQuery(graphql`
  {
    allContentfulHome {
    edges {
      node {
        footer {
          Navigation {
            link
            name
          }
          PIAICArray {
            iconurl
            link
            name
          }
          PIAIC_Helpline {
            iconurl
            link
            name
            title
          }
          name
          location
        }
      }
    }
  }

    
`)

let footer2 = foorter.allContentfulHome.edges[0].node
return(

  <div style={{ height: "70px", backgroundColor: "#12232f" }}>
    <div
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
    <Link to="#"  style={{color:"white"}}>
        <span style={{fontSize:"14px", fontWeight:"normal"}}>powered by</span>
        <br />
        <img style={{}} height="44px" width="80px" src={Panacloud} />
     </Link>
      </div>
    </div>
  </div>
)
}

export default footer
