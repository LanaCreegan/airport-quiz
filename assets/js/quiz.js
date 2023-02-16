(function(){

    function generateQuiz(){

      // for each question...
      Questions.forEach(
        (currentQuestion, questionNumber) => {
            console.log(currentQuestion);
            console.log(questionNumber);

            for(answerIndex in currentQuestion.answers){
                console.log(answerIndex);
            }
        }
      );
    }
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
  