

const form = document.querySelector('form')
const body = document.querySelector('body')
const searchPage = document.getElementById('searchPage')
const resultsPage = document.getElementById('resultsPage')
const resultsSection = document.getElementById('results')
const button = document.getElementById('button')



form.addEventListener('submit', DogoogleSearch)
button.addEventListener('click', randomSearch)


function randomSearch(){
    fetch('http://localhost:3000/results/random')
        .then(res => res.json())
        .then (link => location.href = link.url)
}



function DogoogleSearch(e){
    e.preventDefault()
    getResults()
    toggle()
}


function getResults(){
    fetch('http://localhost:3000/results')
    .then(res => res.json())
    .then (data => { data.forEach(element => {
        const div = document.createElement('div')
        resultsSection.appendChild(div)
        const website = document.createElement('h3')
        website.textContent = element.url
        div.appendChild(website)
        const link = document.createElement('a')
        link.setAttribute('href',element.url)
        const title = document.createElement('h2')
        title.textContent = element.heading
        div.appendChild(link)
        link.appendChild(title)
        const description = document.createElement('p')
        description.textContent = element.desc
        div.appendChild(description)
     
        })
    })
}



function toggle(){ 
    if (searchPage.style.display === 'none'){
        searchPage.style.display = 'block';
        resultsPage.style.display ='none'       
    }
    else{
        searchPage.style.display = 'none';
        resultsPage.style.display ='block';
    }
}