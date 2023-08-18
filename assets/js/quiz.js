(function(){
    //generate quiz questions
    function generateQuiz(){
      //empty html array
      const html = [];
      //loop through questions
      Questions = createQuestions(allQuestions, 6)

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
        console.log("No more question");
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

        //Stop Timer
        clearInterval(Interval);
        document.getElementById("time-result").innerHTML = `It took you ${seconds}:${milis} seconds.`;

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

    //Empty arrays for questions
    let Questions = [];
    let allQuestions = [];

    //get time info
    let seconds = 0; 
    let milis = 0; 
    let appendMilis = document.getElementById("milis")
    let appendSeconds = document.getElementById("seconds")
    let Interval
    //array of questions and their answers taken from API
    
    function getAllQuestions(){
      const url = "https://dev-5l71kh993vn7m36.api.raw-labs.com/airports-question-list";
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          allQuestions = data;
          console.log(data)
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }

    const randomizeIndex = (count) => {
      return Math.floor(count * Math.random());
    };
    
    const createQuestions = (questions, count) => {
      if (count > questions.length) {
          console.log('There are not enough questions');
      }
      const result = [];
      const wasSelected = new Set();
      while (result.length < count) {
          const i = randomizeIndex(count);
          if (wasSelected.has(i)) {
              continue;
          }
          const element = questions[i];
          wasSelected.add(i);
          result.push(element);
      }
      return result;
    };
  
    //Wait for questions to load
    function waitForQuestions() {
      let questionInterval = setInterval(() => {
        if(allQuestions.length > 0) {
          clearInterval(questionInterval)
          generateQuiz();
          startTimer();
        }
      }, 500)
    }
    function startTimer () {
      milis = "00";
      seconds = "00";
      clearInterval(Interval);
      Interval = setInterval(incrementTimer, 10);
    }
    function incrementTimer () {
      milis++; 
      if(milis <= 9){
        appendMilis.innerHTML = "0" + milis;
      }
      if (milis > 9){
        appendMilis.innerHTML = milis;
        
      } 
      if (milis > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        milis = 0;
        appendMilis.innerHTML = "0" + 0;
      }
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    }
    //Generate the quiz on load
    getAllQuestions();
    waitForQuestions();
    
  })();
  