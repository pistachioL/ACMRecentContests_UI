import request from '@/plugin/axios'

export function getUpdateEmailCodeAPI (data) {
  return request({
    url: '/userinfo/emailcode',
    method: 'get',
    params: data
  })
}

export function updateEmailAPI (data) {
  return request({
    url: '/userinfo/email',
    method: 'put',
    params: data
  })
}