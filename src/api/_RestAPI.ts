import config from '../config'
import axios from 'axios'

export enum ERestAPIStatuses {
  SUCCESS = 'success',
  ERROR = 'error',
}
export interface IRestAPISuccessResponse<T> {
  status: ERestAPIStatuses.SUCCESS
  data: T
}
export interface IRestAPIErrorResponse {
  status: ERestAPIStatuses.ERROR
  message: string
}
export type TRestAPIResponse<T> =
  | IRestAPISuccessResponse<T>
  | IRestAPIErrorResponse

export interface IRestAPIQuery {
  [key: string]: string | number
}

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

    this.index = this.index.bind(this)
    this.show = this.show.bind(this)
    this.create = this.create.bind(this)
    this.edit = this.edit.bind(this)
    this.destroy = this.destroy.bind(this)
    this.generateUrl = this.generateUrl.bind(this)
    this.getRequest = this.getRequest.bind(this)
    this.postRequest = this.postRequest.bind(this)
    this.patchRequest = this.patchRequest.bind(this)
    this.deleteRequest = this.deleteRequest.bind(this)
  }

  protected async index<T>(
    additionParams: (string | number)[] = [],
    queries: IRestAPIQuery = {},
  ): Promise<TRestAPIResponse<T>> {
    const url = this.generateUrl(this.apiObjectUrl, additionParams)

    return await this.getRequest<T>(url, queries)
  }
  protected async show<T>(
    id: string | number,
    additionParams: (string | number)[] = [],
    queries: IRestAPIQuery = {},
  ): Promise<TRestAPIResponse<T>> {
    const url = this.generateUrl(this.apiObjectUrl, [id, ...additionParams])

    return await this.getRequest<T>(url, queries)
  }
  protected async create<T>(
    additionParams: (string | number)[] = [],
    body: IRestAPIQuery = {},
    queries: IRestAPIQuery = {},
  ): Promise<TRestAPIResponse<T>> {
    const url = this.generateUrl(this.apiObjectUrl, additionParams)

    return await this.postRequest<T>(url, body, queries)
  }
  protected async edit<T>(
    additionParams: (string | number)[] = [],
    body: IRestAPIQuery = {},
    queries: IRestAPIQuery = {},
  ): Promise<TRestAPIResponse<T>> {
    const url = this.generateUrl(this.apiObjectUrl, additionParams)

    return await this.patchRequest<T>(url, body, queries)
  }
  protected async destroy<T>(
    id: string | number,
    additionParams: (string | number)[] = [],
    queries: IRestAPIQuery = {},
  ): Promise<TRestAPIResponse<T>> {
    const url = this.generateUrl(this.apiObjectUrl, [id, ...additionParams])

    return await this.deleteRequest<T>(url, queries)
  }

  protected generateUrl(mainUrl: string, additionParams: (string | number)[]) {
    return `${mainUrl}/${additionParams.join('/')}`
  }

  protected async getRequest<T>(
    url: string,
    queries: IRestAPIQuery,
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
    body: IRestAPIQuery,
    queries: IRestAPIQuery,
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
    body: IRestAPIQuery,
    queries: IRestAPIQuery,
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
    queries: IRestAPIQuery,
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

export default _RestAPI
