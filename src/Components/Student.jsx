import React from 'react';

import {
    Paper,
    Grid,
    ButtonBase,
    Typography,
    Collapse,
    Button,
    List,
    IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@mdi/react';
import { mdiPlus, mdiMinus } from '@mdi/js';

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

        this.state = {
            expandCollapse: false,
        };
        
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    render() {
        // console.log(this.props);
        const { classes, pic, firstName, lastName, email, grades, company, skill } = this.props;
        const { expandCollapse } = this.state;
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
                                        <Collapse in={this.state.expandCollapse}>
                                            <List>
                                                {
                                                    grades.map((grade, i) => {
                                                        return (
                                                            <React.Fragment>
                                                                <Typography variant="body2">
                                                                    {`Test ${i + 1}:\u00A0\u00A0\u00A0\u00A0${grade}%`}
                                                                </Typography>
                                                            </React.Fragment>
                                                        );
                                                    })
                                                }
                                            </List>
                                        </Collapse>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <div onClick={this.toggleCollapse} class="expand-btn">
                                <Icon path={expandCollapse ? mdiMinus : mdiPlus} size={2} color="grey"/>
                            </div>
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

    toggleCollapse() {
        this.setState({
            ...this.state,
            expandCollapse: !this.state.expandCollapse,
        });
    }
}

const arrAvg = arr => arr.reduce((a,b) => a + Number(b), 0) / arr.length;

export default withStyles(useStyles)(Student);