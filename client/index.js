

const form = document.querySelector('form')
const body = document.querySelector('body')









form.addEventListener('submit', DogoogleSearch)




function DogoogleSearch(e){
    e.preventDefault()
    toggle()


}


function toggle(){
    const searchPage = document.getElementById('searchPage')
    const resultsPage = document.getElementById('resultsPage')
 
    if (searchPage.style.display === 'none'){
        searchPage.style.display = 'block';
        
    }

    else{
        searchPage.style.display = 'none';
    }


}