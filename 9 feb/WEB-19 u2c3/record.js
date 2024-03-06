document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const tbody = document.querySelector("tbody");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

 
    const name = document.getElementById("name").value;
    const employeeID = document.getElementById("employeeID").value;
    const department = document.getElementById("department").value;
    const experience = document.getElementById("exp").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mbl").value;

  
    let role;
    if (experience > 5) {
      role = "Senior";
    } else if (experience >= 2 && experience <= 5) {
      role = "Junior";
    } else {
      role = "Fresher";
    }

    
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${employeeID}</td>
      <td>${department}</td>
      <td>${experience}</td>
      <td>${email}</td>
      <td>${mobileNumber}</td>
      <td>${role}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;

    tbody.appendChild(newRow);

   
    form.reset();
  });

  tbody.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      event.target.closest("tr").remove();
    }
  });

  const filterSelect = document.getElementById("filter-department");
  filterSelect.addEventListener("change", function () {
    const selectedDepartment = this.value;
    const rows = tbody.querySelectorAll("tr");

    rows.forEach(function (row) {
      const departmentCell = row.querySelector("td:nth-child(3)");
      if (selectedDepartment === "All" || departmentCell.textContent === selectedDepartment) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
});
