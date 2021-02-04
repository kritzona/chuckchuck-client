import axios from 'axios'
import config from '../config'

export interface IRestAPIErrorResponse {
  status: 'error'
  message: string
}
export interface IRestAPISuccessResponse {
  status: 'success'
  data: any
}

export type TRestAPIResponse = IRestAPIErrorResponse | IRestAPISuccessResponse

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
  }

  protected async index(accessToken: string): Promise<TRestAPIResponse> {
    return await axios
      .get(`${this.apiObjectUrl}`)
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
  }
  protected async show(
    id: string,
    accessToken: string,
    childrenObject?: string,
    childrenObjectId?: string,
  ): Promise<TRestAPIResponse> {
    return await axios
      .get(
        `${this.apiObjectUrl}/${id}${
          childrenObject && !childrenObjectId ? `/${childrenObject}` : ''
        }${
          childrenObject && childrenObjectId
            ? `/${childrenObject}/${childrenObjectId}`
            : ''
        }`,
        {
          params: {
            accessToken,
          },
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
  }
  protected async create(properties: {}): Promise<TRestAPIResponse> {
    return await axios
      .post(`${this.apiObjectUrl}`, properties)
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
  }
  protected async edit(
    id: string,
    editedProperties: {},
    accessToken: string,
  ): Promise<TRestAPIResponse> {
    return await axios
      .put(`${this.apiObjectUrl}/${id}`, editedProperties)
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
  }
  protected async destroy(
    id: string,
    accessToken: string,
  ): Promise<TRestAPIResponse> {
    return await axios
      .delete(`${this.apiObjectUrl}/${id}`)
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
  }
}

export default RestAPI
