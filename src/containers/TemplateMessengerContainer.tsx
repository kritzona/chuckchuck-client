import React, { useEffect } from 'react'
import TemplateMessenger from '../templates/TemplateMessenger/TemplateMessenger'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { IContactItem } from '../store/contact/reducer'
import { dialogAddItemAction } from '../store/messenger/actions'
import { contactSetDialogIdAction } from '../store/contact/actions'

interface IProps {}
interface IParams {
  contactId: string
  dialogId: string
}

const TemplateMessengerContainer = (props: IProps) => {
  const { contactId, dialogId } = useParams<IParams>()

  const contactItem = useSelector((state: RootState):
    | IContactItem
    | undefined => {
    return state.contact.items.find(
      (item: IContactItem) => item.id === contactId,
    )
  })

  console.log(contactItem)

  return (
    <React.Fragment>
      {contactItem && contactItem.dialogId && (
        <TemplateMessenger
          contactItem={contactItem}
          dialogItem={{ id: dialogId, message: { items: [] } }}
        />
      )}
    </React.Fragment>
  )
}

export default TemplateMessengerContainer
