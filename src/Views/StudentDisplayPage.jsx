import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { StudentActions } from "Actions";
import { Student } from "Components/Student";
import React from 'react';
import { connect } from "react-redux";


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
            <Grid style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Grid 
                    style={{
                        width: '50%',
                        marginTop: window.innerHeight * .08,
                        maxHeight: window.innerHeight * .8,
                        overflow: 'auto',
                        alignItems: 'center',
                        background: 'white',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px LightGray'
                    }}
                >
                <Grid style={{ position: 'fixed', padding: 10, background: 'white', width: '50%', borderRadius: '10px', }}>
                        <Grid>
                            <TextField
                                id="name-input"
                                label="Search by name"
                                fullWidth={true}
                                onChange={this.onInputChange}
                                width="100%"
                                type={"text"}
                                name={"searchByName"}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                id="tag-input"
                                label="Search by tags"
                                fullWidth={true}
                                onChange={this.onInputChange}
                                width="100%"
                                type={"text"}
                                name={"searchByTag"}
                            />
                        </Grid>
                    </Grid>
                    <Grid style={{ marginTop: 100 }} >
                        {
                            students && 
                                students
                                    .filter(student => {
                                        const name = student.firstName + " " + student.lastName;
                                        return name.toLocaleLowerCase().includes(searchByName.toLocaleLowerCase());
                                    })
                                    .filter(student => {
                                        return !searchByTag || 
                                            (this.props.tags[student.id] && 
                                            this.props.tags[student.id].some(tag => {
                                                return tag.toLocaleLowerCase().includes(searchByTag.toLocaleLowerCase());
                                            }))
                                    })
                                    .map(student => {
                                        return <Student key={student.id} {...student}/>
                                    })
                        }
                    </Grid>
                </Grid>
            </Grid>
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
    }
}

function mapState(state) {
    const { students } = state;
    const { studentList, tags } = students;

    return { studentList, tags };    
}

const actionCreators = {
    getStudentList: StudentActions.getStudentList,
};

const connectedStudentDisplayPage = connect(mapState, actionCreators)(StudentDisplayPage);
export { connectedStudentDisplayPage as StudentDisplayPage };

