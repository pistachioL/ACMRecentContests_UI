import request from '@/plugin/axios'

export function getCommentCounts() {
    return request({
        url: '/counts',
        method: 'get',
    })
}