import { useState, useRef } from "react"

export default function Player() {
  const playerName = useRef()
  const [enteredPlayerName, setEnteredPlayerName] = useState(null)

  function handleChange(event) {
    setEnteredPlayerName(event.target.value)
  }

  function handleClick() {
    setEnteredPlayerName(playerName.current.value)
    playerName.current.value = ""
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"} </h2>
      <p>
        <input ref={playerName} type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick} type="button">
          Set Name
        </button>
      </p>
    </section>
  )
}
