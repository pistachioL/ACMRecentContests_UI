import request from '@/plugin/axios'

export function getComment(data) {
    return request({
        url: '/comments',
        method: 'get',
        params: data
    })
}