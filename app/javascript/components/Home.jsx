import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import $ from 'jquery';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  }
}));


function randomColor(){
  return Math.floor(Math.random()*16777215).toString(16);
}

function activateLasers() {
  $('div.shuffle').each(function() {
    $(this).attr('style', 'background-color: #'+randomColor()+' !important');
  })
}

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className ="shuffleClass">
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper className='blue text-style shuffle' onClick={activateLasers}>1</Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={1}>
            <Hidden xsDown>
              <Grid item xs={12}>
                <Paper className="pink text-style shuffle" onClick={activateLasers}>2</Paper>
              </Grid>
            </Hidden>
            <Grid item xs={6}>
              <Paper className="olivegreen text-style shuffle" onClick={activateLasers}>3</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className="duskyrose text-style shuffle" onClick={activateLasers}>4</Paper>
            </Grid>
            <Hidden smUp>
              <Grid item xs={12}>
                <Paper className="pink text-style shuffle" onClick={activateLasers}>2</Paper>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <Hidden smUp>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper className="viridian text-style shuffle" onClick={activateLasers}>7</Paper>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <Grid item xs={6} sm={4}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className="violet text-style shuffle" onClick={activateLasers}>5</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className="turquoise text-style shuffle" onClick={activateLasers}>6</Paper>
            </Grid>
          </Grid>
        </Grid>
        <Hidden smUp>
          <Grid item xs={6} sm={2}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className="iris text-style shuffle" onClick={activateLasers}>8</Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className="grey text-style shuffle" onClick={activateLasers}>9</Paper>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden xsDown>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className="viridian text-style shuffle" onClick={activateLasers}>7</Paper>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden xsDown>
          <Grid item xs={6} sm={2}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className="iris text-style shuffle" onClick={activateLasers}>8</Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className="grey text-style shuffle" onClick={activateLasers}>9</Paper>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}