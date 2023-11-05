import { useState } from "react"

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(name)

  function handleEditClick() {
    setIsEditing((editing) => !editing)
  }

  function handleNameChange(e) {
    setPlayerName(e.target.value)
  }

  function handleNameSubmit(e) {
    e.preventDefault()
    setIsEditing(false)
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <form
            onSubmit={handleNameSubmit}
            style={{ display: "inline-block" }}
          >
            <input
              id="playerName"
              name="playerName"
              type="text"
              onChange={handleNameChange}
              value={playerName}
            />
          </form>
        ) : (
          <button
            className="player-name"
            type="button"
            style={{ display: "inline-block" }}
            onClick={() => setIsEditing(true)}
          >
            {playerName}
          </button>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button type="button" onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  )
}
