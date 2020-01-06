import React from "react"
import WitLogo from "./../images/win.jpeg"
import style from "./../style/wit.module.scss"
import Header from "../components/home/navbar/navbar.js"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import WitImages from "../components/witImages/witImages.js"
import Footer from "./../components/home/footer/footer"

const Wit = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulWit {
        edges {
          node {
            title
            subTitle
            witDescraption {
              json
            }
            witImages {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  let witdetail = data.allContentfulWit.edges[0].node

  return (
    <div style={{backgroundColor:"white"}}>
      <Header />
      <img src={WitLogo} width="100%"  alt="img"/>
      <div className={style.textDiv}>
        {documentToReactComponents(witdetail.witDescraption.json)}
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <p className={style.p1}>
          {witdetail.title}{" "}
          <p
            style={{
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 12,
              borderTop: "2px solid black",
              alignItems: "center",
              textAlign: "center",
              color: "gray"
            }}
          >
            {witdetail.subTitle}
          </p>
        </p>
      </div>
      <WitImages />
      <Footer/>
    </div>
  )
}
export default Wit
