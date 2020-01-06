import React, { useState } from "react"

import headerStyles from "./navbar.module.scss"
import { Link } from "gatsby"
import Logo from "../../../images/Logo.fb7de414.svg"
import { IoMdMenu } from "react-icons/io"
import "bootstrap/dist/css/bootstrap.min.css"
import Fade from 'react-reveal/Fade';


import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (

      <Navbar fixed="top" expand="lg" className={headerStyles.headermain}>
        <NavbarBrand>
          <Link to="/">
            <img src={Logo} className={headerStyles.image} />
          </Link>
        </NavbarBrand>
        <IoMdMenu
          onClick={toggle}
          className="socialIcons"
          style={{
            width: "50px",
            height: "40px",
            padding: "2px",
          }}
          
        />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>

          <Nav className="mr-right" navbar>
        


          <Fade right>
            <NavItem>
              <NavLink
                className={headerStyles.links}
                id={headerStyles.how_works}
              >
                <Link to="./howitwork" className={headerStyles.pages}>
                  How it works
                </Link>
              </NavLink>
            </NavItem>
            </Fade>

            <Fade right>
            <NavItem>
              <NavLink className={headerStyles.links}>
                <a
                  href="https://portal.piaic.org/signup"
                  target="_blank"
                  className={headerStyles.pages}
                >
                  Apply
                </a>
              </NavLink>
            </NavItem>
            </Fade>

  <Fade right>
            <UncontrolledDropdown nav inNavbar className={headerStyles.drop}>
              <DropdownToggle nav caret className={headerStyles.links}>
                Available programs
              </DropdownToggle>
              <DropdownMenu right className={headerStyles.dropdown}>
                <DropdownItem className={headerStyles.options}>
                  {" "}
                  <Link
                    to="./artificial-inteligence"
                    className={headerStyles.pages}
                  >
                    Artificial inteligence
                  </Link>{" "}
                </DropdownItem>
                <DropdownItem className={headerStyles.options}>
                  <Link
                    to="./cloud-native"
                    className={headerStyles.pages}
                  >
                    Cloud Native and Mobile Web
                  </Link>{" "}
                </DropdownItem>
                <DropdownItem className={headerStyles.options}>
                  <Link
                    to="./blockchain"
                    className={headerStyles.pages}
                  >
                    Blockchain
                  </Link>{" "}
                </DropdownItem>
                <DropdownItem className={headerStyles.options}>
                  <Link
                    to="./internet-of-things"
                    className={headerStyles.pages}
                  >
                    Internet Of Things
                  </Link>{" "}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </Fade>


<Fade right>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className={headerStyles.links}>
                About
              </DropdownToggle>
              <DropdownMenu right className={headerStyles.dropdown}>
                <DropdownItem className={headerStyles.options}>
                  <Link to="./thepresident" className={headerStyles.pages}>
                    The President
                  </Link>
                </DropdownItem>
                <DropdownItem className={headerStyles.options}>
                  <Link to="./managment" className={headerStyles.pages}>
                    Management Committie
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </Fade>
            <Fade right>
            <NavItem>
              <NavLink className={headerStyles.links}>
                <Link to="./wit" className={headerStyles.pages}>
                  WIT
                </Link>
              </NavLink>
            </NavItem>
            </Fade>

          </Nav>
        </Collapse>
      </Navbar>
  )
}

export default Header
