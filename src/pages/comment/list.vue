<template>
      <a-list
        class="comment-list"
        :header="`${data.length} replies`"
        itemLayout="horizontal"
        :dataSource="data"
      >
      
      <a-list-item slot="renderItem" slot-scope="item">
        <a-comment
          :author="item.author"
          :avatar="item.avatar"
        >

        <template slot="actions">
          <span v-for-key="action in item.actions">{{action}}</span>
        </template>
        <p slot="content">{{item.content}}</p>
        <a-tooltip slot="datetime" :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
          <span>{{item.datetime.fromNow()}}</span>
        </a-tooltip>
      </a-comment>
    </a-list-item>
  </a-list>
</template>
<script>
import moment from 'moment'
export default {
  data () {
    return {
      data: [
        {
          
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: '对啊,回去要多刷题了',
          datetime: moment().subtract(1, 'days')
        }

      ],
      moment,
    }
  },
}
</script>