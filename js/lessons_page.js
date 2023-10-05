document.addEventListener("DOMContentLoaded", () => {
    const userDataContainer = document.getElementById("userData")

    const apiUrl = 'http://localhost:4000/lessons'
    fetch(apiUrl).then(
        response => {
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            return response.json()
        }
    ).then (data => {
        console.log(data)
        const lessons = data.data;

        let html = "<table>"
            html += "<tr><th>img</th><th>mapel</th><th>module</th></tr>"

            lessons.forEach(lessons => {
                html +=
                `<tr>
                    <td>${lessons.image}</td>
                    <td>${lessons.nama_mapel}</td>
                    <td>${lessons.module}</td>
                </tr>`
            })

            html += "</table>"

            userDataContainer.innerHTML = html
    })
})