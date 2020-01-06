import React from "react"
import Grid from "@material-ui/core/Grid"
import style from "./../style/management.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/home/navbar/navbar.js"
import Footer from "./../components/home/footer/footer"
import StrategicPartners from "./../components/home/strategicPartners/strategicPartners"

const Managment = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutmenmanagement {
        edges {
          node {
            management {
              name
              profession
              url
              icon {
                iconurl
                name
                url
              }
            }
            title
            partnerLogos {
              image
              url
              width
            }
            partner
          }
        }
      }
    }
  `)

  let management = data.allContentfulAboutmenmanagement.edges[0].node
  return (
    <div>
    <div style={{ marginTop: 40, paddingLeft: "10%", paddingRight: "10%" }}>
      <Header />
      <h1 className={style.heading1}>{management.title}</h1>

      <Grid container justify="center">
        {management.management.map((val, index) => (
          <div className={style.main}>
            <img src={val.url} className={style.pics} alt="img"/>
            <p className={style.names}>{val.name}</p>
            <p className={style.desig}> {val.profession}</p>
            {val.icon &&
              val.icon.map((v, i) => (
                <a href={v.iconurl} target="_blank">
                  <img src={v.url} width="10%" alt="img"/>
                </a>
              ))}
          </div>
        ))}
      </Grid>
           <StrategicPartners/>
    </div>
    <br />
    <br />
    <br />
      <Footer/>
      </div>
  )
}

export default Managment
