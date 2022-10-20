import { useEffect, useState } from 'react'

// useEffect is called after first render
export default function UseEffect() {
  const [mana, setMana] = useState<number>()
  const [time, setTime] = useState<string>()

  useEffect(() => {
    console.count('useEffect called on every render without dependencies')
  })

  // do only once on initial render
  useEffect(() => {
    const randomMana = 10 + Math.floor(Math.random() * 90)
    console.log('useEffect(, [])', randomMana)
    setMana(randomMana)
  }, [])

  // SSR note: the document is available inside useEffect and called only in the browser
  // do on every change of mana state
  useEffect(() => {
    console.log('useEffect(, [mana])', mana)
    document.title = `Eruheran's mana: ${mana}`
  }, [mana])

  // useEffect with cleanup
  useEffect(() => {
    console.log('setinterval')
    const interval = setInterval(() => {
      console.log('Time: ', new Date().toLocaleTimeString())
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    // the return function is called when the component unmounts
    // AND ALSO WHEN REACT RERENDERS THE COMPONENT if there is no provided dependencies
    return () => {
      clearInterval(interval)
      console.log('Clearing interval')
    }
  }, [])

  return (
    <>
      Random generated mana points (10,100): <strong>{mana} MP</strong>
      <br />
      Time: {time}
    </>
  )
}
