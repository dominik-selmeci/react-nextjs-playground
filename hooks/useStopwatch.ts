import { useEffect, useState } from 'react'

function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 60 / 60)
  const minutes = Math.floor((seconds - hours * 60 * 60) / 60)
  const sec = seconds - hours * 60 * 60 - minutes * 60
  const withZeros = (digit: number) => `${('00' + digit).slice(-2)}`

  return `${withZeros(hours)}:${withZeros(minutes)}:${withZeros(sec)}`
}

export function useStopwatch() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [startTime, setStartTime] = useState<number>()

  useEffect(() => {
    if (!isRunning || !startTime) {
      return
    }

    const now = new Date().getTime()
    // setTimeout is not exact, there always will be small differences
    const correction = (now - startTime) % 1000
    const scheduleTime = Math.abs(1000 - correction)

    const timeout = setTimeout(() => {
      const now = new Date().getTime()
      setSeconds(Math.floor((now - startTime) / 1000))
    }, scheduleTime)

    return () => clearTimeout(timeout)
  }, [isRunning, seconds, startTime])

  return {
    totalSeconds: seconds,
    formatted: formatTime(seconds),
    isRunning,
    reset: () => {
      setIsRunning(false)
      setSeconds(0)
      setStartTime(new Date().getTime())
    },
    start: () => {
      if (isRunning) {
        return
      }

      setStartTime(new Date().getTime() - seconds * 1000)
      setIsRunning(true)
    },
    stop: () => setIsRunning(false),
  }
}
