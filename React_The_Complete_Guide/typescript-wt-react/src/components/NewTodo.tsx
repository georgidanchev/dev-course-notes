import { useRef, useContext } from "react"

import { TodosContext } from '../store/todos-context'

import classes from './NewTodo.module.css'

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext)

  const todoTextInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      // throw an error
      return
    }

    todosCtx.addTodo(enteredText)
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="input-text">Todo text</label>
      <input type="text" id="input-text" ref={todoTextInputRef} />
      <button type="submit">Add todo</button>
    </form>
  )
}

export default NewTodo
