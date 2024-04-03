import { useState, useCallback } from "react"
import QUESTIONS from "../questions"
import Question from "./Question"
import Summary from "./Summary.jsx"


export default function Quiz() {
  const [userAnswers, setUsersAnswers] = useState([])
  const activeQuestionIndex = userAnswers.length
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length

  const handleSelectedAnswer = useCallback(
    (selectedAnswer) => {
      setUsersAnswers((prevSate) => [...prevSate, selectedAnswer])
    },
    [activeQuestionIndex],
  )

  const handleSkipAnswer = useCallback(() => {
    handleSelectedAnswer(null)
  }, [])

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />
  }

  return (
    <div id="quiz">
      <Question key={activeQuestionIndex} questionIndex={activeQuestionIndex} onSelectAnswer={handleSelectedAnswer} onSkipAnswer={handleSkipAnswer} />
    </div>
  )
}
