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
    }

    function generateResults(){
      console.log("generate results")
    }

    document.getElementById('submit').addEventListener('click', generateResults);
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
  