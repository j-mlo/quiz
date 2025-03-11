const questions = [
    {
        question: "How many hours do you sleep at night on average?"
        answer: [
            {text: "8 or more hours" category: "Excellent"}
            {text: "7 - 8 hours" category: "Good" }
            {text: "6 - 7 hours" category: "Can be improved"}
            {text: "6 or less hours" category: "Intervention"}
        ]

        question: "What much excercise do you do on a weekly basis? (i.e. elevating your heart rate)?"
        answer: [
            {text: "4 or more hours" category: "Excellent"}
            {text: "1 - 2 hours" category: "Good" }
            {text: "less than 1 hour" category: "Can be improved"}
            {text: "None" category: "Intervention"}
        ]

        question: "Do you regularly take time to check in with yourself, e.g. sitting in silence, journalling, daydreaming...?"
        answer: [
            {text: "Often" category: "Excellent"}
            {text: "Sometimes" category: "Good" }
            {text: "Rarely" category: "Can be improved"}
            {text: "Never" category: "Intervention"}
        ]

    }
];

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const progress = document.getElementById("progress");

