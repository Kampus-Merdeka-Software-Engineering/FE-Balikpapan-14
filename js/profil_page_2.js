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

        let html = "<section>"

            profile.forEach(profile => {
                html +=
                `
                <div class="name">
          <p class="parName">Full Name</p>
          <span class="spanName">${profile.full_name}</span>
          </div>
                <div class="nis">
          <p class="parNis">NISN</p>
          <span class="spanNis">${profile.nisn}</span>
        </div>
                
        <div class="birthDate">
          <p class="parBirthdate">Birth Date</p>
          <span class="spanBirthdate">${profile.birthdate}</span>
        </div>
                    
        <div class="email">
          <p class="parEmail">Email</p>
          <span class="spanEmail">${profile. email}</span>
        </div>`
            })

            html += "</section>"

            userDataContainer.innerHTML = html
    })
})