import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import StudentList from "./views/StudentList";
import StudentView from "./views/StudentView";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import StudentAdd from "./views/StudentAdd";
import StudentEdit from "./views/StudentEdit";

function App() {;
    return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<StudentList/>}/>
                <Route path="/add/" element={<StudentAdd/>}/>
                <Route path="/view/:id" element={<StudentView/>}/>
                <Route path="/edit/:id" element={<StudentEdit/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
