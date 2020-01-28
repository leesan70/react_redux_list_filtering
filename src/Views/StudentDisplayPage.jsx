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

import { debounce } from 'lodash';

class StudentDisplayPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchFilters: {
                searchByName: '',
                searchByTag: '',
            },
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    async componentDidMount() {
        await this.props.getStudentList();
    }

    render() {
        const students = this.props.studentList ? this.props.studentList.students : null;
        const { searchByName, searchByTag } = this.state.searchFilters;
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
                                    onChange={this.onInputChange}
                                    width="100%"
                                    type={"text"}
                                    name={"searchByName"}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="tag-input"
                                    label="Search by tags"
                                    fullWidth={true}
                                    onChange={this.onInputChange}
                                    width="100%"
                                    type={"text"}
                                    name={"searchByTag"}
                                />
                            </div>
                        </form>
                    </Grid>
                    <List style={{maxHeight: '100%', overflow: 'auto'}} >
                        {
                            students && 
                                students.filter(student => {
                                    const name = student.firstName + " " + student.lastName;
                                    return name.toLocaleLowerCase().includes(searchByName.toLocaleLowerCase());
                                })
                                .map(student => {
                                    return <Student key={student.id} {...student}/>
                                })
                        }
                    </List>
                </Grid>
            </div>
        );
    }

    // TODO: Use debounce
    onInputChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        const { searchFilters } = this.state;
        this.setState({
            searchFilters: {
                ...searchFilters,
                [name]: value
            }
        });
        console.log(this.state);
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
