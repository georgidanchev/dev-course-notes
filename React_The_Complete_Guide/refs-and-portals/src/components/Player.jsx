import { useState, useRef } from "react"

export default function Player() {
  const playerName = useRef()
  const [enteredPlayerName, setEnteredPlayerName] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    setSubmitted(false)
    setEnteredPlayerName(event.target.value)
  }

  function handleClick() {
    setSubmitted(true)
    setEnteredPlayerName(playerName.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : " unknown entity"} </h2>
      <p>
        <input ref={playerName} type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick} type="button">
          Set Name
        </button>
      </p>
    </section>
  )
}
