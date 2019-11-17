import request from '@/plugin/axios'

export function postArticle(data) {
    return request({
        url: '/postArticle',
        method: 'post',
        data                 //RequestBody不需要param
    })
}