// use api.

const displayEl = document.querySelector('#display');
const btnEl = document.querySelector('#btn');

async function apiCall (){
   await fetch('https://randomuser.me/api/?result=5')
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data.results[0].name.first);
                const personEl = document.createElement('span');
                personEl.textContent = data.results[0].name.first
                displayEl.appendChild(personEl)
            });
}

btnEl.addEventListener('click', ()=>{
    apiCall();
})