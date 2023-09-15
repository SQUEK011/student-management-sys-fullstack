-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS student_management;

-- Use the created database
USE student_management;

-- Create the student table
CREATE TABLE IF NOT EXISTS students (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    grade VARCHAR(255) NOT NULL
);

-- Inserting sample student values into the students table
INSERT INTO students (name, age, grade) VALUES ('John Doe', 20, 'Grade 3');
INSERT INTO students (name, age, grade) VALUES ('Jane Smith', 22, 'Grade 4');
INSERT INTO students (name, age, grade) VALUES ('Alice Johnson', 19, 'Grade 2');
INSERT INTO students (name, age, grade) VALUES ('Bob Brown', 21, 'Grade 3');
INSERT INTO students (name, age, grade) VALUES ('Charlie Wilson', 23, 'Grade 4');
