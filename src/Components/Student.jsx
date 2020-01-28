import { Button, Collapse, Grid, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { mdiMinus, mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import { StudentActions } from "Actions";
import React from 'react';
import { connect } from "react-redux";


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
    },
});

class Student extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expandCollapse: false,
        };

        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.handleAddTag = this.handleAddTag.bind(this);
    }

    render() {
        const { classes, id, pic, firstName, lastName, email, grades, company, skill } = this.props;
        const { expandCollapse } = this.state;
        return (
            <div className={classes.root} style={{ borderBottom: "2px solid WhiteSmoke" }}>
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
                                            <Grid>
                                                {<br></br>}
                                                {
                                                    grades.map((grade, i) => {
                                                        return (
                                                            <React.Fragment key={i}>
                                                                <Typography variant="body2">
                                                                    {`Test ${i + 1}:\u00A0\u00A0\u00A0\u00A0${grade}%`}
                                                                </Typography>
                                                            </React.Fragment>
                                                        );
                                                    })
                                                }
                                                <Grid>
                                                    <Grid>
                                                        {
                                                            this.props.tags[id] && this.props.tags[id].map((tag, i) => {
                                                                return (
                                                                    <Button
                                                                        key={i}
                                                                        disableRipple
                                                                        style={{ background: "WhiteSmoke", marginRight: 4 }}
                                                                    >
                                                                        {tag}
                                                                    </Button>
                                                                );
                                                            })
                                                        }
                                                    </Grid>
                                                    <Grid>
                                                        <TextField
                                                            className="add-tag-input"
                                                            label="Add a tag"
                                                            onKeyPress={(e) => {
                                                                if (e.key === "Enter") {
                                                                    this.handleAddTag(e);
                                                                }
                                                            }}
                                                            onSubmit={this.handleAddTag}
                                                            type={"text"}
                                                            name={"AddATag"}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Collapse>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <div onClick={this.toggleCollapse} className="expand-btn">
                                <Icon path={expandCollapse ? mdiMinus : mdiPlus} size={2} color="grey" />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

    toggleCollapse() {
        this.setState({
            ...this.state,
            expandCollapse: !this.state.expandCollapse,
        });
    }

    handleAddTag(event) {
        event.preventDefault();

        const { id } = this.props;
        const { value } = event.target;
        if (value.length) {
            this.props.addTag(id, value);
            event.target.value = '';
        }
    }
}

const arrAvg = arr => arr.reduce((a, b) => a + Number(b), 0) / arr.length;

function mapState(state) {
    const { students } = state;
    const { tags } = students;

    return { tags };
}

const actionCreators = {
    addTag: StudentActions.addTag,
};

const connectedStudent = connect(mapState, actionCreators)(Student);
const connectedStudentWithStyles = withStyles(useStyles)(connectedStudent);
export { connectedStudentWithStyles as Student };

