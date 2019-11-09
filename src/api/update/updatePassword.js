import request from '@/plugin/axios'

export function getUpdatePasswordCodeAPI (data) {
  return request({
    url: '/userinfo/emailcode',
    method: 'get',
    params: data
  })
}

export function updatePasswordAPI (data) {
  return request({
    url: '/userinfo/password',
    method: 'put',
    params: data
  })
}