import { useState, useCallback } from "react"
import QUESTIONS from "../questions"
import quizCompleteImg from "../assets/quiz-complete.png"
import Question from "./Question"

export default function Quiz() {
  const [answerState, setAnswerState] = useState("")
  const [userAnswers, setUsersAnswers] = useState([])
  const activeQuestionIndex = answerState === "" ? userAnswers.length : userAnswers.length - 1
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length

  const handleSelectedAnswer = useCallback(
    (selectedAnswer) => {
      setAnswerState("answered")
      setUsersAnswers((prevSate) => [...prevSate, selectedAnswer])

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct")
        } else {
          setAnswerState("wrong")
        }

        setTimeout(() => {
          setAnswerState("")
        }, 2000)
      }, 1000)
    },
    [activeQuestionIndex],
  )

  const handleSkipAnswer = useCallback(() => {
    handleSelectedAnswer(null)
  }, [handleSelectedAnswer])

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
      <Question
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        answerState={answerState}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        onSelectAnswer={handleSelectedAnswer}
        onSkipAnswer={handleSkipAnswer}
        key={activeQuestionIndex}
      />
    </div>
  )
}
