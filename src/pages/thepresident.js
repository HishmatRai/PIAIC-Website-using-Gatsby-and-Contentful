import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./../style/thepresident.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Header from "../components/home/navbar/navbar.js"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Footer from "./../components/home/footer/footer"

const ThePresident = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutpresidential {
        edges {
          node {
            title
            presdentimage {
              file {
                url
              }
            }
            images {
              file {
                url
              }
            }
            shortdescription

            fulldescription {
              json
            }
          }
        }
      }
    }
  `)

  let allData = data.allContentfulAboutpresidential.edges[0].node

  return (
   
  
    <div>
      <Header />
    <MDBContainer>
    <MDBRow>

      <MDBCol size="12">

 
        <div className={style.main}>
          <div>
            <img src={allData.presdentimage.file.url} className={style.pic} alt="img"/>
            <p className={style.name}>{allData.title}</p>
            <p className={style.desig}>{allData.shortdescription}</p>
            {allData.images.map((v, i) => (
              <img
              key = {i}
                src={v.file.url}
                className={style.desig}
                width="20px"
                height="20"
                alt="img"
              />
            ))}
          </div>
          <div className={style.content}>
            <p className={style.text}>
              {documentToReactComponents(allData.fulldescription.json)}
            </p>
          </div>
        </div>
        </MDBCol>
    </MDBRow>
    </MDBContainer>
    <Footer/>
    </div>
  )
}

export default ThePresident
