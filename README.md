Employee Management System

Overview

The Employee Management System is a web-based application developed using Spring Boot, ReactJS, MySQL, and Bootstrap. It provides a user-friendly interface for managing employee records efficiently. The system allows users to perform CRUD (Create, Read, Update, Delete) operations on employee data.

Features

Add Employee: Users can add new employees with relevant details.

View Employees: Displays a list of all employees stored in the database.

Update Employee: Modify existing employee details.

Delete Employee: Remove employee records as needed.

Responsive UI: Built using Bootstrap for a mobile-friendly experience.

Technologies Used

Backend: Spring Boot (Java), Spring Data JPA, REST API

Frontend: ReactJS, Axios, Bootstrap

Database: MySQL

Installation and Setup

Prerequisites

Java 17 or later

Node.js & npm

MySQL

IDE (IntelliJ IDEA, VS Code, or Eclipse)

Backend Setup (Spring Boot)

Clone the repository:

git clone https://github.com/sahil0126/Employee_Management_System

Navigate to the backend folder:

cd backend

Configure the application.properties file with MySQL credentials:

spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=your_password

Run the Spring Boot application:

mvn spring-boot:run

Frontend Setup (ReactJS)

Navigate to the frontend folder:

cd frontend

Install dependencies:

npm install

Start the React application:

npm start

API Endpoints

Method

Endpoint

Description

GET

/api/employees

Fetch all employees

GET

/api/employees/{id}

Fetch employee by ID

POST

/api/employees

Add a new employee

PUT

/api/employees/{id}

Update employee details

DELETE

/api/employees/{id}

Delete an employee

Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.](https://github.com/sahil0126/Employee_Management_System)
