import request from '@/plugin/axios'
/**获取帖子数据（头像 标题 内容） */
export function getComment (data) {
    return request({
        url: '/comment',
        method: 'post',
        data
    })
}