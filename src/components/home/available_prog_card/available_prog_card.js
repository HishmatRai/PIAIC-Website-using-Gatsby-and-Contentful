import React from 'react';
import AOS from 'aos';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './available_prog_card.css'
import 'aos/dist/aos.css';
AOS.init();
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid(props) {

  return (
    <div data-aos="fade-up"
     data-aos-duration="3000">

    <div >
     
        <Grid item xs={12}>
 
          <div className='column'>
        <div className='card' style ={{float : props.float}}>
            <div className="card-top-border card-1" style={{backgroundColor: `${props.color}`}}></div>

            <div className="card-name">
                <span className="card-title title-1" style={{color: `${props.color}`}}>{props.heading}</span>
            </div>

            <div class="overlay" style={{backgroundColor: `${props.color}`}}>
                <div class="_text">
                    <span className="title_heading">
                       {props.subheading}
                    </span>
                    <span className="title_descripation">
                       {props.description}
                    </span>
                </div>
            </div>
        </div>
    </div>


        </Grid>
       
   
    </div>
    </div>
  );
}
