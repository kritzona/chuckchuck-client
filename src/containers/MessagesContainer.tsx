import React from 'react'
import Messages from '../components/organisms/Messages/Messages'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { IDialogItem, IMessageItem } from '../store/messenger/reducer'

interface IProps {
  dialogId: string | number
}

const MessagesContainer = (props: IProps) => {
  const messageItems = useSelector((state: RootState) => {
    const _messageItems: IMessageItem[] = []

    const dialogItem = state.messenger.dialog.items.find(
      (item: IDialogItem) => item.id === props.dialogId,
    )

    if (dialogItem) {
      _messageItems.push(...dialogItem.message.items)
    }

    return _messageItems
  })

  return <Messages items={messageItems} />
}

export default MessagesContainer
