let count = 0;
document.getElementById("input-btn").addEventListener("click", function () {
    count++;
    const inputValue = document.getElementById("input-value").value;
 

    const mainContainer = document.getElementById("content-container");
    const tableContainer = document.createElement("tr");
    tableContainer.innerHTML = `
  <th scope="row">${count}</th>
  <td>${inputValue}</td>
  <td>
  <button class="btn btn-danger delete-btn">Delete</button>
  <button class="btn btn-primary done-btn">Done</button>
  </td>
  `;
    mainContainer.appendChild(tableContainer);
    document.getElementById("input-value").value = "";
    const deleteBtn = document.getElementsByClassName("delete-btn");
    for (let button of deleteBtn) {
        button.addEventListener("click", function (event) {
            event.target.parentNode.parentNode.style.display = "none";
            
        })
    };
    mainContainer.appendChild(tableContainer);
    document.getElementById("input-value").value = "";  
    const doneBtn = document.getElementsByClassName("done-btn");

    for (let done of doneBtn) {
        done.addEventListener("click", function (event2) {
            event2.target.parentNode.parentNode.style.textDecoration = "line-through";
            
        });
    }
});