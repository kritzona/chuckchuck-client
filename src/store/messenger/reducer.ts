import { TMessengerAction } from './actions'

export interface IMessageItem {
  id: string | number
  senderId: string | number
  recipientId: string | number
  content: string
  departureDate: Date
}
export interface IDialogItem {
  id: string | number
  message: {
    items: IMessageItem[]
  }
}
export interface IMessengerState {
  dialog: {
    items: IDialogItem[]
  }
}

const initialState: IMessengerState = {
  dialog: {
    items: [],
  },
}
const messengerReducer = (
  state: IMessengerState = initialState,
  action: TMessengerAction,
) => {
  switch (action.type) {
    case 'DIALOG_ADD_ITEM':
      state.dialog.items.push(action.payload)
      return state
    case 'MESSAGE_ADD_ITEM':
      state.dialog.items.map((item: IDialogItem) => {
        if (item.id === action.payload.dialogId) {
          item.message.items.push(action.payload.item)
        }

        return null
      })
      return state
    default:
      return state
  }
}

export default messengerReducer
