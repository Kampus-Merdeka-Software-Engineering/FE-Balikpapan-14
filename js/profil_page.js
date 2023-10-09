const form = document.getElementById("form")[0];
const inputName = document.getElementById("inputName");
const inputNis = document.getElementById("inputNis");
const inputBirthdate = document.getElementById("inputBirthdate");
const inputEmail = document.getElementById("inputEmail");
const btnSubmit = document.getElementById('buttonSubmit')
const container = document.getElementById('container')

console.log(form);

const postData = (e) => {
  console.log(e);
  e.preventDefault()
  fetch("https://be-balikpapan-14-production-2263.up.railway.app/profile2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify ({
      inputName: inputName.value,
      inputNis: inputNis.value,
      inputBirthdate: inputBirthdate.value,
      inputEmail: inputEmail.value,
    })
  }).then((response) => console.log(response))
    .then(data => {
      window.location.href = "/html/profil_page_2.html"
    })
    .catch((err) => console.log(err))
}

form.addEventListener("submit", (e) => postData(e))

const getData = async () => {
  const data = await fetch("http://localhost:3000/posts").then(res => res.json)
  console.log("data", data)
  data.map(item => {
    const biodata = document.createElement("p")
    biodata.innerText = item.title
    container.appendChild(biodata)
  })
}

getData()
