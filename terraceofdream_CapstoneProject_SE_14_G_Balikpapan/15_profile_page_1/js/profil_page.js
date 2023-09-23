const profilForm = document.querySelectorAll(".formProfil");
const inputName = document.getElementById("inputName");
const inputNis = document.getElementById("inputNis");
const inputBirthdate = document.getElementById("inputBirthdate");
const inputEmail = document.getElementById("inputEmail");

profilForm.addEventListener("sumbit", function (e) {
  e.preventDeafult();

  const inputName = inputName.value;
  const inputNis = inputNis.value;
  const inputBirthdate = inputBirthdate.value;
  const inputEmail = inputEmail.value;
});

const postData = async (e) => {
    e.preventDeafult()
    const response = await fetch('URL_SERVER/profil_page',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        }
        body: JSON.stringify("profilForm")
    })
}