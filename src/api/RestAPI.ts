import config from '../config'
import axios, { CancelToken } from 'axios'

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

abstract class RestAPI {
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
    accessToken?: string,
    cancelToken?: CancelToken,
  ): Promise<TRestAPIResponse<T>> {
    const url = this.generateUrl(this.apiObjectUrl, additionParams)

    return await this.getRequest<T>(url, queries, accessToken, cancelToken)
  }
  protected async show<T>(
    id: string | number,
    additionParams: (string | number)[] = [],
    queries: IRestAPIQuery = {},
    accessToken?: string,
  ): Promise<TRestAPIResponse<T>> {
    const url = this.generateUrl(this.apiObjectUrl, [id, ...additionParams])

    return await this.getRequest<T>(url, queries, accessToken)
  }
  protected async create<T>(
    additionParams: (string | number)[] = [],
    body: IRestAPIQuery = {},
    queries: IRestAPIQuery = {},
    accessToken?: string,
  ): Promise<TRestAPIResponse<T>> {
    const url = this.generateUrl(this.apiObjectUrl, additionParams)

    return await this.postRequest<T>(url, body, queries, accessToken)
  }
  protected async edit<T>(
    additionParams: (string | number)[] = [],
    body: IRestAPIQuery = {},
    queries: IRestAPIQuery = {},
    accessToken?: string,
  ): Promise<TRestAPIResponse<T>> {
    const url = this.generateUrl(this.apiObjectUrl, additionParams)

    return await this.patchRequest<T>(url, body, queries, accessToken)
  }
  protected async destroy<T>(
    id: string | number,
    additionParams: (string | number)[] = [],
    queries: IRestAPIQuery = {},
    accessToken?: string,
  ): Promise<TRestAPIResponse<T>> {
    const url = this.generateUrl(this.apiObjectUrl, [id, ...additionParams])

    return await this.deleteRequest<T>(url, queries, accessToken)
  }

  protected generateUrl(mainUrl: string, additionParams: (string | number)[]) {
    return `${mainUrl}/${additionParams.join('/')}`
  }

  protected async getRequest<T>(
    url: string,
    queries: IRestAPIQuery,
    accessToken?: string,
    cancelToken?: CancelToken,
  ): Promise<TRestAPIResponse<T>> {
    const headers: { [key: string]: string } = {
      ContextType: 'application/x-www-form-urlencoded',
    }
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`
    }

    return await axios
      .get(url, {
        headers,
        params: { ...queries },
        cancelToken,
        withCredentials: true,
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
    accessToken?: string,
  ): Promise<TRestAPIResponse<T>> {
    const headers: { [key: string]: string } = {
      ContextType: 'multipart/form-data',
    }
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`
    }

    return await axios
      .post(
        url,
        { ...body },
        {
          headers,
          params: { ...queries },
          withCredentials: true,
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
    accessToken?: string,
  ): Promise<TRestAPIResponse<T>> {
    const headers: { [key: string]: string } = {
      ContextType: 'multipart/form-data',
    }
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`
    }

    return await axios
      .patch(
        url,
        { ...body },
        {
          headers,
          params: { ...queries },
          withCredentials: true,
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
    accessToken?: string,
  ): Promise<TRestAPIResponse<T>> {
    const headers: { [key: string]: string } = {
      ContextType: 'application/x-www-form-urlencoded',
    }
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`
    }

    return await axios
      .delete(url, {
        headers,
        params: { ...queries },
        withCredentials: true,
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

export default RestAPI
