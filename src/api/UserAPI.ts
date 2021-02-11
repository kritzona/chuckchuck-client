import RestAPI, { ERestAPIStatuses } from './RestAPI'
import { initUserStorage } from '../utils/user-storage'

export interface IUserAPIItem {
  id: string
  login: string
  firstName: string
  lastName: string
  age: number
  city: string
  about: string
  avatar: string
  createdAt: string
  lastVisitedAt: string
}
export interface IUserAPIItemWithAccessToken extends IUserAPIItem {
  accessToken: string
}
export interface IUserAPIContactItem {
  id: string
  login: string
  firstName: string
  lastName: string
  avatar: string
  dialogId: string
  lastVisitedAt: string
}
export interface IUserAPILoginResponse {
  item: IUserAPIItemWithAccessToken
}
export interface IUserAPIAccountResponse {
  item: IUserAPIItem
}
export interface IUserAPIContactsResponse {
  items: IUserAPIContactItem[]
}

class UserAPI extends RestAPI {
  public constructor(object: string) {
    super(object)

    this.login = this.login.bind(this)
    this.fetchAccount = this.fetchAccount.bind(this)
    this.fetchContacts = this.fetchContacts.bind(this)
  }

  public async login(
    login: string,
    password: string,
    remember: boolean,
  ): Promise<IUserAPIItemWithAccessToken | false> {
    try {
      const url = super.generateUrl(this.servicesUrl, ['login'])
      const response = await super.postRequest<IUserAPILoginResponse>(
        url,
        { login, password },
        {},
      )

      switch (response.status) {
        case ERestAPIStatuses.SUCCESS:
          const userItem = response.data.item
          initUserStorage(userItem.id, userItem.accessToken, remember)

          return userItem
        case ERestAPIStatuses.ERROR:
          return false
      }
    } catch (error) {
      return false
    }
  }

  public async fetchAccount(
    userId: string | number,
    userAccessToken: string,
  ): Promise<IUserAPIItem | false> {
    try {
      const response = await super.show<IUserAPIAccountResponse>(userId, [], {
        accessToken: userAccessToken,
      })

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

  public async fetchContacts(
    userId: string | number,
    userAccessToken: string,
  ): Promise<IUserAPIContactItem[] | false> {
    try {
      const response = await super.index<IUserAPIContactsResponse>(
        [userId, 'contacts'],
        {
          accessToken: userAccessToken,
        },
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
}

const userAPI = new UserAPI('users')

export default userAPI
