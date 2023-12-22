import { useCallback, useState } from 'react'
import Question from '../question'
import complete from '../assets/quiz-complete.png'
import QuestionTimer from './Timer'
import Answer from './Answer'
export default function Quiz() {
  const [answerState, setAnswerState] = useState('')
  const [userAnswer, setuserAnswer] = useState([])
  const activeQuestion =
    answerState === '' ? userAnswer.length : userAnswer.length - 1
  const questionComplete = Question.length == activeQuestion
  console.log( Question[activeQuestion].answers[0])
  const handelSelectAnswer = useCallback(function handelSelectAnswer(answer) {
    console.log(Question[activeQuestion].answers[0])
    setAnswerState('Answer')
    setuserAnswer((prev) => {
      return [...prev, answer]
    })
   
    setTimeout(() => {
      if (answer ==  Question[activeQuestion].answers[0]) {
        console.log('Correct')
        setAnswerState('correct')
      } else {
        console.log('Wrong')
        setAnswerState('wrong')
      }
      setTimeout(() => {
        setAnswerState('')
      }),
        2000
    }, 1000)
  }, [activeQuestion])
  const handleSkipAnswer = useCallback(() => {
    handelSelectAnswer(null)
  }, [])
  if (questionComplete) {
    return (
      <div id="summary">
        <img src={complete} alt="" />
        <h2>Question Complete</h2>
      </div>
    )
  }

  return (
    <div id="quiz">
      <QuestionTimer
        key={activeQuestion}
        timeout={10000}
        ontimeout={() => handleSkipAnswer()}></QuestionTimer>
      <div id="question">
        <h2>{Question[activeQuestion].text}</h2>
        <Answer
          key={activeQuestion}
          answers={Question[activeQuestion].answers}
          selectedAnswer={userAnswer[userAnswer.length - 1]}
          answerState={answerState}
          onSelect={handelSelectAnswer}></Answer>
      </div>
    </div>
  )
}
