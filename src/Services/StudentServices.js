import { Axios } from 'Helpers';


async function getStudentList() {
    let response = {};

    try {        
        response = await Axios.get(`/api/assessment/students`);
    } catch (e) {
        return response;
    }
    
    return response.data;
}

export const StudentServices = {
    getStudentList,
};