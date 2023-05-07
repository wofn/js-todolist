// 로컬 스토리지에서 Todo List를 가져옴
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Todo List를 추가하는 함수
function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value.trim();
  if (todoText === "") return;

  todos.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
  todoInput.value = "";
}

// Todo List를 삭제하는 함수
function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

// Todo List를 편집하는 함수
function editTodo(index) {
  const newTodoText = prompt("Edit todo:", todos[index]);
  if (newTodoText === null || newTodoText.trim() === "") return;

  todos[index] = newTodoText.trim();
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

// 키보드의 Enter 키를 눌렀을 때 Todo List를 추가하는 함수
function handleKeydown(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}

// Todo List를 화면에 표시하는 함수
function renderTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");

    const todoText = document.createElement("span");
    todoText.innerText = todo;
    const todoBox = document.createElement("span");
    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerText = "Edit";
    editButton.onclick = () => editTodo(index);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => deleteTodo(index);

    todoBox.appendChild(editButton);
    todoBox.appendChild(deleteButton);

    todoItem.appendChild(todoText);
    //todoItem.appendChild(editButton);
    todoItem.appendChild(todoBox);
    todoList.appendChild(todoItem);
  });
}

// 초기에 Todo List를 화면에 표시함
renderTodos();
