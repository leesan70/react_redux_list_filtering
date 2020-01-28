import React from 'react';

import {
    Paper,
    Grid,
    ButtonBase,
    Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
      flexGrow: 1,
      paddingBottom: theme.spacing(1),
    },
    grid: {
      padding: theme.spacing(2),
      margin: 'auto',
      borderBottom: 1,
      borderRadius: "50%"
    //   maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      borderRadius: '50%',
      border: "1px solid #ddd",
      width: 128,
      height: 128,
    //   maxWidth: '100%',
    //   maxHeight: '100%',
    },
});

class Student extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        // console.log(this.props);
        const { classes, pic, firstName, lastName, email, grades, company, skill } = this.props;
        return (
            <div className={classes.root} style={{borderBottom: "2px solid WhiteSmoke"}}>
                <Grid className={classes.grid}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Grid className={classes.image}>
                                <img className={classes.img} alt="complex" src={pic} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" fontWeight="fontWeightBold">
                                        {firstName + " " + lastName}
                                    </Typography>
                                    <Grid item xs style={{ marginLeft: 20, color: "grey" }}> 
                                        <Typography variant="body2">
                                            Email: {email}
                                        </Typography>
                                        <Typography variant="body2">
                                            Company: {company}
                                        </Typography>
                                        <Typography variant="body2">
                                            Skill: {skill}
                                        </Typography>
                                        <Typography variant="body2">
                                            Average: {arrAvg(grades)}%
                                        </Typography>
                                    </Grid>
                                </Grid>
                                {/* <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        Remove
                                    </Typography>
                                </Grid> */}
                            </Grid>
                            {/* <Grid item>
                                <Typography variant="subtitle1">$19.00</Typography>
                            </Grid> */}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            // <div>
            //     <img style={{ borderRadius: '50%' }} align="left" src={pic} />
            //     <h2>{firstName + " " + lastName}</h2>
            //     <p>Email: {email}</p>
            //     <p>Company: {company}</p>
            //     <p>Skill: {skill}</p>
            //     <p>Average: {arrAvg(grades)}%</p>
            // </div>
        );
    }
}

const arrAvg = arr => arr.reduce((a,b) => a + Number(b), 0) / arr.length;

export default withStyles(useStyles)(Student);