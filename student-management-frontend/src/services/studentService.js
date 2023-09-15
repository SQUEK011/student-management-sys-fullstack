import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/students';

class StudentService {

    getAllStudents(){
        return axios.get(BASE_URL);
    }
    getStudentById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }

    createStudent(student){
        return axios.post(BASE_URL, student);
    }

    updateStudent(id, student){
        return axios.put(`${BASE_URL}/${id}`, student);
    }

    deleteStudent(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }

}

export default new StudentService();