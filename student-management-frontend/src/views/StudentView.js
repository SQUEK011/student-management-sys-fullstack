import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import StudentService from "../services/studentService";

const StudentView = () => {
    const { id } = useParams();  // Get the student ID from the URL
    const [student, setStudent] = useState(null);

    useEffect(() => {
        StudentService.getStudentById(id)
            .then(response => {
                setStudent(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the student!", error);
            });
    }, [id]);

    if (!student) return <div>Loading...</div>;

    return (
        <div className="student-view-container mt-3">
            <h2>Student Details</h2>
        <div className="d-flex justify-content-center mt-3">
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{student.name}</h5>
                    <p className="card-text">Age: {student.age}</p>
                    <p className="card-text">Grade: {student.grade}</p>
                    <Link to={`/edit/${student.id}`} className="btn btn-warning me-1">Edit</Link>
                    <Link to={`/`} className="btn btn-primary">Back</Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default StudentView;