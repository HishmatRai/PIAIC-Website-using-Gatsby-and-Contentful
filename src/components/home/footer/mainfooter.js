import React from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"
import "./mainfooter.scss"
import { MdLocationOn, MdCall } from "react-icons/md"
import { IoLogoFacebook, IoLogoYoutube } from "react-icons/io"
const FooterPage = () => {
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
              <a href="#!" className="navPagesList0">
                Home
              </a>
              <br />
              <a href="#!" className="navPagesList0">
                Apply
              </a>
              <br />
              <a href="#!" className="navPagesList0">
                How it works
              </a>
              <br />
              <a href="#!" className="navPagesList0">
                Artificial Inteligence
              </a>
              <br />
              <a href="#!" className="navPagesList0">
                Cloud Native and Mobile Web Computing
              </a>
              <br />
              <a href="#!" className="navPagesList0">
                Blockchain
              </a>
              <br />
              <a href="#!" className="navPagesList0">
                Internet of Things and AI
              </a>
              <br />
              <a href="#!" className="navPagesList0">
                About The President
              </a>
              <br />
              <a href="#!" className="navPagesList0">
                Management Committee
              </a>
              <br />
              <a href="#!" className="navPagesList0">
                Women Inclusion in Technology (WIT)
              </a>
            </div>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="navPagesList1">Location</h5>
            <h4 className="navPagesList1">PIAIC Headquarters</h4>

            <div>
              <a href="#!" className="navPagesList">
                <MdLocationOn className="socialIcons" />
                Plot 245/2 M, Block 6 PECHS, Karachi, Sindh 75100, Pakistan
              </a>
              <br />
              <a href="#!" className="navPagesList">
              <MdCall className="socialIcons"  />
                +92-308-2220203 (WhatsApp as well)
              </a>
              <br />
              <br />
              <h4 className="navPagesList1">PIAIC Helpline </h4>
              <a href="#!" className="navPagesList">
              <MdCall className="socialIcons"  />
                +92-308-2220203 (WhatsApp as well)
              </a>
              <br /><br /><br />
              <h5 className="navPagesList1">Connect with us</h5>
 <a href="#!">
              <IoLogoFacebook className="socialIcons" />
  </a>
 <a href="#!">
              <IoLogoYoutube className="socialIcons" />
   </a>
            </div>
          </MDBCol>
          <MDBCol md="4">
            <br />
            <h4 className="navPagesList1">Karachi Field Office</h4>
            <div>
              <a href="#!" className="navPagesList">
              <MdLocationOn className="socialIcons" />
                A-25, Bahadurabad Chowrangi, Karachi, Sindh 74800, Pakistan
              </a>
              <br />
              <a href="#!" className="navPagesList">
              <MdCall className="socialIcons" />
                +92-311-1729526
              </a>
              <br /> <br />
              <h5 className="navPagesList1">Rawalpindi Field Office</h5>
              <a href="#!" className="navPagesList">
              <MdLocationOn className="socialIcons" />
                4th-B Rd, Satellite Town, Rawalpindi, Punjab 46300
              </a>
              <br />
              <a href="#!" className="navPagesList">
              <MdCall className="socialIcons" />
                051-4940669 / 0336-6660215
              </a>
              <br /> <br />

              <h5 className="navPagesList1">Islamabad Field Office</h5>
              <a href="#!" className="navPagesList">
              <MdLocationOn className="socialIcons" />
                F-10 Markaz F 10/3 F-10, Islamabad, Islamabad Capital Territory
              </a>
              <br />
              <a href="#!" className="navPagesList">
              <MdCall className="socialIcons" />
                051-2223191 (WhatsApp as well)
              </a>
              <br /> <br />
              <h5 className="navPagesList1">Faisalabad Field Office</h5>
              <a href="#!" className="navPagesList">
              <MdLocationOn className="socialIcons" />
                Saylani House, 3rd Floor, Lal Mill Chowk, Factory Area,
                Faisalabad, Punjab
              </a>
              <br />
              <a href="#!" className="navPagesList">
              <MdCall className="socialIcons" />
                (041) 2417281 / 0337 8659969 (WhatsApp as well)
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  )
}

export default FooterPage
