import { useEffect, useState } from 'react'

function Timer() {
  const [count, setCount] = useState(0)
  console.log('Timer:', count)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1)
      console.log('每秒執行')
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <h2>Timer 元件</h2>
}

export default Timer
