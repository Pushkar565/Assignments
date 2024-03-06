let userData = document.getElementById('FetchBtn')

userData.addEventListener('click', function(){

  let fetch_url = fetch('https://reqres.in/api/users')
  fetch_url.then(function(res){
    return res.json()
  })
  
  .then(function(res){
    console.log(res.data)
  })
  
  
})

function displayData(){
  let div = document.createElement('div')
  
}

