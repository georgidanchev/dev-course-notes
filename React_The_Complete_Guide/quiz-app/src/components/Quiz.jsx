import { useState, useCallback } from "react"
import QUESTIONS from "../questions"
import quizCompleteImg from "../assets/quiz-complete.png"
import Question from "./Question"

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
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    )
  }

  return (
    <div id="quiz">
      <Question key={activeQuestionIndex} questionIndex={activeQuestionIndex} onSelectAnswer={handleSelectedAnswer} onSkipAnswer={handleSkipAnswer} />
    </div>
  )
}
