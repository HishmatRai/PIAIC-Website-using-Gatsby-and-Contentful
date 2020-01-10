import React from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"
import "./mainfooter.scss"
import { MdLocationOn, MdCall } from "react-icons/md"
import { IoLogoFacebook, IoLogoYoutube } from "react-icons/io"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const FooterPage = () => {
  const footer = useStaticQuery(graphql`
    query {
      allContentfulHome {
        edges {
          node {
            footer {
              Navigation {
                link
                name
              }
              location
              PIAIC_Headquarters
              PIAICArray {
                link
                name
                iconurl
              }
              PIAIC_Helpline {
                iconurl
                link
                name
                title
              }
              Connect_with_us {
                title
                social {
                  link
                  url
                }
              }
              City {
                cityname
                contact
                location
              }
            }
          }
        }
      }
    }
  `)

  let footer2 = footer.allContentfulHome.edges[0].node.footer
  console.log(footer2)
  return (
    <MDBFooter
      style={{ backgroundColor: "#202f39" }}
      className="font-small pt-5 pb-4 mt-4 ml-10"
    >
      <MDBContainer className="">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="navPagesList1">Navigation</h5>
            <div>
              {footer2.Navigation.map((v, i) => (
                <Link to="#" className="navPagesList0">
                  {v.name}
                  <br />
                </Link>
              ))}
            </div>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="navPagesList1">{footer2.location}</h5>
            <h4 className="navPagesList1">{footer2.PIAIC_Headquarters}</h4>

            <div>
              {footer2.PIAICArray.map((v, i) => (
                <Link to="#" className="navPagesList">
                  <img src={v.iconurl} className="socialIcons" />
                  {v.name}
                  <br />
                </Link>
              ))}

              <br />
              <h4 className="navPagesList1">{footer2.PIAIC_Helpline.title}</h4>
              <Link to="#" className="navPagesList">
                <MdCall className="socialIcons" />
                {footer2.PIAIC_Helpline.name}
              </Link>
              <br />
              <br />
              <br />
              <h5 className="navPagesList1">{footer2.Connect_with_us.title}</h5>
              <Link to="#">
                <IoLogoFacebook className="socialIcons" />
              </Link>
              <Link to="#">
                <IoLogoYoutube className="socialIcons" />
              </Link>
            </div>
          </MDBCol>
          <MDBCol md="4">
            <br />

            {footer2.City.map((v, i) => (
              <div>
                <h4 className="navPagesList1">{v.cityname}</h4>
                <Link to="#" className="navPagesList">
                  <MdLocationOn className="socialIcons" />
                  {v.location}
                </Link>
                <br />

                <Link to="#" className="navPagesList">
                  <MdCall className="socialIcons" />
                  {v.contact}
                </Link>
                <br />
              </div>
            ))}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  )
}

export default FooterPage
