import request from '@/plugin/axios'

export function getDetail(data) {
    return request({
        url: '/getDetail',
        method: 'get',
        params: data
    })
}