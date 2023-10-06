const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const form = document.getElementById('formScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

form.addEventListener('submit', function(e){
    // e.preventDefault()
    // console.log(mostRecentScore);
    // console.log(username.value);

    const d = new Date();

    fetch('http://localhost:4000/score', {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            id : d.getTime(),
            nilai : mostRecentScore,
            nama : username.value
        })
    })
})

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};
