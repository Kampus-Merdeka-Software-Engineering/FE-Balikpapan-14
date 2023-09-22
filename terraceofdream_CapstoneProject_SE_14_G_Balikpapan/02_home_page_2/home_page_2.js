const highScoresList = document.getElementById("highScoresList");
// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// highScoresList.innerHTML = highScores
//   .map(score => {
//     return `<li class="high-score">${score.name} - ${score.score}</li>`;
//   })
//   .join("");

  fetch('http://localhost:3000/score', {
        method: 'GET'
    })

  .then(
    (Response)=>Response.json()
  )

  .then(
    (data)=>console.log(data)
  )