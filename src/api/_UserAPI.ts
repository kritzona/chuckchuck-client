import _RestAPI, { ERestAPIStatuses } from './_RestAPI'

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
}
interface IUserAPIItemWithAccessToken extends IUserAPIItem {
  accessToken: string
}
interface IUserAPILoginSuccessResponse {
  item: IUserAPIItemWithAccessToken
}

class _UserAPI extends _RestAPI {
  public constructor(object: string) {
    super(object)

    this.login = this.login.bind(this)
  }

  public async login(
    login: string,
    password: string,
    remember: boolean,
  ): Promise<IUserAPIItemWithAccessToken | false> {
    try {
      const url = super.generateUrl(this.servicesUrl, ['login'])
      const response = await super.postRequest<IUserAPILoginSuccessResponse>(
        url,
        { login, password },
        {},
      )

      switch (response.status) {
        case ERestAPIStatuses.SUCCESS:
          const userItem = response.data.item
          if (remember) {
            localStorage.setItem('chuckchuck:user:id', userItem.id)
            localStorage.setItem(
              'chuckchuck:user:access-token',
              userItem.accessToken,
            )
          } else {
            sessionStorage.setItem('chuckchuck:user:id', userItem.id)
            sessionStorage.setItem(
              'chuckchuck:user:access-token',
              userItem.accessToken,
            )
          }

          return userItem
        case ERestAPIStatuses.ERROR:
          return false
      }
    } catch (error) {
      return false
    }
  }
}

export default _UserAPI
