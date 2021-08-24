// App Images
import password from './assets/images/appImages/password.png';
import employeedirectory from './assets/images/appImages/EmployeeDirectory.png';
import myTeam from './assets/images/appImages/myTeam.png';
import notetaker from './assets/images/appImages/NoteTaker.png';
import weatherdashboard from './assets/images/appImages/WeatherDashboard.png';
import dayplanner from './assets/images/appImages/DayPlanner.png';
import codequiz from './assets/images/appImages/CodeQuiz.png';
import ecommerce from './assets/images/appImages/e-commerce.png';
import blog from './assets/images/appImages/blog.png';
import regex from './assets/images/appImages/regex.png';
import workout from './assets/images/appImages/workout.png';
import budget from './assets/images/appImages/budget.png';


// Demo Gifs
import employeeDirectoryGif from './assets/images/gifs/EmployeeDirectory.gif';
import myTeamGif from './assets/images/gifs/myTeam.gif';
import passwordGif from './assets/images/gifs/Password.gif';
import noteTakerGif from './assets/images/gifs/NoteTaker.gif';
import weatherDashboardGif from './assets/images/gifs/WeatherDashboard.gif';
import codeQuizGif from './assets/images/gifs/CodeQuiz.gif';
import dayPlannerGif from './assets/images/gifs/DayPlanner.gif';
import ecommerceGif from './assets/images/gifs/e-commerce.gif';
import blogGif from './assets/images/gifs/blog.gif';
import regexGif from './assets/images/gifs/regex.gif';
import workoutGif from './assets/images/gifs/workout.gif';
import budgetGif from './assets/images/gifs/budget.gif';


export const projects = [
  
    {
    id: "cartaya1/password-generator",
    title: "Password Create (Full Stack)",
    description:
      "This is a simple Password Creator application where the user can search a strong keywords.And use like password",
    imageUrl: password,
    appUrl: "https://cartaya1.github.io/password-generator/",
    gif: passwordGif,
    technology: "Password: HTML, Javascript, CSS", 
    details: "This is a Full Stack Password Generator application, where the user can use for the first login or sign up. Also user can get a diferent Password.",
  },
  {
    id: "cartaya1/Code-Quiz",
    title: "Code Quiz (Front End)",
    description:
      "A timer-based quiz application that stores high scores of multiple users. Answering incorrectly results in penality of time.",
    imageUrl: codequiz,
    appUrl: "https://cartaya1.github.io/Code-Quiz/",
    gif: codeQuizGif,
    technology: "Javascript, Bootstrap, Browser LocalStorage, HTML, CSS",
    details: "A timer-based quiz application having multiple choice questions that stores high scores of multiple users. Answering incorrectly results in penality of time."
  },
  {
    id: "cartaya1/weather-track",
    title: "Weather Dashboard (FrontEnd)",
    description:
      "A weather dashboard application to get current weather conditions of city and 5 day forecast of that city.",
    imageUrl: weatherdashboard,
    appUrl: "https://cartaya1.github.io/weather-track/",
    gif: weatherDashboardGif,
    technology: "Javascript, JQuery, Bootstrap, HTML, CSS",
    details: "A weather dashboard application to get current weather conditions of city and 5 day forecast of that city. This application is built using OpenWeather API to fetch weather data of searched city."
  },
  {
    id: "cartaya1/daily-book",
    title: "Day Planner (Front End)",
    description:
      "Simple calendar application that allows the user to save events for each hour of the day from 9AM to 5 PM. ",
    imageUrl: dayplanner,
    appUrl: "https://cartaya1.github.io/daily-book/",
    gif: dayPlannerGif,
    technology: "JQuery, Javascript, Moment.js, Bootstrap, HTML, CSS",
    details: "Simple calendar application that allows the user to save events for each hour of the day from 9AM to 5 PM. "
  },
  {
    id: "cartaya1/TPG-21",
    title: "My Employee Team",
    description:
      "Employee Team application created using Inquirer where user can view all employee in his Team.",
    imageUrl: myTeam,
    appUrl: "https://cartaya1.github.io/TPG-21/",
    gif: myTeamGif,
    technology: "React, Bootstrap, Axios",
    details: "Employee directory application created using inquirer, where user can view each employee in his Team"
  },
  {
    id: "cartaya1/Note-Taker",
    title: "Note Taker (Full Stack)",
    description:
      "A Note Taker application that allows users to add ,view, saved and delete the notes if the user don't need that note anymore.",
    imageUrl: notetaker,
    appUrl: "https://cartaya1-note-taker.herokuapp.com/",
    gif: noteTakerGif,
    technology: "Express.js, Node.js, UUID, Javascript, HTML, CSS",
    details: "This is a simple Note Taker application that allows users to add ,view saved notes and also delete the notes if the user don't need that note anymore. This application uses an express backend and save and retrieve note data from a JSON file."
  },
  {
    id: "cartaya1/Employee-Tracker",
    title: "Employee-Tracker",
    description:
      "Employee directory application created using MySQL where user can view all employee in our company by Name or Deparment.",
    imageUrl: employeedirectory,
    appUrl: "https://cartaya1.github.io/Employee-Tracker/",
    gif: employeeDirectoryGif,
    technology: "MySQL, NodeJs, Inquirer, Console.table and a touch of asciiart-logo",
    details: "Employee directory application created using MySQL, where user can view employee information, search employee or sort employee by name. This project was build based in MySQL Database."
  },
  {
    id: "cartaya1/e-commerce-backend",
    title: "e-Commerce Backend-ORM",
    description:
      "A mysql database and application backend for an e-commerce site. Built using MySQL2, Express, Sequelize and dotenv.",
    imageUrl: ecommerce,
    appUrl: "https://cartaya1.github.io/e-commerce-backend/",
    gif: ecommerceGif,
    technology: "Built using MySQL2, Express, Sequelize and dotenv (Base in ORM)",
    details: "EA MySQL database and application backend for an e-commerce site. Built using MySQL2, Express, Sequelize and dotenv."
  },  
  {
    id: "cartaya1/tech-blog",
    title: "Tech Blog - Handbars",
    description:
      "A mysql database and CMS-style Blog built using Model View Controller (MVC) paradigm. load in Heroku.",
    imageUrl: blog,
    appUrl: "https://cartaya1-tech-blog.herokuapp.com/",
    gif: blogGif,
    technology: "MySQL2, Express, Sequelize, Bulma, Handlebars and dotenv. Develope in Heroku",
    details: "A mysql database and CMS-style Blog built using Model View Controller (MVC) paradigm.",
  },
  {
    id: "cartaya1/A_Regular_Expression",
    title: "Regex Tutorial",
    description:
      "A Basic Regex Tutorial with all elementaries Codes and Descriptions in READme File.",
    imageUrl: regex,
    appUrl: "https://cartaya1.github.io/A_Regular_Expression/",
    gif: regexGif,
    technology: "READme File, Mealdown. all load in GitHub",
    details: "A Basic Regex Tutorial with all elementaries Codes and Descriptions in READme File.",
  },
  {
    id: "cartaya1/Workout-Traker",
    title: "Workout Track",
    description:
      "A workout tracker using Mongo database with a Mongoose schema to handle routes with Express.",
    imageUrl: workout,
    appUrl: "https://polar-woodland-36268.herokuapp.com/",
    gif: workoutGif,
    technology: "Js, NodeJs, Express, MongoDB, Mongoose",
    details: "As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.",
  },
  {
    id: "cartaya1/budget-app",
    title: "Budget App - on/off Line",
    description:
    "Give users a easy way to track their money and access the information anytime & offline too.",
    imageUrl: budget,
    appUrl: "https://damp-cliffs-44350.herokuapp.com/",
    gif: budgetGif,
    technology: "Js, NodeJs, Express, MongoDB, IndexDB",
    details: "Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.",
  },
];