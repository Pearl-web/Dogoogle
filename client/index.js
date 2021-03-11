

const form = document.querySelector('form')
const body = document.querySelector('body')
const searchPage = document.getElementById('searchPage')
const resultsPage = document.getElementById('resultsPage')
const resultsSection = document.getElementById('results')









form.addEventListener('submit', DogoogleSearch)




function DogoogleSearch(e){
    e.preventDefault()
    getResults()
    toggle()


}



function getResults(){
    fetch('http://localhost:3000/results')
    .then(res => res.json())
    .then (data => { data.forEach(element => {
        let div = document.createElement('div')
        div.textContent = element.heading + element.url + element.desc
        resultsSection.appendChild(div)

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