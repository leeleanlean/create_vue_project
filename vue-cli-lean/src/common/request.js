import axios from 'axios'

let service = axios.create({
  timeout: 15000
})

service.interceptors.request.use((request) => {
  // 全局请求参数处理
  if (request.params) request.params = request.model.request(request.params)
  return request
})

service.interceptors.response.use((response) => {
  // 全局接收数据处理
  if (response.data) response.data = response.config.model.response(response.data)
  return response
})

export default service
