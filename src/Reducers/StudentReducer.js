import { StudentConstants } from 'Constants';

export function students(state = {}, action) {
    switch (action.type) {
        case StudentConstants.GET_STUDENT_LIST_REQUEST:
            return {
                ...state,
                loading: true,                
            };
        case StudentConstants.GET_STUDENT_LIST_SUCCESS:
            return {
                ...state,
                studentList: action.studentList,
                loading: false,
            };
        case StudentConstants.GET_STUDENT_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};