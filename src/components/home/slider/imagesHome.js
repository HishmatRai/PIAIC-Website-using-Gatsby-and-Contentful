import React from "react"
import AOS from 'aos';
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import "./imagesHome.scss"
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

  console.log(props.data)
  return (
    <div className="mainDiv">
      <Grid
        container
        className={classes.root}
        style={{ width: "100%", height: "70vh" }}
      >
        <Grid item xs={12} sm={6}>
          <img
            className="sliderimg1"
            src={props.data.url}
            alt="President Picture"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="sliderText">
            <h1 className="sliderTextHeading">{props.data.title}</h1>
            <div data-aos="fade-left">
            <p className="sliderPa">{props.data.descraption}</p>
            </div>
          </div>
        </Grid>
      </Grid>
      {/* ))} */}
    </div>
  )
}
