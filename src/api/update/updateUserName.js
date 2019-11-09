import request from '@/plugin/axios'

export function updateUserName (data) {
  return request({
    url: '/userinfo/username',
    method: 'put',
    params: data
  })
}