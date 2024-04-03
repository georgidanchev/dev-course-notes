import { useRef } from "react"

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswers = useRef()

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers]
    shuffledAnswers.current.sort((a, b) => Math.random() - 0.5)
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        let className = ""
        const isSelected = selectedAnswer === answer

        if (answerState === "answered" && isSelected) {
          className = "selected"
        }

        if ((answerState === "correct" || answerState === "wrong") && isSelected) {
          className = answerState
        }

        return (
          <li key={answer} className="answer">
            <button type="button" onClick={() => onSelect(answer)} className={className} disabled={answerState !== ""}>
              {answer}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
