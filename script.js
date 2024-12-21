const back = document.getElementById("back");
const form = document.querySelector("form");
const title = form.elements["title"];
const author = form.elements["author"];
const isbn = form.elements["isbn"];
const submitBtn = document.getElementById("btn");
form.addEventListener("submit", addBook);
//submitBtn.addEventListener("click", addBook);
const tableDiv = document.createElement("div");
const table = createTable("Title", "Author", "ISBN");
tableDiv.appendChild(table);
const tblDiv = document.getElementById("tblDiv");
tblDiv.appendChild(tableDiv);

back.addEventListener("click", goBack);
back.classList.add("backButton");

function goBack() {
  window.history.back();
}

//window.alert("Welcome to Book Keeper!!");
let w = window.innerWidth;
let h = window.innerHeight;
console.log(w);
console.log(h);

function addBook(event) {
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
  title.value = "";
  author.value = "";
  isbn.value = "";
  event.preventDefault();
}

function validateTitle() {
  if (title.value == "") {
    alert("Please provide book title");
    title.focus();
    return false;
  } else if (title.value.length < 3) {
    window.alert("Title should be atleast 3 characters long");
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
  //localStorage.setItem("list", JSON.stringify(bookList));
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.textContent = title;
  const td1 = document.createElement("td");
  td1.textContent = author;
  const td2 = document.createElement("td");
  td2.textContent = isbn;
  const td3 = document.createElement("td");
  //   td3.innerHTML = `<button class="delete">-</button>`;
  td3.innerHTML = `<i class="fa fa-trash-o delete" style="font-size:24px"></i>`;
  table.appendChild(tr);
  tr.appendChild(td);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  table.appendChild(tr);
  tr.classList.add("trclass");
  console.log(table, "add row to table");

  //console.log(JSON.parse(localStorage.getItem("list")));
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
}

function deleteRecord(event) {
  // console.log(event.target.textContent, "====enet target");
  //if (event.target.innerHTML === "-") {
  console.log(event.target.parentElement.parentElement, " parent");
  event.target.parentElement.parentElement.remove();
  //}
}
function del() {
  const deleteBtn = document.querySelectorAll(".delete");

  //Iterate over a collection of elements to accomplish some task.
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", deleteRecord);
  }
}
tableDiv.addEventListener("click", deleteRecord);

//HTML templating with the cloneNode method to create templated content.

function addTemplate() {
  const template = document.getElementById("bookTemplate");
  const clone = template.cloneNode(true);
  const frm = document.getElementById("cloneTemplate");
  frm.innerHTML = clone.innerHTML;
}
addTemplate();

// window.setInterval(() => {
//   console.log("hiiii");
// }, 3000);
//Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).

const list = ["First Book", "Second Book"];
defineRelationShip();
function defineRelationShip() {
  const node = document.querySelector("#first ul");
  console.log(node);
  console.log(node.firstChild, " first child");
  console.log(node.lastChild, " last child");
  console.log(node.parentNode);
  console.log(node.nextElementSibling);
  console.log(table, " table===");
  document.getElementById("one").innerHTML =
    table.firstChild.firstChild.textContent;
  document.getElementById("two").innerHTML = table.lastChild.textContent;
  document.getElementById("three").innerHTML = table.parentNode.textContent;
  const template = document.getElementById("cloneTemplate");
  document.getElementById("four").innerHTML =
    form.nextElementSibling.textContent;
  console.log(table.firstChild, " first child");
  console.log(table.lastChild, " last child");
  console.log(table.parentNode);
  console.log(template.nextElementSibling);
}
defineRelationShip();
