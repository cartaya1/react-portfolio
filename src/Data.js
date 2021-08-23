// App Images
//import oasis from './assets/images/appImages/OasisJournal.png';
//import burgerlogger from './assets/images/appImages/BurgerLogger.png';
//import googlebooks from './assets/images/appImages/GoogleBooksReact.png';
import jobfinder from './assets/images/appImages/JobFinder.png';
import employeedirectory from './assets/images/appImages/EmployeeDirectory.png';
import notetaker from './assets/images/appImages/NoteTaker.png';
import weatherdashboard from './assets/images/appImages/WeatherDashboard.png';
import dayplanner from './assets/images/appImages/DayPlanner.png';
import codequiz from './assets/images/appImages/CodeQuiz.png';

// Demo Gifs
//import burgerLoggerGif from './assets/images/gifs/BurgerLogger.gif';
//import oasisGif from './assets/images/gifs/OasisJournal.gif';
//import googleBooksGif from './assets/images/gifs/GoogleBooksSearch.gif';
import employeeDirectoryGif from './assets/images/gifs/EmployeeDirectory.gif';
import jobFinderGif from './assets/images/gifs/JobFinder.gif';
import noteTakerGif from './assets/images/gifs/NoteTaker.gif';
import weatherDashboardGif from './assets/images/gifs/WeatherDashboard.gif';
import codeQuizGif from './assets/images/gifs/CodeQuiz.gif';
import dayPlannerGif from './assets/images/gifs/DayPlanner.gif';

export const projects = [
  
    {
    id: "Cartaya/JobFinder",
    title: "Job Finder (Full Stack)",
    description:
      "This is a simple Job Finder application where the user can search for the Jobs with keywords like location,role etc.And also the user can Post a Job ",
    imageUrl: jobfinder,
    appUrl: "https://cartaya1-jobfinder.herokuapp.com/",
    gif: jobFinderGif,
    technology: "MySQL, Sequelize, Express.js, Node.js, Handlebars.js, Passport, Bcyptjs, Javascript, CSS", 
    details: "This is a Full Stack Job Finder application, where the user can first login or sign up (if a user does not have an account). After login, User can search jobs by role, technologies, location or comapny. Also user can get all jobs, post a new job and view the jobs that are posted by logged in user.",
  },
  {
    id: "Cartaya/employee-directory",
    title: "Employee Directory (React)",
    description:
      "Employee directory application created using react where user can view all employee data, search employee as well as sort employee by name.",
    imageUrl: employeedirectory,
    appUrl: "https://cartaya1.github.io/employee-directory/",
    gif: employeeDirectoryGif,
    technology: "React, Bootstrap, Axios",
    details: "Employee directory application created using react where user can view employee data, search employee or sort employee by name. This project was bootstrapped with Create React App."
  },
  {
    id: "Cartaya/Note-Taker",
    title: "Note Taker (Full Stack)",
    description:
      "This is a simple Note Taker application that allows users to add ,view saved notes and also delete the notes if the user don't need that note anymore.",
    imageUrl: notetaker,
    appUrl: "https://cartaya1-express-notetaker.herokuapp.com/",
    gif: noteTakerGif,
    technology: "Express.js, Node.js, UUID, Javascript, HTML, CSS",
    details: "This is a simple Note Taker application that allows users to add ,view saved notes and also delete the notes if the user don't need that note anymore. This application uses an express backend and save and retrieve note data from a JSON file."
  },
  {
    id: "Cartaya/cartaya1-weather-dashboard",
    title: "Weather Dashboard (FrontEnd)",
    description:
      "A weather dashboard application to get current weather conditions of city and 5 day forecast of that city.",
    imageUrl: weatherdashboard,
    appUrl: "https://cartaya1.github.io/weather-dashboard/",
    gif: weatherDashboardGif,
    technology: "Javascript, JQuery, Bootstrap, HTML, CSS",
    details: "A weather dashboard application to get current weather conditions of city and 5 day forecast of that city. This application is built using OpenWeather API to fetch weather data of searched city."
  },
  {
    id: "Cartaya/cartaya1-code-quiz",
    title: "Code Quiz (Front End)",
    description:
      "A timer-based quiz application that stores high scores of multiple users. Answering incorrectly results in penality of time.",
    imageUrl: codequiz,
    appUrl: "https://cartaya1.github.io/code-quiz/",
    gif: codeQuizGif,
    technology: "Javascript, Bootstrap, Browser LocalStorage, HTML, CSS",
    details: "A timer-based quiz application having multiple choice questions that stores high scores of multiple users. Answering incorrectly results in penality of time."
  },
  {
    id: "Cartaya/cartaya1-day-planner",
    title: "Day Planner (Front End)",
    description:
      "Simple calendar application that allows the user to save events for each hour of the day from 9AM to 5 PM. ",
    imageUrl: dayplanner,
    appUrl: "https://cartaya1.github.io/day-planner/",
    gif: dayPlannerGif,
    technology: "JQuery, Javascript, Moment.js, Bootstrap, HTML, CSS",
    details: "Simple calendar application that allows the user to save events for each hour of the day from 9AM to 5 PM. "
  },  
  //{
  //  id: "Cartaya/google-books-search-react",
  //  title: "Google Books Search (React)",
  //  description:
  //    "Google Books Search MERN app allow users to search for books via Google Books API and view/save books they wish to read. Also User can view/delete saved books.",
  //  imageUrl: googlebooks,
  //  appUrl: "https://google-books-search-app-mern.herokuapp.com/",
  //  gif: googleBooksGif,
  //  technology: "MERN Stack, Google Books API, Axios, Bootstrap, Heroku",
  //  details: "The Google Books Search MERN app allows users to search for books of interest via the Google Books API and view, save books they wish to read. Users can get all saved books and they can view or delete those saved books.",
  //},
  
];