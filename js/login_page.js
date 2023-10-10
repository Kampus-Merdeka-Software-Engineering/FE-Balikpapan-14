const form= document.getElementsByClassName('form')[0];
const email = document.getElementById('email');
const password = document.getElementById('password');
const Login = document.getElementById('Login')
// const LoginWithGoogle = document.getElementById('LoginWithGoogle')
// const Register = document.getElementById('Register')

console.log(form)

const postData = (e) => {
  console.log(e);
  e.preventDefault()
  fetch('https://be-balikpapan-14-production-2263.up.railway.app/login', {
      method: 'POST',
      headers: {
          "Content-Type" : "application/json",
      },
      body: JSON.stringify ({
          email: email.value,
          password: password.value,
      })
  }).then((response) => console.log(response))
  .then(data => {
      window.location.href= "../04_login_page/html/login_page.html"
  })
  .catch((err) => console.log(err))
}

form.addEventListener('submit', (e)=> postdata(e))

// const getData= async() => {
//   const data = await fetch ('http://localhost:3000/Post'). then (res => res.json)
//   console.log('data', data);
//   data.map(item => 
//       {const assignment= document.createElement('p')
//   assignment.innerText= item.title
//   container.appendChild(assignment)
// })
// }

getData()