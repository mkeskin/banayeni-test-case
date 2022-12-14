import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

const config: AxiosRequestConfig = {
  responseType: 'json',
  // Important: 3000 ms timeout is not enough for testing
  timeout: 3000,
  validateStatus: (status) => status >= 200 && status < 300, // default
}

const requestInterceptor = (config: AxiosRequestConfig) => {
  config.headers = {
    ...config.headers,
    Accept: 'application/json',
  }

  return config
}

const responseInterceptor = ({ data }: AxiosResponse) => {
  return data
}

export default axios.create({
  ...config,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

// just export like default instance for microservices
export const item = axios.create({
  ...config,
  baseURL: process.env.NEXT_PUBLIC_REMOTE_ADDR,
})

item.interceptors.request.use(requestInterceptor, (error) => {
  //
  console.warn('request error', error)
})

item.interceptors.response.use(responseInterceptor, (error) => {
  //
  console.warn('response error', error)
})
