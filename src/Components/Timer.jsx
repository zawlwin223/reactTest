import { useEffect, useState } from 'react'

export default function QuestionTimer({ timeout, ontimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout)

  useEffect(() => {
    console.log('This is setTimeOut')
  const timeoutfun = setTimeout(ontimeout, timeout)
    return () => {
      clearTimeout(timeoutfun)
    }
  }, [ontimeout, timeout])
  useEffect(() => {
    console.log('This is setInterval')
  const interval =  setInterval(() => {
      setRemainingTime((prev) => prev - 30)
    }, 30)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div id="question">
      <progress value={remainingTime} max={timeout}></progress>
    </div>
  )
}
