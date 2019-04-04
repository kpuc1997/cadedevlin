import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { AccountTie, Account, Database, LightbulbOn } from 'mdi-material-ui';
import cade from './Cade with Beer and Suit.jpg';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: 'theme.palette.secondary.light',
    marginBottom: theme.spacing.unit * 15,
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 15,
    marginBottom: theme.spacing.unit * 30,
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
  cade: {
      borderRadius: '50%',
      width: '75%',
      height: '75%',
  }
});

function Pictures(props) {
  const { classes } = props;

  return (
    <div className={classes.root} >
        
        <Grid container  alignItems='center' justify='center'>
          <Grid item xs={3}  >
          <img
          src={cade}
          alt="curvy lines"
          className={classes.cade}
        />
          </Grid>
          <Grid item xs={3}  >
          <img
          src={cade}
          alt="curvy lines"
          className={classes.cade}
        />
          </Grid>
          <Grid item xs={3}  >
          <img
          src={cade}
          alt="curvy lines"
          className={classes.cade}
        />
          </Grid>
        </Grid>
    </div>
  );
}

Pictures.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pictures);