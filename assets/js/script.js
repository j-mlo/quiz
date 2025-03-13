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

/**
 * Shows the welcome paragraph and hides questions and resutls sections
 */
function welcomePage() {
    quizContent.style.visibility = "hidden";
    results.style.visibility = "hidden";
    let startButton = document.querySelector("#start-btn");
    startButton.addEventListener("click", showQuestion())
}

/**
 * Loads the question and available answers for selecting
 */
function showQuestion() {
    welcome.style.visibility = "hidden";
    results.style.visibility = "hidden";
    quizContent.style.visibility = "visible";

    question.innerText = questions[questionNumber].question;
    answer1.innerText = questions[questionNumber].answer[0];
    answer2.innerText = questions[questionNumber].answer[1];
    answer3.innerText = questions[questionNumber].answer[2];
    answer4.innerText = questions[questionNumber].answer[3];
}

welcomePage();