// // source 1
// // Question
// const Questions = [{
// 	q: "What is capital of India?",
// 	a: [{ text: "Gandhinagar", isCorrect: false },
// 	{ text: "Surat", isCorrect: false },
// 	{ text: "Delhi", isCorrect: true },
// 	{ text: "Mumbai", isCorrect: false }
// 	]

// },
// {
// 	q: "What is the capital of Thailand?",
// 	a: [{ text: "Lampang", isCorrect: false, isSelected: false },
// 	{ text: "Phuket", isCorrect: false },
// 	{ text: "Ayutthaya", isCorrect: false },
// 	{ text: "Bangkok", isCorrect: true }
// 	]

// },
// {
// 	q: "What is the capital of Gujarat",
// 	a: [{ text: "Surat", isCorrect: false },
// 	{ text: "Vadodara", isCorrect: false },
// 	{ text: "Gandhinagar", isCorrect: true },
// 	{ text: "Rajkot", isCorrect: false }
// 	]

// }

// ]

// //menghitung question & score
// let currQuestion = 0
// let score = 0

// function loadQues() {
// 	const question = document.getElementById("ques")
// 	const opt = document.getElementById("opt")

// 	question.textContent = Questions[currQuestion].q;
// 	opt.innerHTML = ""

// 	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
// 		const choicesdiv = document.createElement("div");
// 		const choice = document.createElement("input");
// 		const choiceLabel = document.createElement("label");

// 		choicesdiv.className = "class-label";

// 		choice.type = "radio";
// 		choice.name = "answer";
// 		choice.value = i;

// 		choiceLabel.textContent = Questions[currQuestion].a[i].text;

// 		choicesdiv.appendChild(choice);
// 		choicesdiv.appendChild(choiceLabel);
// 		opt.appendChild(choicesdiv);
// 	}
// }

// loadQues();

// // function loadConfirm() {
// // 	const totalScore = document.getElementById("confirm")
// // 	totalScore.textContent = `If ur answer is correct klik finish`
// // }

// function loadScore() {
// 	const totalScore = document.getElementById("score")
// 	totalScore.textContent = `${score} / ${Questions.length}`
// }

// function nextQuestion() {
// 	if (currQuestion < Questions.length - 1) {
// 		currQuestion++;
// 		loadQues();
// 	} else {
// 		document.getElementById("opt").remove()
// 		document.getElementById("ques").remove()
// 		document.getElementById("btn").remove()
// 		loadScore();
// 	}
// }

// function checkAns() {
// 	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

// 	if (Questions[currQuestion].a[selectedAns].isCorrect) {
// 		score++;
// 		console.log("Correct")
// 		nextQuestion();
// 	} else {
// 		nextQuestion();
// 	}
// }
// // end source 1

// source 2
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];

fetch(
    'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
)
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question,
            };

            const answerChoices = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerChoices.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.correct_answer
            );

            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
            });

            return formattedQuestion;
        });

        startGame();
    })
    .catch((err) => {
        console.error(err);
    });

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
    game.classList.remove('hidden');
    loader.classList.add('hidden');
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('/html/score_page.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};
// end source 2