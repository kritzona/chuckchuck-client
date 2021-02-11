import _RestAPI, { ERestAPIStatuses } from './_RestAPI'

interface IDialogAPIMessageItem {
  id: string
  senderId: string
  recipientId: string
  content: string
  createdAt: string
}
interface IDialogAPIMessagesResponse {
  items: IDialogAPIMessageItem[]
}
interface IDialogAPISendedMessageResponse {
  item: IDialogAPIMessageItem
}

class _DialogAPI extends _RestAPI {
  public constructor(object: string) {
    super(object)

    this.fetchMessages = this.fetchMessages.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  public async fetchMessages(
    dialogId: string | number,
    userId: string | number,
    accessToken: string,
  ): Promise<IDialogAPIMessageItem[] | false> {
    try {
      const response = await super.index<IDialogAPIMessagesResponse>(
        [dialogId, 'messages'],
        { userId, accessToken },
      )

      switch (response.status) {
        case ERestAPIStatuses.SUCCESS:
          return response.data.items
        case ERestAPIStatuses.ERROR:
          return false
      }
    } catch (error) {
      return false
    }
  }
  public async sendMessage(
    dialogId: string | number,
    content: string,
    userId: string | number,
    accessToken: string,
  ): Promise<IDialogAPIMessageItem | false> {
    try {
      const response = await super.create<IDialogAPISendedMessageResponse>(
        [dialogId, 'messages'],
        { content },
        { userId, accessToken },
      )

      switch (response.status) {
        case ERestAPIStatuses.SUCCESS:
          return response.data.item
        case ERestAPIStatuses.ERROR:
          return false
      }
    } catch (error) {
      return false
    }
  }
}

const dialogAPI = new _DialogAPI('dialogs')

export default dialogAPI
