import request from '@/plugin/axios'

export function resetpwd (data) {
  return request({
    url: 'v1/resetpwd',
    method: 'post',
    data
  })
}
