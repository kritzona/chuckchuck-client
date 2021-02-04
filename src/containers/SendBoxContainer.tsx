import React from 'react'
import SendBox from '../components/organisms/SendBox/SendBox'
import { useDispatch, useSelector } from 'react-redux'
import { messageAddItemAction } from '../store/messenger/actions'
import { RootState } from '../store/store'

interface IProps {
  contactId: string | number
  dialogId: string | number
}

const SendBoxContainer = (props: IProps) => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const handleSend = (message: string) => {
    dispatch(
      messageAddItemAction(props.dialogId, {
        id: Date.now(),
        senderId: user.id,
        recipientId: props.contactId,
        content: message,
        departureDate: new Date(),
      }),
    )
  }

  return <SendBox onSend={(message: string) => handleSend(message)} />
}

export default SendBoxContainer
