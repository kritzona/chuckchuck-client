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
interface IUserAPIAuthData {
  id: string
  accessToken: string
}

class UserAPI extends RestAPI {
  public constructor(object: string) {
    super(object)

    this.fetchItem = this.fetchItem.bind(this)
    this.login = this.login.bind(this)
    this.fetchAccount = this.fetchAccount.bind(this)
  }

  public async fetchItem(
    id: string,
    accessToken: string,
  ): Promise<IUserAPIItem | null> {
    let _item = null

    const responseData: TRestAPIResponse = await super.show(id, accessToken)
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
  ): Promise<IUserAPIAuthData | null> {
    return await axios
      .post(`${this.servicesUrl}/login`, {
        login,
        password,
      })
      .then((response) => {
        const authData = {
          id: String(response.data.data.item.id),
          accessToken: String(response.data.data.item.accessToken),
        }
        localStorage.setItem('chuckchuck:user:id', authData.id)
        localStorage.setItem(
          'chuckchuck:user:access-token',
          authData.accessToken,
        )

        return authData
      })
      .catch(() => {
        return null
      })
  }
  public async fetchAccount(
    id: string,
    accessToken: string,
  ): Promise<IUserAPIItem | null> {
    if (id && accessToken) {
      return await this.fetchItem(id, accessToken)
    }

    return null
  }
}

const userAPI = new UserAPI('users')

export default userAPI
