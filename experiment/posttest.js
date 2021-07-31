/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "When a high is applied to the set line of an SR latch, then ___________",  ///// Write the question inside double quotes
      answers: {
        a: "Q’ output goes high",                  ///// Write the option 1 inside double quotes
        b: "Q output goes high",                  ///// Write the option 2 inside double quotes
        c: "Both Q and Q’ goes high",                  ///// Write the option 3 inside double quotes
        d: "Q output goes low"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
      question: "Latch is a device with ___________",  ///// Write the question inside double quotes
      answers: {
        a: "One stable state",                  ///// Write the option 1 inside double quotes
        b: "Two stable states",                  ///// Write the option 2 inside double quotes
        c: "Three stable states",                  ///// Write the option 3 inside double quotes
        d: "Infinite stable states"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },


    {
      question: "When both inputs of SR latches are low, the latch ___________",  ///// Write the question inside double quotes
      answers: {
        a: "Q output goes high",                  ///// Write the option 1 inside double quotes
        b: "Q’ output goes high",                  ///// Write the option 2 inside double quotes
        c: "It remains in its previously set or reset state",                  ///// Write the option 3 inside double quotes
        d: "It goes to its next set or reset state"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },


    {
      question: "In an SR latch built from NOR gates, which condition is not allowed?",  ///// Write the question inside double quotes
      answers: {
        a: "S=0, R=0",                  ///// Write the option 1 inside double quotes
        b: "S=0, R=1",                  ///// Write the option 2 inside double quotes
        c: "S=1, R=0",                  ///// Write the option 3 inside double quotes
        d: "S=1, R=1"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

                                      ///// To add more questions, copy the section below 
    {
      question: "A latch is ________ sensitive.",  ///// Write the question inside double quotes
      answers: {
        a: "Edge",                  ///// Write the option 1 inside double quotes
        b: "Level",                  ///// Write the option 2 inside double quotes
        c: "Both level and edge",                  ///// Write the option 3 inside double quotes
        d: "None"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },


   
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////