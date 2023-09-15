import React, { useState, useEffect } from 'react';
import StudentService from '../services/studentService';
import {Link } from 'react-router-dom';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await StudentService.getAllStudents();
            setStudents(response.data);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this entry?")){
            try {
                await StudentService.deleteStudent(id);
                setStudents(students.filter(student => student.id !== id));
            } catch (error) {
                console.error("Error deleting student:", error);
            }
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Student Management</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Grade</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {students.map(student => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.grade}</td>
                        <td>
                            <Link className="btn btn-info me-2" to={`/view/${student.id}`}>View</Link>
                            <Link className="btn btn-warning me-2" to={`/edit/${student.id}`}>Edit</Link>
                            <button className="btn btn-danger" onClick={() => handleDelete(student.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );


}

export default StudentList;
