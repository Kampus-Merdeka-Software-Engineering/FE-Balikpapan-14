  document.addEventListener("DOMContentLoaded", () => {
    const userDataContainer = document.getElementById("userData")

    const apiUrl = 'http://localhost:4000/profile'
    fetch(apiUrl).then(
        response => {
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            return response.json()
        }
    ).then (data => {
        console.log(data)
        const profile = data.data;

        let html = "<table>"
            html += "<tr><th>Full Name</th><th>NISN</th><th>Birth Date</th><th>Email</th></tr>"

            profile.forEach(profile => {
                html +=
                `<tr>
                    <td>${profile.full_name}</td>
                    <td>${profile. nisn}</td>
                    <td>${profile.birthdate}</td>
                    <td>${profile. email}</td>
                </tr>`
            })

            html += "</table>"

            userDataContainer.innerHTML = html
    })
})