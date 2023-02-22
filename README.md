# Introduction
The Airport Quiz is a quiz for people who like to travel and wonder what different codes airports use

# User Experience
## Goals
The goal for this quiz is for people to enjoy finding out what code belong to which airport, as a lot of the time it is not always the obvious answer

## User Stories
As a user I want to:
- Play a game that is visually pleasing
- Navigate easily around the quiz
- See how many questions I have answered 
- See what score I got
- Be brought back to the home page once I've completed the quiz 
- Play a resonably relaxing quiz

## Scope
The aim of this project is to be a quiz that has multiple choice questions. There will be 6 questions to answer, with the number of questions answered being displayed. A message will be displayed at the end with the final score.

## Structure 

Home page 
- Title displays on the top of the home page and quiz page
- Play button which starts the quiz
- How to play button which explains how to play the quiz

Quiz page
- The question counter is displayed underneath the title 
- The question is displayed in the middle of the page
- Four answers to choose from are displayed underneath the question
- A next button is displayed on the bottom right to bring the user to the next question

End of quiz
- A get results button is displayed on the bottom right
- A message is displayed with the final score
- A back to home button is displayed underneath the final score message

## Skeleton 
The quiz was designed using two pages, with the buttons and questions being displayed in boxes in the center of the page

## Surface 
### Theme
The theme of the quiz is based around an airplane

### Background image
The background image of a plane flying is used to keep in with the airport theme. It's white and blue colours give an eye catching yet calming and clean aesthetic and what many would associate with looking out a plane window.

### Colours
The colours choosen were to complement the background image and to not take away from the blue and white, while still standing out

### Font
Lato was choosen as the font as it is easy to read while having a sleek design to it

# Features
## Exsisting Features
### Home page

### Title
- The title is displayed at the top of the home page and the quiz page

![title](./assets/images/title.png)

### Button box
- There is a box that contains the play button and how to play button

![button-box](./assets/images/button-box.png)

### Play button
- The play button navigates to the quiz page

![play-button](./assets/images/play-btn.png)

### How to play button
- The how to play button navigates to the modal

![how-to-play-button](./assets/images/how-to-play.png)

### Quiz page

### Question counter
- Underneath the title is the question counter 

![question-counter](./assets/images/question-count.png)

### Quiz box
- Underneath this is a box that displays the question and four answers to choose from

![quiz-box](./assets/images/quiz-box-1.png)

### Next button
- Inside this box, displayed on the bottom right, is a next button that navigates to the next question

![next-button](./assets/images/next-btn.png)

### Get results button
- On the last question, a get result button is displayed on the bottom right

![get-result-button](./assets/images/get-results.png)

### Score
- When the get results button is clicked, the score from the quiz is displayed 

![score-results](./assets/images/score.png)

### Back to home button
- Underneath the score is a back to home button, which navigates back to the home page

![back-to-home-button](./assets/images/back-to-home.png)

## Future features 
 Furture features that would be added:
 - Increase the number of questions being asked
 - Randomise questions so if the user were to play it a number of times the questions would not show in the same order
 - An exit button back to the home page that would allow the user to leave in the middle of the quiz, currently this can only be done by clicking on the title
- Save scores so the user could try beat their old score

## Lanuguages used
- HTML(HyperText Markup Language) was used as the basis of the website
- CSS(Cascading Style Sheets) was used to style the website
- JavaScript was used to add interactivity  


## Technologies used
- [Balsamiq](https://balsamiq.com/) was used to create wireframes 
- [Gitpod](https://www.gitpod.io/) the IDE used 
- [Favicon](https://favicon.io/) was used to get the favicon for the broswer tab
- [CompressJPEG](https://compressjpeg.com/) was used to compress the background image
- [Coolors](https://coolors.co/) was used to choose the colours for the quiz
- [ColorHexa](https://www.colorhexa.com/eff7f6) was used for colour conversion



## Testing
### Validator Tests
The W3C Markup Validation Service was used to validate the HTML
- For the index.html, there are no errors and one warning for section lacking headings, this can be seen [here](./assets/images/html-validator.png)
- For quiz.html 

The W3C CSS Validation Service was used to validate the CSS of the website
- this passed with no errors which can be seen [here](./assets/images/css-validator.png). There was one warning which relates to the imported style sheets for Google Fonts which can be seen [here](./assets/images/css-warning.png)

Lighthouse was used to test the performance
- Home page results [here](./assets/images/lighthouse-index.png)
- Quiz page results [here](./assets/images/lighthouse-quiz.png)
