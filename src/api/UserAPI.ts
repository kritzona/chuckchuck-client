import RestAPI, { TRestAPIResponse } from './RestAPI'
import axios from 'axios'

interface IUserAPIItem {
  id: string
  login: string
  firstName: string
  lastName: string
  age: number
  city: string
  about: string
  avatar: string
  createdAt: string
  accessToken?: string
}

class UserAPI extends RestAPI {
  public constructor(object: string) {
    super(object)
  }

  public async getItem(
    id: string,
    accessToken: string,
  ): Promise<IUserAPIItem | null> {
    let _item = null

    const responseData: TRestAPIResponse = await this.show(id, accessToken)
    switch (responseData.status) {
      case 'success':
        _item = {
          id: String(responseData.data.item._id),
          login: String(responseData.data.item.login),
          firstName: String(responseData.data.item.firstName),
          lastName: String(responseData.data.item.lastName),
          age: Number(responseData.data.item.age),
          city: String(responseData.data.item.city),
          about: String(responseData.data.item.about),
          avatar: String(responseData.data.item.avatar),
          createdAt: String(responseData.data.item.createdAt),
          accessToken: String(responseData.data.item.accessToken),
        }
        break
      case 'error':
        _item = null
        break
    }

    return _item
  }
  public async login(
    login: string,
    password: string,
    remember: boolean,
  ): Promise<boolean> {
    return await axios
      .post(`${this.servicesUrl}/login`, {
        login,
        password,
      })
      .then((response) => {
        localStorage.setItem(
          'chuckchuck:user:id',
          String(response.data.data.item.id),
        )
        localStorage.setItem(
          'chuckchuck:user:access-token',
          String(response.data.data.item.accessToken),
        )
        return true
      })
      .catch(() => {
        return false
      })
  }
  public async fetchSelfItem(): Promise<IUserAPIItem | null> {
    const userId = localStorage.getItem('chuckchuck:user:id')
    const userAccessToken = localStorage.getItem('chuckchuck:user:access-token')

    if (userId && userAccessToken) {
      return await this.getItem(userId, userAccessToken)
    }

    return null
  }
}

const userAPI = new UserAPI('users')

export default userAPI
