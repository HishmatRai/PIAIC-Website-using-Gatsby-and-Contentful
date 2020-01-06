import React from "react"
import AOS from 'aos';
import { makeStyles } from "@material-ui/core/styles"
import PreImg from "./../../../images/president1.png"
import Grid from "@material-ui/core/Grid"
import './presidential_initiative.scss'
import Button from '@material-ui/core/Button';
import CountUp from 'react-countup';
import 'aos/dist/aos.css';
AOS.init();
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}))

export default function SpacingGrid(props) {
  const classes = useStyles()


  return (
    <div class="header-wrapper">
      <div class="zoominheader">
        <div class="zoomoutheader">



          <div>
            <Grid
              container
              className={classes.root}
              style={{ width: "100%", backgroundColor: "#e6e2e3" }}
            >
              <Grid item xs={12} sm={4}>
                <div>
                  <img
                    className="PresImg"
                    src={PreImg}
                    alt="President Picture"
                    width="80%"
                    style={{ marginLeft: "5%", marginTop: "10vh",color:"red" }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={8}>
                <div style={{ marginTop: "20vh", padding: "20px" }}>

                  <p className="heading">{props.title}</p>
                  <p className="title">{props.subtitle}</p>
                  <p style={{ textAlign: "justify", width: "90%" }}>{props.shortDescription}</p>

                  <p style={{ float: "right", marginRight: "10%" }}>

                    <div class="container">
                      <div class="row">
                        <div class="col" style={{ marginTop: "20px" }}>
                          <div data-aos="zoom-in">
                            <Button style={{ backgroundColor: "#0cc399", fontSize: '12px', color: "white", lineHeight: "24px", textAlign: "center", padding: "11px 44px 11px 44px" }} >Apply</Button>
                          </div>
                        </div>
                     

                        <div data-aos="fade-down">
                        <div class="col" style={{ borderLeft: "4px solid black" }}>
                          <div data-aos="fade-up"
                            data-aos-duration="3000">

                            <span style={{ fontSize: "40px", fontWeight: "bold" }}>


                              <CountUp end={65} duration={5} />

                              K+</span>

                            <br />
                            <span style={{ fontSize: "10px", margintRight: "30%" }}>
                              Applications Received
              </span>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div class="row">



                      </div>
                    </div>
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>





        </div>
      </div>
    </div>
  )
}
