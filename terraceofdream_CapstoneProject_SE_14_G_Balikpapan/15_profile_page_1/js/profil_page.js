const profilForm = document.getElementById("formProfil");
const inputName = document.getElementById("inputName");
const inputNis = document.getElementById("inputNis");
const inputBirthdate = document.getElementById("inputBirthdate");
const inputEmail = document.getElementById("inputEmail");

const postData = (e) => {
  fetch("URL_SERVER/profile", {
    method: "POST",
    headers: {
      Content_Type: "application/json",
    },
    body: JSON.stringify({
      inputName: inputName.value,
      inputNis: inputNis.value,
      inputBirthdate: inputBirthdate.value,
      inputEmail: inputBirthdate.value,
    }),
  });
};

profilForm.addEventListener("submit", (e) => postData(e));

const getData = async () => {
  const data = await fetch("URL_SERVER/profil").then((res) => res.json());
  console.log("data", data);
};

getData();
