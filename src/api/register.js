import request from '@/plugin/axios'

export function register(data, code) {
    let url = '/register';
    if(code !== null){
        url = url + "?code=" + code;
    }
    return request({
        url: url,
        method: 'post',
        data
    })
}