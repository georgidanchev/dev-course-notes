import { useRef } from "react"

import classes from './NewTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      // throw an error
      return
    }

    props.onAddTodo(enteredText)
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
