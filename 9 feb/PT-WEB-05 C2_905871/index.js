
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  let _name = document.getElementById('name').value;
  let docID = document.getElementById('docID').value;
  let dept = document.getElementById('dept').value;
  let exp = document.getElementById('exp').value;
  let email = document.getElementById('email').value;
  let number = document.getElementById('mbl').value; 

  let role = getRole(exp);

  let tbody = document.querySelector('tbody');


  let newRow = document.createElement('tr');
  newRow.innerHTML = `
      <td>${_name}</td>
      <td>${docID}</td>
      <td>${dept}</td>
      <td>${exp}</td>
      <td>${email}</td>
      <td>${number}</td>
      <td>${role}</td>
      <td><button class="delete-btn">Delete</button></td>
  `;
  tbody.appendChild(newRow);

  
  document.querySelector('form').reset();
});


function getRole(exp) {
  if (exp > 5) {
      return 'Senior';
  } else if (exp >= 2) {
      return 'Junior';
  } else {
      return 'Trainee';
  }
}


document.querySelector('tbody').addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
      event.target.closest('tr').remove(); 
  }
});