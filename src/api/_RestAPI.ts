import config from '../config'
import axios from 'axios'

enum ERestAPIStatuses {
  SUCCESS = 'success',
  ERROR = 'error',
}
interface IRestAPISuccessResponse<T> {
  status: ERestAPIStatuses.SUCCESS
  data: T
}
interface IRestAPIErrorResponse {
  status: ERestAPIStatuses.ERROR
  message: string
}
type TRestAPIResponse<T> = IRestAPISuccessResponse<T> | IRestAPIErrorResponse

interface IRestAPIQuery {
  [key: string]: string | number
}
type TRestAPIQueries = IRestAPIQuery[]

abstract class _RestAPI {
  protected object: string
  protected backendUrl: string
  protected apiUrl: string
  protected apiObjectUrl: string
  protected servicesUrl: string

  protected constructor(object: string) {
    this.object = object

    this.backendUrl = [
      config.backend.host,
      config.backend.port ? `:${config.backend.port}` : '',
    ].join('')

    this.apiUrl = `${this.backendUrl}${config.backend.apiFolder}`
    this.apiObjectUrl = `${this.apiUrl}/${this.object}`

    this.servicesUrl = `${this.backendUrl}${config.backend.servicesFolder}`
  }

  protected async index<T>(
    additionParams: (string | number)[] = [],
    queries: TRestAPIQueries = [],
  ): Promise<TRestAPIResponse<T>> {
    const url = _RestAPI.generateUrl(this.apiObjectUrl, additionParams)

    return await this.getRequest<T>(url, queries)
  }
  protected async show<T>(
    id: string | number,
    additionParams: (string | number)[] = [],
    queries: TRestAPIQueries = [],
  ): Promise<TRestAPIResponse<T>> {
    const url = _RestAPI.generateUrl(this.apiObjectUrl, [id, ...additionParams])

    return await this.getRequest<T>(url, queries)
  }
  protected async create<T>(
    additionParams: (string | number)[] = [],
    body: TRestAPIQueries = [],
    queries: TRestAPIQueries = [],
  ): Promise<TRestAPIResponse<T>> {
    const url = _RestAPI.generateUrl(this.apiObjectUrl, additionParams)

    return await this.postRequest<T>(url, body, queries)
  }
  protected async edit<T>(
    additionParams: (string | number)[] = [],
    body: TRestAPIQueries = [],
    queries: TRestAPIQueries = [],
  ): Promise<TRestAPIResponse<T>> {
    const url = _RestAPI.generateUrl(this.apiObjectUrl, additionParams)

    return await this.patchRequest<T>(url, body, queries)
  }
  protected async destroy<T>(
    id: string | number,
    additionParams: (string | number)[] = [],
    queries: TRestAPIQueries = [],
  ): Promise<TRestAPIResponse<T>> {
    const url = _RestAPI.generateUrl(this.apiObjectUrl, [id, ...additionParams])

    return await this.deleteRequest<T>(url, queries)
  }

  protected static generateUrl(
    mainUrl: string,
    additionParams: (string | number)[],
  ) {
    return `${mainUrl}/${additionParams.join('/')}`
  }

  protected async getRequest<T>(
    url: string,
    queries: TRestAPIQueries,
  ): Promise<TRestAPIResponse<T>> {
    return await axios
      .get(url, {
        params: { ...queries },
      })
      .then((response) => {
        const responseData: IRestAPISuccessResponse<T> = response.data
        return responseData
      })
      .catch((error) => {
        const responseData: IRestAPIErrorResponse = error.response.data
        return responseData
      })
  }
  protected async postRequest<T>(
    url: string,
    body: TRestAPIQueries,
    queries: TRestAPIQueries,
  ): Promise<TRestAPIResponse<T>> {
    return await axios
      .post(
        url,
        { ...body },
        {
          params: { ...queries },
        },
      )
      .then((response) => {
        const responseData: IRestAPISuccessResponse<T> = response.data
        return responseData
      })
      .catch((error) => {
        const responseData: IRestAPIErrorResponse = error.response.data
        return responseData
      })
  }
  protected async patchRequest<T>(
    url: string,
    body: TRestAPIQueries,
    queries: TRestAPIQueries,
  ): Promise<TRestAPIResponse<T>> {
    return await axios
      .patch(
        url,
        { ...body },
        {
          params: { ...queries },
        },
      )
      .then((response) => {
        const responseData: IRestAPISuccessResponse<T> = response.data
        return responseData
      })
      .catch((error) => {
        const responseData: IRestAPIErrorResponse = error.response.data
        return responseData
      })
  }
  protected async deleteRequest<T>(
    url: string,
    queries: TRestAPIQueries,
  ): Promise<TRestAPIResponse<T>> {
    return await axios
      .delete(url, {
        params: { ...queries },
      })
      .then((response) => {
        const responseData: IRestAPISuccessResponse<T> = response.data
        return responseData
      })
      .catch((error) => {
        const responseData: IRestAPIErrorResponse = error.response.data
        return responseData
      })
  }
}
