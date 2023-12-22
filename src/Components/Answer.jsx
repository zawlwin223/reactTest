import { useRef } from "react"
export default function Answer({answers,selectedAnswer,  answerState, onSelect}){
    const shuffleAnswers = useRef()
    if (shuffleAnswers.current == undefined) {
        shuffleAnswers.current =answers,
        shuffleAnswers.current.sort(() => Math.random() - 0.5)
      }
    return (
        <ul id="answers">
        {shuffleAnswers.current.map((answers) => {
          let isSelected =selectedAnswer === answers
          let cssClasses = ''
          if (answerState === 'Answer' && isSelected) {
            cssClasses = 'selected'
          }
          if (
            answerState === 'correct' ||
            (answerState === 'wrong' && isSelected)
          ) {
            cssClasses = answerState;
            console.log(answerState)
          }
          return (
            <li key={answers} className="answer">
              <button
                onClick={() => onSelect(answers)}
                className={cssClasses}>
                {answers}
              </button>
            </li>
          )
        })}
      </ul>
    )
}