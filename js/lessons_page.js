document.addEventListener("DOMContentLoaded", () => {
    const userDataContainer = document.getElementById("userData")

    const apiUrl = 'https://be-balikpapan-14-production-2263.up.railway.app/lessons'
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

        let html = `<div class="main-box">`

            lessons.forEach(lessons => {
                html +=
                `<div class="main-form" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"><img src="${lessons.image}"></img>
                <h3>${lessons.nama_mapel}</h3>
                <button type="submit"><a href="${lessons.module}" download="">Download</a></button>
                </div>
                `
            })

            html += `</div>`

            userDataContainer.innerHTML = html
    })
})