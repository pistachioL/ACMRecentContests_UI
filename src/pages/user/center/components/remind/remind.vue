<template>
  <div>
    <d2-crud
            ref="d2Crud"
            :columns="columns"
            @dialog-cancel="handleDialogCancel"
            :data="tableData"
            :loading="loading"/>
  </div>
</template>

<script>
  import remindOperating from './remindOperating'
  import { getRemindInfos} from '@/api/remind/remind'

  export default {
    data () {
      return {
        tableData:[],
        loading: true,
        columns: [
          {
            title: '日期',
            key: 'sendDate',
            showOverflowTooltip: true,
            sortable: true,
            minWidth: 110
          },
          {
            title: '名字',
            key: 'name',
            showOverflowTooltip: true,
            minWidth: 200
          },
          {
            title: '接收方式',
            key: 'type',
          },
          {
            title: '状态',
            key: 'state',
          },
          {
            minWidth: 100,
            title: '操作',
            key: 'operating',
            component: {
              name: remindOperating
            }
          }
        ]
      }
    },
    methods:{
      handleDialogCancel (done) {
        this.$message.info('取消编辑',)
        done()
      },
      getData(){
        getRemindInfos().then(res=>{
          this.tableData = res
          this.$store.dispatch('d2admin/db/set', {
            dbName: 'remindData',
            path: 'remindData.tableData',
            value: this.tableData,
            user: true
          })

          this.loading = false
        })
      }
    },
    mounted() {
      this.getData()
      this.$bus.$on('updateData',()=>{
        this.getData()
      });
    },
    components:{
      remindOperating
    }

  }
</script>