import { Button } from '@chakra-ui/react'
import { useState } from 'react'

function fibonacciMemoized() {
  // here is our "backpack" :)
  const lastValues: number[] = []

  function fibonacciFn(val: number): number {
    if (val === 1) return 1
    if (val === 2) return 1

    if (lastValues[val]) {
      return lastValues[val]
    }

    debugger
    const result = fibonacciFn(val - 2) + fibonacciFn(val - 1)
    lastValues[val] = result

    return result
  }

  return fibonacciFn
}

const fibonacci = fibonacciMemoized()

export default function ClosurePersistentMemory() {
  const [result, setResult] = useState<number>()

  console.log(fibonacci)
  debugger

  return (
    <>
      Fibonacci result: {result} <br />
      <Button onClick={() => setResult(fibonacci(13))} mt={2}>
        Fibonacci of 13
      </Button>{' '}
      <br />
      <Button onClick={() => setResult(fibonacci(35))} mt={2}>
        Fibonacci of 35
      </Button>
      <br />
      <Button onClick={() => setResult(fibonacci(36))} mt={2}>
        Fibonacci of 36
      </Button>
      <br />
      <Button onClick={() => setResult(fibonacci(37))} mt={2}>
        Fibonacci of 37
      </Button>
      <br />
      <Button onClick={() => setResult(fibonacci(38))} mt={2}>
        Fibonacci of 38
      </Button>
    </>
  )
}
