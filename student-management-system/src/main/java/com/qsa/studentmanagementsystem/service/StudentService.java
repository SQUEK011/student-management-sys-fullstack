package com.qsa.studentmanagementsystem.service;

import com.qsa.studentmanagementsystem.entity.Students;
import org.springframework.stereotype.Service;
import com.qsa.studentmanagementsystem.repository.StudentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private StudentRepository studentRepository;


    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Students> getAllStudents(){
        return studentRepository.findAll();
    }

    public Optional<Students> getStudentById(Long id){
        return studentRepository.findById(id);
    }

    public Students addStudent(Students students){
        return studentRepository.save(students);
    }

    public Students updateStudent(Students student) {
        if (student.getId() == null || !studentRepository.existsById(student.getId())) {
            throw new IllegalArgumentException("Student with ID " + student.getId() + " does not exist.");
        }

        return studentRepository.save(student);
    }

    public void deleteStudent(Long id){
        studentRepository.deleteById(id);
    }
}
