import request from '@/plugin/axios'

export function updateAvatar (data) {
  return request({
    url: '/userinfo/avatar',
    method: 'put',
    params: data
  })
}