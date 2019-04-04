import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';
import { AccountTie, Account, Database, LightbulbOn } from 'mdi-material-ui';


const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 15,
    marginBottom: theme.spacing.unit * 15,
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 5}px`,
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={40}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <AccountTie style={{fontSize: 60}} />
              <Typography variant="h6" className={classes.title}>
                Dependable
              </Typography>
              <Typography variant="h5">
                Cade is devoted to his work and makes it a priority. He takes pride
                in showing up early or on-time and endeavors toward cheerful service at all times.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Database style={{fontSize: 60}} />

              <Typography variant="h6" className={classes.title}>
                Robust
              </Typography>
              <Typography variant="h5">
                Cade has a large skillset with which to tackle a variety of workplace challenges.
                He is fully capable of anything from management to back or front of house service.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <LightbulbOn style={{fontSize: 60}} />

              <Typography variant="h6" className={classes.title}>
                Experienced
              </Typography>
              <Typography variant="h5">
                Take solace knowing your problems will be handled by a man with more than 
                6 years beer industry experience. Cade is a proven leader and ideal for managerial roles
                at any establishment.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </LayoutBody>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
