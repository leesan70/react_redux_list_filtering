import { StudentActions } from "Actions";
import React from 'react';
import { connect } from "react-redux";
import { Student } from "Components/Student";

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
            <div>
                {
                    students && students.map(student => {
                        return <Student key={student.id} {...student}/>
                    })
                }
            </div>
        );
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
