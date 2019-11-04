import request from '@/plugin/axios'

export function setRemind (data) {
  return request({
    url: '/remind/remind_info',
    method: 'post',
    params: data
  })
}