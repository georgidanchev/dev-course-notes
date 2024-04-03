import { useState, useCallback } from "react"
import QUESTIONS from "../questions"
import quizCompleteImg from "../assets/quiz-complete.png"
import QuestionTimer from "./QuestionTimer"

export default function Quiz() {
  const [userAnswers, setUsersAnswers] = useState([])
  const activeQuestionIndex = userAnswers.length
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length

  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer) {
    setUsersAnswers((prevSate) => [...prevSate, selectedAnswer])
  }, [])

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

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
  shuffledAnswers.sort((a, b) => Math.random() - 0.5)

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button type="button" onClick={() => handleSelectedAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
