  document.addEventListener("DOMContentLoaded", () => {
    const userDataContainer = document.getElementById("userData")

    const apiUrl = 'http://localhost:4000/assignment1'
    fetch(apiUrl).then(
        response => {
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            return response.json()
        }
    ).then (data => {
        console.log(data)
        const assignment1 = data.data;

        let html = "<table>"
            html += "<tr><th>Assignment</th><th>Deadline</th><th>Date Modified</th><th>Grade</th><th>Status</th></tr>"

            assignment1.forEach(assignment1 => {
                html +=
                `<tr class="table_line3">
                    <td>${assignment1.assignment}</td>
                    <td>${assignment1.deadline}</td>
                    <td>${assignment1.date_modified}</td>
                    <td>${assignment1.grade}</td>
                    <td><button><a href="../html/assignment_page_2.html">${assignment1.status}</a></button></td>
                </tr>`
            })

            html += "</table>"

            userDataContainer.innerHTML = html
    })
})