import {
  EMessengerActionTypes,
  IMessengerState,
  TMessengerAction,
} from './types'

const initialState: IMessengerState = {
  dialogId: -1,
  contactId: -1,
  message: {
    items: [],
  },
}
const messengerReducer = (state = initialState, action: TMessengerAction) => {
  switch (action.type) {
    case EMessengerActionTypes.INIT:
      state.dialogId = action.payload.dialogId
      state.contactId = action.payload.contactId
      state.message.items = []

      return state
    case EMessengerActionTypes.MESSAGE_ADD_ITEM:
      state.message.items = [...state.message.items, action.payload.item]
      return state
    default:
      return state
  }
}

export default messengerReducer
