import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StudentService from '../services/studentService';
import StudentForm from '../components/StudentForm';

function StudentEdit() {
    const [student, setStudent] = useState({ name: '', email: '', course: '' });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await StudentService.getStudentById(id);
                setStudent(response.data);
            } catch (error) {
                console.error("There was an error fetching the student for edit!", error);
            }
        };

        fetchStudent();
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setStudent(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await StudentService.updateStudent(student.id, student);
            navigate('/');
        } catch (error) {
            console.error("There was an error updating the student!", error);
        }
    };

    return (
        <div className="student-form-container">
            <h2>Edit Student</h2>
            <StudentForm
                student={student}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                buttonLabel="Save"
            />
        </div>
    );
}

export default StudentEdit;
