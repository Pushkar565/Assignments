document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('userDataForm');
  const displayArea = document.getElementById('displayArea');

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const userData = {
          name: name,
          age: age
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      form.reset();
  });

  document.getElementById('retrieveDataBtn').addEventListener('click', function() {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (userData) {
          displayUserData(userData);
      } else {
          displayArea.innerHTML = '<p>No user data found.</p>';
      }
  });

  function displayUserData(userData) {
      const table = document.createElement('table');
      table.innerHTML = `
          <tr>
              <th>Name</th>
              <th>Age</th>
          </tr>
          <tr>
              <td>${userData.name}</td>
              <td>${userData.age}</td>
          </tr>
      `;
      displayArea.innerHTML = '';
      displayArea.appendChild(table);
  }
});
