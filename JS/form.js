document.getElementById('submit-btn').addEventListener('click', calculateScore);

function calculateScore() {
    const correctAnswers = {
        q1: "b",  // JavaScript
        q2: "c",  // Dart
        q3: "a",  // Internet of Things
        q4: "c",  // Both A and B
        q5: "b",  // Hyper Text Markup Language
        q6: "b",  // Cascading Style Sheets
        q7: "a",  // Git
        q8: "b",  // Swift
        q9: "c",  // Both A and B
        q10: "c", // Node.js
        q11: "a", // Java
        q12: "a", // AWS
        q13: "c", // Firestore
        q14: "a", // Application Programming Interface
        q15: "c", // Both A and B
    };

    let score = 0;
    let answersList = [];
    let totalQuestions = 15;

    for (let question in correctAnswers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    document.getElementById("score").textContent = `Your score: ${score} out of ${totalQuestions}`;

    for (let question in correctAnswers) {
        const correctAnswer = correctAnswers[question];
        answersList.push(`<li>Question ${question.substring(1)}: ${correctAnswer}</li>`);
    }

    document.getElementById("correct-answers").innerHTML = answersList.join('');
    document.getElementById("score-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("score-modal").style.display = "none";
}


