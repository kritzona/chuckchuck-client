import React, { useEffect, useState } from 'react'
import TemplateMessenger from '../templates/TemplateMessenger/TemplateMessenger'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { IContactItem } from '../store/contact/types'
import { messengerInitAction } from '../store/messenger/actions'

interface IProps {}
interface IParams {
  contactId: string
  dialogId: string
}

const TemplateMessengerContainer = (props: IProps) => {
  const [init, setInit] = useState(false)
  const { contactId, dialogId } = useParams<IParams>()
  const dispatch = useDispatch()

  const messenger = useSelector((state: RootState) => state.messenger)
  const contactItem = useSelector((state: RootState):
    | IContactItem
    | undefined => {
    return state.contact.items.find(
      (item: IContactItem) => item.id === contactId,
    )
  })

  useEffect(() => {
    if (!init) {
      dispatch(messengerInitAction(dialogId, contactId))

      setInit(true)
    }
  }, [init, dialogId, contactId, dispatch])

  return (
    <React.Fragment>
      {contactItem && contactItem.dialogId && init && (
        <TemplateMessenger
          dialogId={messenger.dialogId}
          contactItem={contactItem}
          messageItems={messenger.message.items}
        />
      )}
    </React.Fragment>
  )
}

export default TemplateMessengerContainer
