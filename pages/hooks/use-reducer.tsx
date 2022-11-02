import { Button, Text } from '@chakra-ui/react'
import { useReducer } from 'react'

type trafficLight = 'green' | 'orange' | 'red' | 'orangered'

function switchLightForward(light: trafficLight): trafficLight {
  switch (light) {
    case 'green':
      return 'orange'
    case 'orange':
      return 'red'
    case 'red':
      return 'orangered'
    case 'orangered':
      return 'green'
    default:
      throw new Error()
  }
}

function switchLightBackward(light: trafficLight): trafficLight {
  switch (light) {
    case 'green':
      return 'orangered'
    case 'orangered':
      return 'red'
    case 'red':
      return 'orange'
    case 'orange':
      return 'green'
    default:
      throw new Error()
  }
}

type LightState = { light: trafficLight }

function trafficLightReducer(
  state: LightState,
  action: { type: 'forward' | 'backward' },
) {
  switch (action.type) {
    case 'forward':
      // Note: don't just change the state object, because react
      //   will just assume state === state and will not re-render
      //
      // This will not work:
      // state.light = switchLightForward(state.light)
      // return state
      return { light: switchLightForward(state.light) }
    case 'backward':
      return { light: switchLightBackward(state.light) }
    default:
      throw new Error()
  }
}

export default function UseReducer() {
  const [{ light }, dispatchLight] = useReducer(trafficLightReducer, {
    light: 'green',
  })

  return (
    <>
      <Text fontSize="5xl">useReducer Hook</Text>
      <br />

      <Text fontSize="2xl" color={light}>
        Traffic{' '}
        <Text
          display="inline"
          as="span"
          color={light === 'orangered' ? 'orange' : undefined}
        >
          Light
        </Text>
        : {light}
      </Text>
      <Button onClick={() => dispatchLight({ type: 'forward' })}>
        Forward
      </Button>
      <br />
      <Button onClick={() => dispatchLight({ type: 'backward' })} mt={2}>
        Backward
      </Button>
    </>
  )
}
