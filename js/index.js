// const highScoresList = document.getElementById("highScoresList");
// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// highScoresList.innerHTML = highScores
//   .map(score => {
//     return `<li class="high-score">${score.name} - ${score.score}</li>`;
//   })
//   .join("");

  // fetch('http://localhost:3000/score', {
  //       method: 'GET'
  //   })

  // .then(
  //   (Response)=>Response.json()
  // )

  // .then(
  //   (data)=>console.log(data)
  // )

  document.addEventListener("DOMContentLoaded", () => {
    const userDataContainer = document.getElementById("userData")

    const apiUrl = 'https://be-balikpapan-14-production-2263.up.railway.app/'
    fetch(apiUrl).then(
        response => {
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            return response.json()
        }
    ).then (data => {
        console.log(data)
        const mahasiswa = data.data;

        let html = "<table>"
            html += "<tr><th>Rank</th><th>Username</th><th>Score</th></tr>"

            mahasiswa.forEach(mahasiswa => {
                html +=
                `<tr>
                    <td><img class="medal_js" src="${mahasiswa.medal}"></img></td>
                    <td>${mahasiswa.nama}</td>
                    <td>${mahasiswa.nilai}</td>
                </tr>`
            })

            html += "</table>"

            userDataContainer.innerHTML = html
    })
})