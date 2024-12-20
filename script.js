const back = document.getElementById("back");
const form = document.querySelector("form");
const title = form.elements["title"];
const author = form.elements["author"];
const isbn = form.elements["isbn"];
const submitBtn = document.getElementById("btn");
submitBtn.addEventListener("click", addBook);
const tableDiv = document.createElement("div");
const table = createTable("Title", "Author", "ISBN");
tableDiv.appendChild(table);
const tblDiv = document.getElementById("tblDiv");
tblDiv.appendChild(tableDiv);

back.addEventListener("click", goBack);
back.classList.add("backButton");

function goBack(e) {
  window.history.back();
}

//window.alert("Welcome to Book Keeper!!");
let w = window.innerWidth;
console.log(w);

function addBook(event) {
  console.log(event);
  const titleVal = validateTitle();
  if (titleVal === false) {
    event.returnValue = false;
    return false;
  }
  const authorVal = validateAuthor();
  if (authorVal === false) {
    event.returnValue = false;
    return false;
  }
  const isbnVal = validateISBN();
  if (isbnVal === false) {
    event.returnValue = false;
    return false;
  }

  addRowToTable(table, title.value, author.value, isbn.value);
  event.preventDefault();
}

function validateTitle() {
  if (title.value == "") {
    alert("Please provide book title");
    title.focus();
    return false;
  }
  return title.value;
}

function validateAuthor() {
  console.log("author");
  if (author.value == "") {
    alert("Please provide book author");
    author.focus();
    return false;
  }
  return author.value;
}

function validateISBN() {
  console.log("isbn");
  if (isbn.value == "") {
    alert("Please provide book ISBN");
    isbn.focus();
    return false;
  }
  return isbn.value;
}

function createTable(title, author, isbn) {
  const table = document.createElement("table");
  table.classList.add("tbl");
  const tr = document.createElement("tr");
  const td = document.createElement("th");
  td.textContent = "Title";
  const td1 = document.createElement("th");
  td1.textContent = "Author";
  const td2 = document.createElement("th");
  td2.textContent = "ISBN";
  const td3 = document.createElement("th");
  td3.textContent = "Delete";
  table.appendChild(tr);
  tr.appendChild(td);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.classList.add("trclass");
  return table;
}

const bookList = [];
function addRowToTable(table, title, author, isbn) {
  const temp = { title: title, author: author, isbn: isbn };
  bookList.push(temp);
  localStorage.setItem("list", JSON.stringify(bookList));
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.textContent = title;
  const td1 = document.createElement("td");
  td1.textContent = author;
  const td2 = document.createElement("td");
  td2.textContent = isbn;
  const td3 = document.createElement("td");
  td3.innerHTML = `<button class="delete">-</button>`;

  table.appendChild(tr);
  tr.appendChild(td);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  table.appendChild(tr);
  tr.classList.add("trclass");
  console.log(table, "add row to table");
  console.log(JSON.parse(localStorage.getItem("list")));
  //del();
  return table;
}

const toggleBg = document.getElementById("toggle");

toggleBg.addEventListener("click", changeBgColor);

function changeBgColor(event) {
  console.log(event.target);
  if (event.target.classList.contains("dark")) {
    console.log(event.target);
    event.target.classList.add("light");
    event.target.classList.remove("dark");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else if (event.target.classList.contains("light")) {
    event.target.classList.remove("light");
    event.target.classList.add("dark");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }

  //   const bgColor = document.body.style.backgroundColor;
  //   const colour = document.body.style.color;
  //   if (bgColor === "black" && colour === "white") {
  //     document.body.style.backgroundColor = "white";
  //     document.body.style.color = "black";
  //   } else {
  //     document.body.style.backgroundColor = "black";
  //     document.body.style.color = "white";
  //   }
}

//deleteBtn.addEventListener("click", deleteRecord);

function deleteRecord(event) {
  console.log(event.target, "====enet target");
  if (event.target.innerHTML === "-") {
    console.log(event.target.parentElement.parentElement.remove(), " parent");
  }
}
function del() {
  console.log("---------hi");
  const deleteBtn = document.querySelectorAll(".delete");
  console.log(deleteBtn);
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", deleteRecord);
  }
}
tableDiv.addEventListener("click", deleteRecord);
