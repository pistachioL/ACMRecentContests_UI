import request from '@/plugin/axios'

export function getCommentList() {
    return request({
        url: '/getOther',
        method: 'get'
    })
}