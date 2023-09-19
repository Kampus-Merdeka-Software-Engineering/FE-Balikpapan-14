const form= document.getElementsByClassName('form');
const assignment= document.getElementById('assignment');
const question= document.getElementById('question');
const deadline= document.getElementById('deadline');
const subject= document.getElementById('subject');
const answer= document.getElementById('answer');
const linkFile= document.getElementById('linkFile');
const forPersonal= document.getElementById('forPersonal');
const back= document.getElementById('back');
const send= document.getElementById('send');
const container= container.getElementById('container')

const postData = (e) => {
    e.preventDefault()
    fetch('http://localhost:5500/terraceofdream_CapstoneProject_SE_14_G_Balikpapan/14_assignment_page_2', {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify {{
            assignment: assignment.value,
            question: question.value,
            deadline: deadline.value,
            subject: subject.value,
            answer: answer.value,
            linkFile: linkFile.value,
            forPersonal: forPersonal.value
        }}
    }).then( ()=> getData())
}
form.addEventListener('send', (e)=>postData (e))

const getData= async() -> {
    const data = await fetch ('http://localhost:5500/terraceofdream_CapstoneProject_SE_14_G_Balikpapan/14_assignment_page_2'). then (res => res.json)
    console.log('data', data);
    data.map(item => 
        {const assignment= document.createElement('p')
    assignment.innerText= item.title
    container.appendChild(assignment)})
}