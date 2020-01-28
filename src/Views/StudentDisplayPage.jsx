import { StudentActions } from "Actions";
import React from 'react';
import { connect } from "react-redux";
import Student from "Components/Student";

import TextField from '@material-ui/core/TextField';
import {
    GridList,
    List,
    Card,
    Grid,
    AppBar,
    Toolbar,
} from '@material-ui/core';

class StudentDisplayPage extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.getStudentList();
    }

    render() {
        const students = this.props.studentList ? this.props.studentList.students : null;
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Grid 
                    style={{
                        width: '50%',
                        marginTop: window.innerHeight * .08,
                        padding: 10,
                        maxHeight: window.innerHeight * .8,
                        overflow: 'auto',
                        alignItems: 'center',
                        background: 'white',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px LightGray'
                    }}
                >
                    <Grid>
                        <form noValidate autoComplete="off">
                            <div>
                                <TextField
                                    id="name-input"
                                    label="Search by name"
                                    fullWidth={true}
                                    onChange={null}
                                    width="100%"
                                    // style={{ position: 'fixed' }}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="tag-input"
                                    label="Search by tags"
                                    fullWidth={true}
                                    width="100%"
                                    // style={{ position: 'fixed' }}
                                />
                            </div>
                        </form>
                    </Grid>
                    <List style={{maxHeight: '100%', overflow: 'auto'}} >
                        {
                            students && students.map(student => {
                                return <Student key={student.id} {...student}/>
                            })
                        }
                    </List>
                </Grid>
            </div>
        );
    }

    onNameInputChange() {

    }
}

function mapState(state) {
    const { students } = state;
    const { studentList } = students;

    return { studentList };    
}

const actionCreators = {
    getStudentList: StudentActions.getStudentList,
};

const connectedStudentDisplayPage = connect(mapState, actionCreators)(StudentDisplayPage);
export { connectedStudentDisplayPage as StudentDisplayPage };
