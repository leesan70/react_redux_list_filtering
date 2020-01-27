import { StudentConstants } from 'Constants';
import { StudentServices } from 'Services';

function getStudentList() {
    return async dispatch => {
        dispatch(request());

        await StudentServices.getStudentList()
            .then(
                studentList => dispatch(success(studentList)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: StudentConstants.GET_STUDENT_LIST_REQUEST } }
    function success(studentList) { return { type: StudentConstants.GET_STUDENT_LIST_SUCCESS, studentList } }
    function failure(error) { return { type: StudentConstants.GET_STUDENT_LIST_FAILURE, error } }
}

export const StudentActions = {
    getStudentList,
};