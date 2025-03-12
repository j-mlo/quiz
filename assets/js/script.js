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

const categories = ["Excellent", "Good", "Can be improved", "Intervention"];
let scoreTracker = [0, 0, 0, 0];

// Getters
const progress = document.getElementById("progress");
const question = document.getElementById("question");

const answer = document.getElementById("answer");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");

const results = document.getElementById("results");
const welcome = document.getElementById("welcome");