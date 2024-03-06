document.getElementById('fetchBtn').addEventListener('click', function(){
  fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
      displayUsers(data.data);
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
});


function displayUsers(users) {
  const usersContainer = document.getElementById('usersContainer');
  usersContainer.innerHTML = '';

  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');

    const avatar = document.createElement('img');
    avatar.src = user.avatar;
    avatar.alt = user.first_name + ' ' + user.last_name;
    avatar.classList.add('user-avatar');

    const userInfo = document.createElement('div');
    userInfo.classList.add('user-info');

    const userName = document.createElement('h3');
    userName.textContent = user.first_name + ' ' + user.last_name;

    const userEmail = document.createElement('p');
    userEmail.textContent = user.email;

    userInfo.appendChild(avatar);
    userInfo.appendChild(userName);
    userInfo.appendChild(userEmail);

    userCard.appendChild(userInfo);
    usersContainer.appendChild(userCard);
  });
}
