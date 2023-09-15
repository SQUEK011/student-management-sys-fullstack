import React, {useState} from 'react';
import  {useNavigate} from 'react-router-dom';
import StudentService from "../services/studentService";
import StudentForm from "../components/StudentForm";

const StudentAdd = () => {
    const [student, setStudent] = useState({ name: '', email: '', course: '' });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setStudent(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await StudentService.createStudent(student);
            navigate('/');
        } catch (error) {
            console.error("There was an error adding the student!", error);
        }
    };

    return (
        <div className="student-form-container">
            <h2>Add Student</h2>
            <StudentForm
                student={student}
                handleInputChange={handleChange}
                handleSubmit={handleSubmit}
                buttonLabel="Add"
            />
        </div>
    );
};

export default StudentAdd;