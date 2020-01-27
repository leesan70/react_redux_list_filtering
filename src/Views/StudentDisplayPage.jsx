import { StudentActions } from "Actions";
import React from 'react';
import connect from "react-redux/lib/connect/connect";

class StudentDisplayPage extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.getStudentList();
    }

    render() {
        console.log(this.props.students.studentList)
        return(
            <div></div>
        )
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
