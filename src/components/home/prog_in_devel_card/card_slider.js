import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import FormLabel from "@material-ui/core/FormLabel"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import Paper from "@material-ui/core/Paper"
import PreImg from "./../../../images/Launching-site-image2.c147d1bb.jpg"
// import "./imagesHome.scss"

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
  const [spacing, setSpacing] = React.useState(2)
  const classes = useStyles()

  const handleChange = event => {
    setSpacing(Number(event.target.value))
  }
  console.log(props.data)
  return (
    <div className="mainDiv">
      <Grid
        container
        className={classes.root}
        style={{ width: "100%", height: "70vh" }}
      >
        <Grid item xs={12} sm={6}>
         <p>Hishmat rai</p>
        </Grid>
        <Grid item xs={12} sm={6}>
         <h1>kounralai</h1>
        </Grid>
      </Grid>
      {/* ))} */}
    </div>
  )
}
