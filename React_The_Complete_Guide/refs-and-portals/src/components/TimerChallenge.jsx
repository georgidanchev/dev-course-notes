import { useRef, useState } from "react"

export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false)
  const [timerStarted, setTimerStarted] = useState(false)
  // Stores the timeout timers
  const timer = useRef()

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true)
    }, targetTime * 1000)

    setTimerStarted(true)
  }

  function handleStop() {
    clearTimeout(timer.current)
    setTimerStarted(false)
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>

      {timerExpired && <p>You lost!</p>}

      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>

      <p>
        <button onClick={timerStarted ? handleStop : handleStart }>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>

      <p className={timerStarted ? "active" : ""}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  )
}
