const form = document.getElementById("form")
const input = document.getElementById("input")
const todosUL = document.getElementById("todos")

const todos = JSON.parse(localStorage.getItem("todos"))

const updateLocalStorage = () => {
  todosEl = document.querySelectorAll("li")

  const todos = []

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    })
  })

  localStorage.setItem("todos", JSON.stringify(todos))
}

const addTodo = (todo) => {
  let todoText = input.value

  if (todo) {
    todoText = todo.text
  }

  if (todoText) {
    const todoEl = document.createElement("li")

    if (todo && todo.completed) {
      todoEl.classList.add("completed")
    }

    todoEl.innerText = todoText

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed")
      updateLocalStorage()
    })

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault()
      todoEl.remove()
      updateLocalStorage()
    })

    todosUL.appendChild(todoEl)

    input.value = ""

    updateLocalStorage()
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  addTodo()
})

if (todos) {
  todos.forEach((todo) => addTodo(todo))
}
