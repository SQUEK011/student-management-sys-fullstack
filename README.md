# Student Management System

A comprehensive CRUD-based student management system developed using React for the frontend and Spring Boot for the backend. 

<!-- ![App Screenshot](path-to-your-screenshot.png) 

*Replace `path-to-your-screenshot.png` with a link to a screenshot of your application for a visual preview.* -->

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)

## Introduction

This project is created to showcase and apply the knowledge to create a full-stack application that utilises a frontend language and a backend language. This project will demonstrate:
1. The use of Spring Boot framework and Java to create an API for the frontend to use
2. The use of MySQL database to connect to Spring Boot
3. The use of ReactJS libraries such as useState() and react-router-dom 

## Features

- **View Students:** Displays a list of all students.
- **Add Students:** Allows for the addition of new student entries.
- **Edit Students:** Modify details of existing students.
- **Delete Students:** Removes students from the database.

## Getting Started

This section will guide you on how to set up the project locally.

### Prerequisites

- Node.js and npm
- Java Development Kit (JDK)
- MySQL (or your chosen database)

### Installation

1. Clone the repository:
    ```bash
    git clone [your-repository-link]
    ```

2. Navigate into the frontend directory and install dependencies:
    ```bash
    cd student-management-system-frontend
    npm install
    ```

3. Navigate to the backend directory and build the project:
    ```bash
    cd student-management-system
    ./mvnw install
    ```
4. Run SQL script or load database with data 

## Usage

1. To start the backend server:
    ```bash
    ./mvnw spring-boot:run
    ```

2. To start the React development server:
    ```bash
    npm start
    ```

Visit `http://localhost:3000` in your browser to access the application.

## Acknowledgements

- [React](https://reactjs.org/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Bootstrap](https://getbootstrap.com/)

