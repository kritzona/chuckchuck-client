import { TMessengerAction } from './actions'

export interface IMessageItem {
  id: number
  senderId: number
  recipientId: number
  content: string
  departureDate: Date
}
export interface IDialogItem {
  id: number
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
    default:
      return state
  }
}

export default messengerReducer
