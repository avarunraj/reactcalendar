# Getting Started with calendar

This project was done as part of interview assessment
Author : Arunraj A V

## Steps to run the project

clone the file from git repo using command 'git clone <insert_url_here>'
open the file and goto the project directory
In the project directory, you can run:

### `npm install`

installs the dependencies mentioned in in package.json

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000] to view it in the browser.

### `npm test`

Run jest test suites and view results

## Project Details

This ReactJS based Application is using typescript template,
a package called emotion to handle css (styled components),
jest for unit testing.
Application provides a calendar component

       Users can enter date as props and calendar will show the date with that month and day highlighted
       usage example : <Calendar date={new Date()} />
       input props   : date -> date to be shown in calendar

## Design/Architecture details

The project is created with create-react-app development environment,The project structure includes
1)Project Directory 
2)src
3)Public
4)Components
5)Node modules
6)Common

\*)The source (src) folder is where all the essential files and folders are listed:
eg) Components : The tsx files that is shown in DOM

\*)The public folder contains all of the project's static files, such as logo, fonts, images etc

\*)Resuable components are added in common here added types and util function



RUN : docker compose up -d --build to start the application in docker 
      docker compose down : to stop the docker