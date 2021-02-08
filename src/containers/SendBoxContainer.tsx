import React from 'react'
import SendBox from '../components/organisms/SendBox/SendBox'
import { useDispatch } from 'react-redux'
import { messengerSendMessageAction } from '../store/messenger/actions'

interface IProps {
  contactId: string | number
  dialogId: string | number
}

const SendBoxContainer = (props: IProps) => {
  const dispatch = useDispatch()

  const handleSend = (message: string) => {
    const userId =
      localStorage.getItem('chuckchuck:user:id') ||
      sessionStorage.getItem('chuckchuck:user:id')
    const userAccessToken =
      localStorage.getItem('chuckchuck:user:access-token') ||
      sessionStorage.getItem('chuckchuck:user:access-token')

    if (userId && userAccessToken) {
      dispatch(
        messengerSendMessageAction(
          props.dialogId,
          message,
          userId,
          userAccessToken,
        ),
      )
    }
  }

  return <SendBox onSend={(message: string) => handleSend(message)} />
}

export default SendBoxContainer
