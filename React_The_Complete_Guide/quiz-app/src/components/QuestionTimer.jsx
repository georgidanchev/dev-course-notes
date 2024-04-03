import { useState, useEffect } from "react"

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout)

  useEffect(() => {
    const timeoutRef = setTimeout(onTimeout, timeout)

    return () => {
      clearTimeout(timeoutRef)
    }
  }, [onTimeout, timeout])

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100)
    }, 100)

    return () => {
      clearInterval(intervalRef)
    }
  }, [])

  return <progress id="question-time" max={timeout} value={remainingTime} className={mode} />
}
