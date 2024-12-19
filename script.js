const form = document.querySelector("form");
const title = form.elements["title"];
const author = form.elements["author"];
const isbn = form.elements["isbn"];
const submitBtn = document.getElementById("btn");
submitBtn.addEventListener("click", addBook);
const tableDiv = document.createElement("div");
const table = createTable("Title", "Author", "ISBN");
tableDiv.appendChild(table);
tblDiv.appendChild(tableDiv);

function addBook(event) {
  console.log(event);
  console.log(title.value);
  console.log(author.value);
  console.log(isbn.value);
  addRowToTable(table, title.value, author.value, isbn.value);
  event.preventDefault();
}

function createTable(title, author, isbn) {
  const table = document.createElement("table");
  table.classList.add("tbl");
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.textContent = "Title";
  const td1 = document.createElement("td");
  td1.textContent = "Author";
  const td2 = document.createElement("td");
  td2.textContent = "ISBN";
  const td3 = document.createElement("td");
  td3.textContent = "Delete";
  table.appendChild(tr);
  tr.appendChild(td);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  return table;
}

function addRowToTable(table, title, author, isbn) {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.textContent = title;
  const td1 = document.createElement("td");
  td1.textContent = author;
  const td2 = document.createElement("td");
  td2.textContent = isbn;
  const td3 = document.createElement("td");
  td3.innerHTML = "<button>+</button>";
  table.appendChild(tr);
  tr.appendChild(td);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  table.appendChild(tr);
  console.log(table, "add row to table");
  return table;
}

const toggleBg = document.getElementById("toggle");
toggleBg.addEventListener()
