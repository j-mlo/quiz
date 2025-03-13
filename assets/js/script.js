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
    },
    {
        question: "What much excercise do you do on a weekly basis? (i.e. elevating your heart rate)?",
        answer: [
            "4 or more hours",
            "1 - 2 hours",
            "less than 1 hour",
            "None"
        ],
    },
    {
        question: "How much water do you drink daily?",
        answer: [
            "Over 2 litres",
            "1 - 2 litres",
            "Less than 1 litre",
            "I only have other drinks instead (e.g coffee/tea, energy drinks etc)"
        ],
    },
    {
        question: "How much sugar do you consume?",
        answer: [
            "None - I quit sugar altogether",
            "Only on special occasions",
            "Most days",
            "Everyday"
        ],
    },
    {
        question: "Do you regularly take time to be still with yourself (e.g. sitting in silence, journalling, daydreaming...)?",
        answer: [
            "Often",
            "Sometimes",
            "Rarely",
            "Never"
        ],
    },
    {
        question: "What is your average, daily screen time?",
        answer: [
            "8 hours or less",
            "8 - 10 hours ",
            "10 - 12 hours",
            "12 or more hours"
        ],
    },
    {
        question: "How are your relationships with family and friends?",
        answer: [
            "I’m very connected with people in my life, I keep healthy boundaries and communication",
            "I am close to my loved ones but still learning to be assertive yet also vulnerable",
            "I struggle with relational conflict and vulnerability and tend to have surface level relationships",
            "I feel isolated and not able to connect with people around me in any way"
        ],
    },
    {
        question: "Do you belong to a supportive community (e.g. neighbourhood/ social club/ church)?",
        answer: [
            "I belong to a tight knit community who is supportive and respectful",
            "I can depend on some people in my life, but I don’t belong to a community",
            "I am part of a community who is not very supportive or respectful",
            "I don’t have people I can depend on for support"
        ],
    },
    {
        question: "Are you fulfilled in your vocation (e.g. job, parenthood, service)?",
        answer: [
            "I love what I do even despite challenges",
            "I mostly enjoy what I do but dread some of my daily tasks",
            "I don’t like what I do and don’t get energy from it",
            "My current vocation Is causing depression and/or anxiety"
        ],
    },
    {
        question: "Have you found what meaningful life is to you?",
        answer: [
            "Yes, I know how to live meaningfully",
            "I have a good idea of what makes my life meaningful",
            "I haven’t considered what is meaningful to me",
            "I feel lost when it comes to  meaning in my life"
        ],
    },
];

// Getters
const welcome = document.getElementById("welcome");
const quizContent = document.getElementById("quiz");
const progressBar = document.getElementById("progress-bar");

const question = document.getElementById("question");

const answer = document.getElementById("answer");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");

const results = document.getElementById("results");


const categories = ["Excellent", "Good", "Improver", "Intervention"];
let scoreTracker = [0, 0, 0, 0]; 
let questionNumber = 0; 
let quizFinish = false;
let numberOfQuestions = questions.length;



// Functions to hide and show different section of the game
function displayWelcome() {
    welcome.style.display = "block";
    quizContent.style.display = "none";
    results.style.display =  "none";
};

function displayQuiz() {
    welcome.style.display = "none";
    quizContent.style.display = "block";
    results.style.display =  "none";
}

function displayResults() {
    welcome.style.display = "none";
    quizContent.style.display = "none";
    results.style.display =  "block";
}

// GAME FUNCTIONS 
function previousQuestion(e) {
    displayQuiz();

    questionNumber--;
    scoreTracker[selectedOption] = scoreTracker[selectedOption] - 1;
    showQuestion(questionNumber);
}

function startQuiz() {
    displayWelcome();
    questionNumber = 0;
    scoreTracker = [0, 0, 0, 0]; 
    let startButton = document.querySelector(".start-btn");
    startButton.addEventListener("click", showQuestion(questionNumber));
}

/**
 * Loads the question and available answers for selecting
 */
function showQuestion(questionNumber) {
    displayQuiz();

    question.innerHTML = `<h2>${questions[questionNumber].question}</h2>`;
    answer1.innerText = questions[questionNumber].answer[0];
    answer2.innerText = questions[questionNumber].answer[1];
    answer3.innerText = questions[questionNumber].answer[2];
    answer4.innerText = questions[questionNumber].answer[3];
    
    /** 
     * questions.forEach(question => { 
     *  progressBarIndex = progressBar[1]
        let spans = document.querySelectorAll("span");
        for (let i = 0; i ≤ progressBarIndex; i++) {
            spans[i].classList.add("seen");
        }
     });
     */
}

/**
 * Checks response when answer selsected and shows another question if more are available.
 * @param {number} selectedOption 
 */
function checkAnswer(selectedOption) {
    displayQuiz();
    
    scoreTracker[selectedOption] = scoreTracker[selectedOption] + 1;

    if (!quizFinish) {
        questionNumber ++;
        showQuestion(questionNumber);
    } else {
        quizFinish = endOfQuestions();
    }
}

/**
 * Checks if we arrived at the end of the quiz
 * @returns boolean 
 */
function endOfQuestions() {
    displayQuiz();

    questionNumber ++;
    if (questionNumber == numberOfQuestions) {
        showResult(scoreTracker);
    }
}


/**
 * 
 * @param {*} category 
 */
function showResult() {
    displayResults();

    let topScore = Math.max(...scoreTracker);

    document.getElementById("excellent").style.display = scoreTracker[0] === topScore ? "block" : "none";
    document.getElementById("good").style.display = scoreTracker[1] === topScore ? "block" : "none";
    document.getElementById("improver").style.display = scoreTracker[2] === topScore ? "block" : "none";
    document.getElementById("intervention").style.display = scoreTracker[3] === topScore ? "block" : "none";

}


startQuiz();
