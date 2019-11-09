import request from '@/plugin/axios'

export function upHome (data) {
  return request({
    url: '/userinfo/city',
    method: 'put',
    params: data
  })
}