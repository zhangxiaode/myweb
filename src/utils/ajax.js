import axios from 'axios'
import store from '@/store/index'

class Ajax {
  constructor () {
    this.initAxios()
  }
  initAxios () {
    // 服务器代理选择
    this.baseUrl = '/apis'
    this.instance = axios.create({
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    // 添加请求拦截器
    this.instance.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    // 显示loading
      store.commit('showLoading')
      return config
    }, (error) => {
      // 对请求错误做些什么
      store.commit('hideLoading')
      return Promise.reject(error)
    })
    // 添加响应拦截器
    this.instance.interceptors.response.use((response) => {
      // 对响应数据做点什么
      // 隐藏loading
      store.commit('hideLoading')
      return response
    }, (error) => {
      // 对响应错误做点什么
      store.commit('hideLoading')
      return Promise.reject(error)
    })
  }
  initParams (params) {
    // params.token = '' // axios公共参数配置
    return params
  }
  get (url, params) {
    return new Promise((resolve, reject) => {
      this.instance.get(this.baseUrl + url, {params: this.initParams(params)}).then((response) => {
        resolve(response.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
  post (url, params) {
    return new Promise((resolve, reject) => {
      this.instance.post(this.baseUrl + url, this.initParams(params))
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
export default new Ajax()
