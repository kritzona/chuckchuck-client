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
}

const TemplateMessengerContainer = (props: IProps) => {
  const history = useHistory()
  const { contactId } = useParams<IParams>()

  const user = useSelector((state: RootState) => state.user)
  const contactItem = useSelector((state: RootState):
    | IContactItem
    | undefined => {
    return state.contact.items.find(
      (item: IContactItem) => item.id === parseInt(contactId),
    )
  })
  const dispatch = useDispatch()

  const createAndBindDialog = (contactId: number, dateNow: number) => {
    dispatch(
      dialogAddItemAction({
        id: dateNow,
        message: {
          items: [],
        },
      }),
    )
    dispatch(contactSetDialogIdAction(contactId, dateNow))
  }

  if (contactItem && !contactItem.dialogId) {
    createAndBindDialog(contactItem.id, Date.now())
  }

  useEffect(() => {
    if (!user.isAuth || !contactItem) {
      history.push('/')
    }
  }, [user, contactItem, history])

  return (
    <React.Fragment>
      {user.isAuth && contactItem && contactItem.dialogId && (
        <TemplateMessenger
          contactId={contactItem.id}
          dialogId={contactItem.dialogId}
        />
      )}
    </React.Fragment>
  )
}

export default TemplateMessengerContainer
