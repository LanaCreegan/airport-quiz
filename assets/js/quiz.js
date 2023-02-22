(function(){
    //generate quiz questions
    function generateQuiz(){
      //empty html array
      const html = [];
      //loop through questions
      Questions.forEach(
        (currentQuestion, questionNumber) => {

            //empty answers array
            const countries = [];
            //loop through answers
            for(let answerIndex in currentQuestion.answers){
                //add html input to array
                countries.push(
                    `<label>
                      <input type="radio" name="question${questionNumber}" value="${answerIndex}">
                      ${answerIndex} :
                      ${currentQuestion.answers[answerIndex]}
                    </label>`
                  );
            }
            //push question and answers array to question block
            html.push(
                `<div class="question-block">
                  <div class="question"> <p>${currentQuestion.question}</p></div>
                  <div class="answers"> ${countries.join("")} </div>
                </div>`
              );
            //add all questions to the game container
            gameContainer.innerHTML = html.join('');
        }
      );
      //make the first question visable
      document.querySelectorAll('.question-block')[0].classList.add('show');
    }

    //function to show next question
    function nextQuestion(){

      //get current question
      let question = document.getElementsByClassName('show');

      //check if there is a next question
      if(question[0].nextSibling === null){
        console.log("No more question")
      //else make next display block and current display none
      } else {
        //addd show class to next question
        question[0].nextSibling.classList.add('show');
        //remove show class from current question
        question[0].classList.remove('show');
        //increase the question counter
        questionIndicator++;
        //update front end with question counter
        document.getElementById('question-number').innerHTML = questionIndicator;

        //after making last question show make submit button appear and remove next button
        if(question[0].nextSibling === null){
          document.getElementById('submit').classList.add("show");
          document.getElementById('next').classList.add("hide");
        }
      }
    }

    //Add up the correct questions
    function generateResults(){
      
      //get all the answers
      const answers = gameContainer.querySelectorAll('.answers');

      //init result counter
      let resultCounter = 0;

      //loop through all the questions
      Questions.forEach( (currentQuestion, questionNumber) => {
        
        // get current answers in loop 
        const answerContainer = answers[questionNumber];

        //get the selector for current question in loop
        const selector = `input[name=question${questionNumber}]:checked`;

        //get which answer the user selected
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        //check if users answer matchs the correct answer in the array of questions
        if(userAnswer === currentQuestion.correctAnswer){
          //if the answer is correct increment the result counter
          resultCounter ++;
        }
        
        //set the front end indicator for the results to the number of questions the user got out of the amount of questions
        document.getElementById("quiz-result").innerHTML = `You got ${resultCounter}/${Questions.length} correct.`;

        //remove the last question from the screen
        let question = document.getElementsByClassName('show');
        question[0].classList.remove('show');

        //make the back to homepage button appear
        document.getElementById("back").classList.add('show');
      });
    }

    //submit button event listener
    document.getElementById('submit').addEventListener('click', generateResults);
    //next button event listener
    document.getElementById('next').addEventListener('click', nextQuestion);

    //get the quiz container where the questons will be injected
    const gameContainer = document.getElementById('quiz');
    //curent question indicator
    let questionIndicator = 1;

    //array of questions and their answers
    const Questions = [
      {
        question: "What city uses the code ARN",
        answers: {
          a: "Stockholm",
          b: "Abu Dhabi",
          c: "Brussles",
          d: "Vienna"
        },
        correctAnswer: "a"
      },
      {
        question: "What city uses the code CPH",
        answers: {
          a: "Copenhagen",
          b: "Chicago",
          c: "Dubai",
          d: "Cape Town"
        },
        correctAnswer: "a"
      },
      {
        question: "What city uses the code SYD",
        answers: {
          a: "Stuttgart",
          b: "Sydney",
          c: "Oslo",
          d: "Syracuse"
        },
        correctAnswer: "b"
      },

      {
        question: "What city uses the code ORY",
        answers: {
          a: "Orlando",
          b: "Paris",
          c: "New York",
          d: "Melbourne"
        },
        correctAnswer: "b"
      },

      {
        question: "What city uses the code NAP",
        answers: {
          a: "Dublin",
          b: "Shanghai",
          c: "Naples",
          d: "Nashville"
        },
        correctAnswer: "c"
      },

      {
        question: "What city uses the code DUS",
        answers: {
          a: "Doha",
          b: "Nice",
          c: "Madrid",
          d: "Dusseldorf"
        },
        correctAnswer: "d"
      }
    ];

    //Generate the quiz on load
    generateQuiz();
  })();
  