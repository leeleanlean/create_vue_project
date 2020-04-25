import request from '@/common/request'

import * as model from './api-model'

export const Ids = (params) => {
  return request({
    url: '/api/ids',
    params: params,
    model: model.Ids
  })
}

export const Hhh = (params) => {
  return request({
    url: '/api/hhh'
  })
}
