import React from 'react';
import  {useNavigate} from 'react-router-dom';

function StudentForm({ student, handleInputChange, handleSubmit, buttonLabel }) {
    const navigate = useNavigate();
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={student.name}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Age:</label>
                <input
                    type="number"
                    className="form-control"
                    name="age"
                    value={student.age}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Grade:</label>
                <input
                    type="text"
                    className="form-control"
                    name="grade"
                    value={student.grade}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary me-3">{buttonLabel}</button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Cancel</button>
        </form>
    );
}

export default StudentForm;
