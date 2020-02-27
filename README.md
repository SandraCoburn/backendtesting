# backendtesting
# workflow

- create a reoisutiry and clone it
- add .gitignore
- add package.json
- update test script to use jest
- add "jest" configuration to package.json
- add "server" and "start" scripts to package.json

## Features

- List of cohors
- add a cohort
- list cohort's students
- list of students
- add a student
- list of student's cohorts

| Feature                | Method | URL                       |
| :--------------------- | :----: | :------------------------ |
| List cohorts           |  GET   | /api/cohorts              |
| Add a cohor            |  POST  | /api/cohorts              |
| View cohort's student  |  GET   | /api/cohorts/:id/students |
| List of students       |  GET   | /api/students             |
| add a student          |  POST  | /api/students             |
| view student's cohorts |  GET   | /api/students/:id/cohorts |

## Cohorts

- id
- name
- start date

## Students

- id
- name

## Testing

- functions: invoke the function with optional arguments ==> check return
- endpoints: make a request with optional arguments => check the response
-
