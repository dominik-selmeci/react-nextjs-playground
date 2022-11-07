import { Text } from '@chakra-ui/react'

export default function Closure() {
  function outer() {
    let counter = 0

    function incrementCounter() {
      debugger
      counter++
    }

    return incrementCounter
  }

  // The memory of the closure is stored as "backpack" inside function variable
  // under [[Scopes]] property inside developer tools
  const myNewFunction = outer() // this is only the returned value of the outer function, which is another function
  debugger
  myNewFunction()
  debugger
  myNewFunction()

  return (
    <>
      <Text fontSize="5xl">Closure</Text>
      <Text fontSize="2xl">Open developer tools and hit F5</Text>
    </>
  )
}
