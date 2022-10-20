import { Box, Button } from '@chakra-ui/react'
import { useState } from 'react'

function Player(props: {
  title: string
  inithealth: number
  doAttack: Function
}) {
  const { title, doAttack } = props
  // you can use also function if the initial state is some slow computation
  const [health, setHealth] = useState(() => 2 * 5 * 5)
  const [attack, setAttack] = useState(10)

  return (
    <Box>
      {title} <br />
      HP: {health} <br />
      ATTACK: {attack} <br />
      <Button
        onClick={() => {
          setAttack((attack) => attack + Math.floor(Math.random() * 5)),
            setHealth((health) => health + Math.floor(Math.random() * 5))
        }}
      >
        Level UP
      </Button>
      <br />
      <br />
      <Button onClick={() => doAttack(attack)}>Attack</Button>
    </Box>
  )
}

export default function UseState() {
  const eruheranAttaks = (attack: number) => {
    console.log('Eruheran attacks: ', attack)
  }
  const orcAttaks = (attack: number) => {
    console.log('Orc attacks: ', attack)
  }

  return (
    <>
      <Player
        title="Eruheran"
        inithealth={22}
        doAttack={eruheranAttaks}
      ></Player>
      <br />
      <Player title="Orc" inithealth={14} doAttack={orcAttaks}></Player>
    </>
  )
}
