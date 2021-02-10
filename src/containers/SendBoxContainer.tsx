import React from 'react'
import SendBox from '../components/organisms/SendBox/SendBox'
import { useDispatch } from 'react-redux'
import { messengerSendMessageAction } from '../store/messenger/actions'
import { userStorage } from '../utils/user-storage'

interface IProps {
  contactId: string | number
  dialogId: string | number
}

const SendBoxContainer = (props: IProps) => {
  const { userId, userAccessToken } = userStorage()
  const dispatch = useDispatch()

  const handleSend = (message: string) => {
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
