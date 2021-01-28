import React from 'react'
import SendBox from '../components/organisms/SendBox/SendBox'

interface IProps {
  dialogId: number
}

const SendBoxContainer = (props: IProps) => {
  const handleSend = (message: string) => {
    console.log(message)
  }

  return <SendBox onSend={(message: string) => handleSend(message)} />
}

export default SendBoxContainer
