// Questions
const questions = [
    {
        question: "How many hours do you sleep at night on average?",
        answer: [
            "8 or more hours",
            "7 - 8 hours",
            "6 - 7 hours",
            "6 or less hours"
        ],

        question: "What much excercise do you do on a weekly basis? (i.e. elevating your heart rate)?",
        answer: [
            "4 or more hours",
            "1 - 2 hours",
            "less than 1 hour",
            "None"
        ],

        question: "Do you regularly take time to check in with yourself, e.g. sitting in silence, journalling, daydreaming...?",
        answer: [
            "Often",
            "Sometimes",
            "Rarely",
            "Never"
        ]

    }
];

// Getters
const quizContent = document.getElementById("quiz");
const progress = document.getElementById("progress");
const question = document.getElementById("question");

const answer = document.getElementById("answer");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");

const results = document.getElementById("results");
const welcome = document.getElementById("welcome");


const categories = ["Excellent", "Good", "Can be improved", "Intervention"];
let scoreTracker = [0, 0, 0, 0]; 
let questionNumber = 0;
let quizFinish = false;
let numberOfQuestions = questions.length;

/**
 * Shows the welcome paragraph and hides questions and resutls sections
 */
function welcomePage() {
    quizContent.style.display = "none";
    results.style.display =  "none";
    let startButton = document.querySelector("#start-btn");
    startButton.addEventListener("click", showQuestion(questionNumber))
}

/**
 * Loads the question and available answers for selecting
 */
function showQuestion(questionNumber) {
    welcome.style.display = "none";
    results.style.display = "none";
    quizContent.style.display = "block";

    question.innerText = questions[questionNumber].question;
    answer1.innerText = questions[questionNumber].answer[0];
    answer2.innerText = questions[questionNumber].answer[1];
    answer3.innerText = questions[questionNumber].answer[2];
    answer4.innerText = questions[questionNumber].answer[3];
    
}

/**
 * Checks response when answer selsected and shows another question if more are available.
 * @param {number} selectedOption 
 */
function checkAnswer(selectedOption) {
    welcome.style.display = "none";
    results.style.display = "none";
    quizContent.style.display = "block";

    scoreTracker[selectedOption] = scoreTracker[selectedOption] + 1;
    quizFinish = endOfQuestions();
    if (!quizFinish) {
        questionNumber++;
        showQuestion(questionNumber);
    };
}

/**
 * 
 * @returns 
 */
function endOfQuestions() {
    questionNumber ++;
    return questionNumber == numberOfQuestions;
    
    welcome.style.display = "none";
    results.style.display = "none";
    quizContent.style.display = "block";
}


welcomePage();