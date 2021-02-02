import RestAPI, {
  IRestAPIErrorResponse,
  IRestAPISuccessResponse,
  TRestAPIResponse,
} from './RestAPI'
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

  public async getItem(id: string): Promise<IUserAPIItem | null> {
    let _item = null

    const responseData: TRestAPIResponse = await this.show(id)
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
    let _selfItem = null
    const userAccessToken = localStorage.getItem('chuckchuck:user:access-token')

    if (userAccessToken) {
      const responseData: TRestAPIResponse = await axios
        .get(`${this.servicesUrl}/fetch-self`, {
          params: {
            accessToken: userAccessToken,
          },
        })
        .then(
          (response): IRestAPISuccessResponse => {
            return {
              status: 'success',
              data: response.data.data,
            }
          },
        )
        .catch(
          (error): IRestAPIErrorResponse => {
            return {
              status: 'error',
              message: error.response.data.message,
            }
          },
        )

      switch (responseData.status) {
        case 'success':
          _selfItem = {
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
          _selfItem = null
          break
      }
    }

    return _selfItem
  }
}

const userAPI = new UserAPI('users')

export default userAPI
