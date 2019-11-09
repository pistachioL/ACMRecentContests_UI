import request from '@/plugin/axios'

export function getCaptcha () {
    return request({
        url: '/captcha',
        method: 'get',
    })
}