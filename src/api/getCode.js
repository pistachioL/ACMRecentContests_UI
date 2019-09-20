import request from '@/plugin/axios'

export function getCode (data) {
    return request({
        url: '/v1/code',
        method: 'post',
        data
    })
}