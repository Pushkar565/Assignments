document.getElementById('SearchBtn').addEventListener('click',function(){

  let query = document.getElementById('Search-box').value;
  let url = `https://www.omdbapi.com/?i=tt3896198&apikey=8aa3b20a&s=${query}`

  fetch(url)
  .then((response)=>{
    return response.json();
  })
  .then((data) =>{
    console.log(data.Search)
    if(data.Response == 'True'){
      displayMovieInfo(data.Search)
    }
    else{
      throw new Error(data.Error)
    }
  })
  .catch((error)=>{
    console.error('There is a error in fetch' ,error)
    alert('Error :'+ error.message)

  })

 })

 function displayMovieInfo(movieData){
  let movieContainer = document.getElementById('movie-info');
  movieContainer.innerHTML = '';

  movieData.forEach((movie)=>{
   
    let title = document.createElement('h2')
    title.innerHTML = `Movie Name: ${movie.Title}`
    
    let type = document.createElement('p')
    type.textContent = `Type: ${movie.Type}`

    let year = document.createElement('p')
    year.textContent = `Year: ${movie.Year}`

    let poster = document.createElement('img')
    poster.src = movie.Poster

    let hr = document.createElement('hr')

    movieContainer.append(title,type,year,poster,hr)

  })
 }