const form= document.getElementsByClassName('form')[0];
const question= document.getElementById('question');
const deadline= document.getElementById('deadline');
const subject= document.getElementById('subject');
const message= document.getElementById('message');
const linkFile= document.getElementById('linkFile');
const forPersonal= document.getElementById('forPersonal')
const back= document.getElementById('back');
const send= document.getElementById('send');
const container= document.getElementById('container');
console.log(form);
const postData = (e) => {
    console.log(e);
    e.preventDefault()
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify ({
            question: question.value,
            deadline: deadline.value,
            subject: subject.value,
            message: message.value,
            linkFile: linkFile.value,
        })
    }).then((response) => console.log(response))
    .catch((err) => console.log(err))
}

form.addEventListener('submit', (e) => postData(e));

const getData= async() => {
    const data = await fetch ('http://localhost:3000/posts'). then (res => res.json)
    console.log('data', data);
    data.map(item => 
        {const assignment= document.createElement('p')
    assignment.innerText= item.title
    container.appendChild(assignment)})
}