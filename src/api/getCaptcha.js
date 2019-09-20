import request from '@/plugin/axios'

export function getCaptcha () {
    return request({
        url: '/v1/captcha',
        method: 'get',
    })
}