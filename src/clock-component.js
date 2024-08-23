import { useEffect, useState } from 'react'

function Clock() {
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  useEffect(() => {

    setInterval(() => {

      const dateObject = new Date()

      const h = dateObject.getHours()
      setHour(h)
      const m = dateObject.getMinutes()
      setMinute(m)
      const s = dateObject.getSeconds()
      setSecond(s)
    }, 1000)

  }, [])

  return <div>{hour}:{minute}:{second}</div>
}

export default Clock;