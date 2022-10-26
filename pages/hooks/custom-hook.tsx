import { Box, Button, Divider, Text } from '@chakra-ui/react'
import { useStopwatch } from '../../hooks/useStopwatch'

export default function CustomHook() {
  const {
    formatted: formatted1,
    start: start1,
    stop: stop1,
    reset: reset1,
    totalSeconds: totalSeconds1,
    isRunning: isRunning1,
  } = useStopwatch()

  // the second hook is isolated,
  // they do not share a state
  const {
    formatted: formatted2,
    start: start2,
    stop: stop2,
    reset: reset2,
    totalSeconds: totalSeconds2,
    isRunning: isRunning2,
  } = useStopwatch()

  return (
    <>
      <Text fontSize="5xl">Custom Hook</Text>
      <br />

      <Text fontSize="2xl">First Stopwatch: {formatted1}</Text>
      <Box mt={3}>
        <Button
          disabled={isRunning1}
          onClick={start1}
          colorScheme="green"
          mr={1}
        >
          Start
        </Button>
        <Button disabled={!isRunning1} onClick={stop1} colorScheme="red" mr={1}>
          Stop
        </Button>
        <Button
          disabled={totalSeconds1 === 0}
          onClick={reset1}
          colorScheme="yellow"
        >
          Reset
        </Button>
      </Box>

      <Divider mt={4} mb={12} />

      <Text fontSize="2xl">First Stopwatch: {formatted2}</Text>
      <Box mt={3}>
        <Button
          disabled={isRunning2}
          onClick={start2}
          colorScheme="green"
          mr={2}
        >
          Start
        </Button>
        <Button disabled={!isRunning2} onClick={stop2} colorScheme="red" mr={2}>
          Stop
        </Button>
        <Button
          disabled={totalSeconds2 === 0}
          onClick={reset2}
          colorScheme="yellow"
        >
          Reset
        </Button>
      </Box>
    </>
  )
}
