const todolist = ["Belajar HTML", "Belajar CSS", "Belajar JavaScript"];

//Hapus To Do List Sebelumnya Ketika Input
function clearTodolist() {
  const todolistBody = document.getElementById("todolistBody");
  while (todolistBody.firstChild) {
    todolistBody.removeChild(todolistBody.firstChild);
  }
}

//Hapus To Do List Menggunakan Tombol Done
function removeToDoList(index) {
  todolist.splice(index, 1);
  displayToDoList();
}

//Menambahkan To Do List
function addtoDoList(index, todo) {
  const tr = document.createElement("tr");
  const tdButton = document.createElement("td");
  tr.appendChild(tdButton);

  const buttonDone = document.createElement("input");
  buttonDone.type = "button";
  buttonDone.value = "Done";
  buttonDone.className = "px-15";
  buttonDone.onclick = function () {
    removeToDoList(index);
  };
  tdButton.appendChild(buttonDone);

  const tdTodo = document.createElement("td");
  tdTodo.textContent = todo;
  tr.appendChild(tdTodo);

  const todolistBody = document.getElementById("todolistBody");
  todolistBody.appendChild(tr);
}

//Menampilkan To Do List
function displayToDoList() {
  clearTodolist();

  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];

    const searchText = document.getElementById("search").value.toLowerCase();

    if (todo.toLowerCase().includes(searchText)) {
      addtoDoList(i, todo);
    }
  }
}

//Menambah To Do List
document.forms["todoform"].onsubmit = function (event) {
  event.preventDefault();

  const todo = document.forms["todoform"]["todo"].value;
  todolist.push(todo);

  document.forms["todoform"].reset();

  console.info(todolist);
  displayToDoList();
};

//Mencari To Do List
const searchInput = document.getElementById("search");
searchInput.onkeyup = function () {
  displayToDoList();
};

searchInput.onkeydown = function () {
  displayToDoList();
};

displayToDoList();
