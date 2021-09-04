# Quiz App

## [Play the Quiz]()

[backend of the Project]()

Quiz app front-end with react js

# How the App works ( an high-level overview )

- Enter a username first and get started.\

- If the username already exists in Database, an alert will pop up that says:- "User already exists!! " and the quiz will start
- If the username does't exists in the database, the front-end will make a request to the back-end and create a new document in the collection of the mongoDB database.

question screen will only be diplayed when the user submit's thier name 
- if user does't exists render WelcomeScreen component
- else render the QuestionsScreen component

- By looking at the image displayed on the UI, select the correct options from the list, there are total of 20 question out of which 5 is selected randomly each time the page refresh.
    - If user gives correct answer then next question will be displayed
    - If user gives wrong answer then the number of errors will increment by 1 each time the user gives wrong answer untill the user gives the right answer

- On the result screen, Results are comming from the Backend based on the current user.\
Result screen shows all the past quiz's result and the current quiz results of the user.\
if user RESET the quiz the you user be will set to null or a empty string and because of the screen coditions the user will be shown the WelcomeScreen utill the user again enter's their username.

## scores :-

At the end of the quiz you will find list of all previous quiz :-
- your username
- no. of error you've made
- Time when started the quiz
- Time when you finished the quiz

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## setting up the project

`git clone https://github.com/himansh-gjr/Quiz-app`

`cd Quiz-app`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.