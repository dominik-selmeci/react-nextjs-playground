import { Button, Text } from '@chakra-ui/react'
import { useRef, useState } from 'react'

export default function UseRef() {
  const currentYear = new Date().getFullYear()

  // useRef is basically a JS object,
  // which on every render cycle has its current value
  const year = useRef(currentYear)
  const [stateYear, setStateYear] = useState(currentYear)

  // a good candidate for useRef is
  // the reference of some created html element
  const htmlEl = useRef<null | HTMLParagraphElement>()
  console.log(htmlEl)

  // also you can use useRef inside custom hooks if you want to preserve
  // the same values when the hook is called multiple times

  return (
    <>
      <Text fontSize="5xl">UseRef hook</Text>
      <br />
      <Text fontSize="2xl">Current year: {year.current}</Text>

      {/* change of the useRef value doesnt do re-render */}
      <Button onClick={() => year.current++}>Increment year</Button>

      <Text fontSize="2xl" mt={4}>
        Current state year: {stateYear}
      </Text>

      {/* change of the useState value will trigger re-render */}
      <Button onClick={() => setStateYear((year) => ++year)}>
        Increment state year
      </Button>

      <p ref={(el) => (htmlEl.current = el)}></p>
    </>
  )
}
