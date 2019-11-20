import request from '@/plugin/axios'

export function getCommentCounts(data) {
    return request({
        url: '/counts',
        method: 'get',
        params: data
    })
}