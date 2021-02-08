import React from 'react'
import SendBox from '../components/organisms/SendBox/SendBox'
import { useDispatch, useSelector } from 'react-redux'
import {
  messageAddItemAction,
  messengerSendMessageAction,
} from '../store/messenger/actions'
import { RootState } from '../store/store'

interface IProps {
  contactId: string | number
  dialogId: string | number
}

const SendBoxContainer = (props: IProps) => {
  const user = useSelector((state: RootState) => state.user)
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
