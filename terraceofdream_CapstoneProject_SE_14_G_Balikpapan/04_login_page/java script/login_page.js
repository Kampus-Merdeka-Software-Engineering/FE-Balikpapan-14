const message = document.getElementById('message')
const password = document.getElementById('password')
const forpersonal = document.getElementById('forpersonal')

console.log(message)
console.log(password)
console.log(forpersonal)

.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }