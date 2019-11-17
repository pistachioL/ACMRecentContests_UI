import request from '@/plugin/axios'

export function postComment(data) {
    return request({
        url: '/comment',
        method: 'post',
        data                 //RequestBody不需要param
    })
}