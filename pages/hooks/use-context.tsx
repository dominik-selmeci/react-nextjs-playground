/**
 * The best way to use this is to do it only for application level states
 * Ideally directly inside <App> which is the first thing rendered and it will never re-render
 */
import { Button, Text } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction, useContext, useState } from 'react'

const dialogs = [
  'Heloo',
  "What's your name?",
  "I'm Dominik, what about you?",
  'Omae Wa Mou Shindeiru',
  'NANI?!?!',
  'BLUEAHAAAGRC',
]

// note: should be saved into standalone file like DialogContext.ts
type DialogText = { text: string; index: number }
const DialogContext = React.createContext<
  [DialogText, Dispatch<SetStateAction<DialogText>>]
>([{ text: dialogs[0], index: 0 }, () => {}])

export default function UseContext() {
  const currentDialog = useState({ text: dialogs[0], index: 0 })

  return (
    <>
      <DialogContext.Provider value={currentDialog}>
        <DialogItem />
      </DialogContext.Provider>
    </>
  )
}

function DialogItem() {
  const [dialog, setDialog] = useContext(DialogContext)

  const moveDialog = () => {
    const index = dialogs[dialog.index + 1] ? dialog.index + 1 : 0
    setDialog({ text: dialogs[index], index: index })
  }

  return (
    <>
      <Text fontSize="3xl">&quot;{dialog.text}&quot;</Text>
      <Text>Index: {dialog.index}</Text>
      <br />
      <Button onClick={() => moveDialog()}>Continue Dialog</Button>
    </>
  )
}
