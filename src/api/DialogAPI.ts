import RestAPI, {
  IRestAPIErrorResponse,
  IRestAPISuccessResponse,
  TRestAPIResponse,
} from './RestAPI'
import { IMessageItem } from '../store/messenger/types'
import axios from 'axios'

export interface IDialogAPIMessageItem {
  _id: string
  senderId: string
  recipientId: string
  content: string
  createdAt: string
}

class DialogAPI extends RestAPI {
  public constructor(object: string) {
    super(object)

    this.fetchMessages = this.fetchMessages.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  public async fetchMessages(
    dialogId: string | number,
    contactId: string | number,
    accessToken: string,
  ): Promise<IMessageItem[] | null> {
    let _messages: IMessageItem[] | null = []

    const responseData: TRestAPIResponse = await super.show(
      dialogId,
      contactId,
      accessToken,
      'messages',
    )
    switch (responseData.status) {
      case 'success':
        _messages = responseData.data.items.map(
          (item: IDialogAPIMessageItem) => {
            return {
              id: item._id,
              senderId: item.senderId,
              recipientId: item.recipientId,
              content: item.content,
              departureDate: new Date(item.createdAt),
            }
          },
        )
        break
      case 'error':
        _messages = null
        break
    }
    return _messages
  }
  public async sendMessage(
    dialogId: string | number,
    content: string,
    userId: string | number,
    accessToken: string,
  ): Promise<IMessageItem | null> {
    let _message: IMessageItem | null = null

    const responseData: TRestAPIResponse = await axios
      .post(
        `${this.apiObjectUrl}/${dialogId}/messages?userId=${userId}&accessToken=${accessToken}`,
        {
          content,
        },
      )
      .then((response) => {
        const _response: IRestAPISuccessResponse = {
          status: 'success',
          data: response.data.data,
        }

        return _response
      })
      .catch((error) => {
        const _response: IRestAPIErrorResponse = {
          status: 'error',
          message: error.response.data.message,
        }

        return _response
      })
    switch (responseData.status) {
      case 'success':
        _message = {
          id: String(responseData.data.item._id),
          senderId: String(responseData.data.item.senderId),
          recipientId: String(responseData.data.item.recipientId),
          content: String(responseData.data.item.content),
          departureDate: new Date(Number(responseData.data.item.createdAt)),
        }
        break
      case 'error':
        break
    }

    return _message
  }
}

const dialogAPI = new DialogAPI('dialogs')

export default dialogAPI
