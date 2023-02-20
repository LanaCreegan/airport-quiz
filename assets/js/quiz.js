(function(){

    function generateQuiz(){

      const html = [];
      Questions.forEach(
        (currentQuestion, questionNumber) => {
            console.log(currentQuestion);
            console.log(questionNumber);

            const countries = [];
            for(answerIndex in currentQuestion.answers){
                console.log(answerIndex);
                countries.push(
                    `<label>
                      <input type="radio" name="question${questionNumber}" value="${answerIndex}">
                      ${answerIndex} :
                      ${currentQuestion.answers[answerIndex]}
                    </label>`
                  );
            }
            console.log(countries);
            html.push(
                `<div class="question-block">
                  <div class="question"> ${currentQuestion.question} </div>
                  <div class="answers"> ${countries.join("")} </div>
                </div>`
              );
            console.log(html);
            gameContainer.innerHTML = html.join('');
        }
      );
      document.querySelectorAll('.question-block')[0].classList.add('show');
    }
    function nextQuestion(){
      let question = document.getElementsByClassName('show');
      question[0].nextSibling.classList.add('show');
      question[0].classList.remove('show');
    }

    function generateResults(){
      console.log("generate results")

      const answers = gameContainer.querySelectorAll('.answers');

      let resultCounter = 0;

      console.log(answers);
      Questions.forEach( (currentQuestion, questionNumber) => {
        
        // find selected answer
        const answerContainer = answers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        console.log(answerContainer);
        console.log(selector);
        console.log(userAnswer);

        if(userAnswer === currentQuestion.correctAnswer){
          resultCounter ++;
        }
        console.log(resultCounter);
      });
    }

    document.getElementById('submit').addEventListener('click', generateResults);
    document.getElementById('next').addEventListener('click', nextQuestion);
    const gameContainer = document.getElementById('quiz');

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

    generateQuiz();
  })();
  