<template>
    <d2-container >

    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="5">
        <el-card class="box-card">
<!--          <div slot="header" class="clearfix">-->
            <span>个人信息
              <el-button icon=" el-icon-edit" size="mini" type="text" style="float: right" @click="editChange">{{buttonValue}}</el-button>
              <el-button icon="el-icon-circle-close" size="mini" type="text" style="float: right" v-if="buttonValue === '保存'"
                @click="buttonValue = '修改'">取消</el-button>
            </span>
<!--          </div>-->
          <div>
            <div style="text-align: center">
            </div>
            <ul class="user-info">
              <li>用户名称<div class="user-right">{{`${info.name}`}}</div></li>
              <li>用户邮箱<div class="user-right">{{`${info.mail}`}}</div></li>
              <li>创建日期<div class="user-right">{{`${info.createTime}`}}</div></li>
              <li>家乡城市
                <el-cascader v-if="buttonValue !== '修改'" style="float: right"
                   size="mini"
                   :options="options"
                   v-model="selectedOptions"
                   @change="handleChange">
                </el-cascader>
                <a style="float: right" v-else>{{`${info.city}`}}</a>
              </li>
              <li>
                安全设置
                <div style="float:right;">
                  <updateEmail></updateEmail>
                </div>
                <a style="float: right">&nbsp;&nbsp;</a>
                <div style="float: right;">
                  <update-pwd></update-pwd>
                </div>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
    
        <el-col :xs="24" :sm="24" :md="16" :lg="18" :xl="19">
            <el-card class="box-card">
            <div class="user-right">
                <d2-crud
                    ref="d2Crud"
                    :columns="columns"
                    :data="tableData"
                    :options="options"
                    :pagination="pagination"
                    @pagination-current-change="paginationCurrentChange"/>
            </div>
            </el-card>
        </el-col>
    </el-row>
        
    </d2-container>
</template>

<script>
import { mapState} from 'vuex'
import { regionData, CodeToText } from 'element-china-area-data'
import updateEmail from './email'
import updatePwd from './password'

export default {
  components: {updateEmail, updatePwd},
  data(){
        return {
          columns: [
            {
              key: 'oj', title: '平台', minWidth: 60, align: 'center', resizable: true,
              filters: [
                {text: '计蒜客', value: '计蒜客'},
                {text: 'NowCoder', value: 'NowCoder'},
                {text: 'CodeForces', value: 'CoderForces'},
                {text: 'CodeChef', value: 'CodeChef'},
                {text: 'Atcoder', value: 'Atcoder'}
              ],
              filterMethod(value, row) {
                console.log(value);
                console.log(row);
                return row.oj === value
              },
              filterPlacement: 'bottom-end'
            },
            {key: 'name', title: '比赛', tooltip: true, align: 'center', resizable: true, sortable: true},
            {key: 'startTime', title: '开始时间', align: 'center', resizable: true, sortable: true},
            {key: 'endTime', title: '结束时间', align: 'center', resizable: true, sortable: true},
            {key: 'length', title: '时长', align: 'center', resizable: true, sortable: true},
            {key: 'week', title: '星期', align: 'center', resizable: true, sortable: true}
          ],
          user: {
            'avatar': 'https://www.pistachiol.club:8084/image/theme/d2/logo/icon-only.png',
            'username': "GreenHatHG",
            'phone': '13712345678',
            'email': '123123@qq.com',
            'createTime': '2019-04-11 11:12:13'
          },
          tableData: [
            {
              'oj': 'HDU',
              'name': '牛客小白月赛17',
              'startTime': '2019-09-13 19:00',
              'endTime': '2019-09-13 22:00',
              'length': '03:00',
              'week': '星期五'
            },
            {
              'oj': 'HDU',
              'name': 'The Preliminary Contest for ICPC Asia Shenyang 2019',
              'startTime': '2019-09-13 19:00',
              'endTime': '2019-09-13 22:00',
              'length': '03:00',
              'week': '星期五'
            },
            {
              'oj': 'HDU',
              'name': '计蒜客信息学9月普及组模拟赛',
              'startTime': '2019-09-13 19:00',
              'endTime': '2019-09-13 22:00',
              'length': '03:00',
              'week': '星期五'
            },
            {
              'oj': 'HDU',
              'name': '计蒜客信息学9月普及组模拟赛',
              'startTime': '2019-09-13 19:00',
              'endTime': '2019-09-13 22:00',
              'length': '03:00',
              'week': '星期五'
            },
            {
              'oj': 'HDU',
              'name': '计蒜客信息学9月普及组模拟赛',
              'startTime': '2019-09-13 19:00',
              'endTime': '2019-09-13 22:00',
              'length': '03:00',
              'week': '星期五'
            },
            {
              'oj': 'HDU',
              'name': '计蒜客信息学9月普及组模拟赛',
              'startTime': '2019-09-13 19:00',
              'endTime': '2019-09-13 22:00',
              'length': '03:00',
              'week': '星期五'
            }
          ],
          pagination: {
            currentPage: 1,
            pageSize: 3,
            total: 20
          },
          options: regionData,
          selectedOptions: [],
          buttonValue: '修改',
          city: '',
          dialogFormVisible: false,
          form: {
            email: '',
            code: ''
          },
          rules: {
            email: [
              {required: true, message: '请输入邮箱', trigger: 'blur'}
            ],
            code: [
              {required: true, message: '请输入验证码', trigger: 'blur'}
            ]
          },
          content: '发送验证码',
          totalTime: 10,
          canClick: true
        }
    },
    methods:{
        paginationCurrentChange (currentPage) {
            this.pagination.currentPage = currentPage
            this.fetchData()
        },
        fetchData () {
            this.loading = true
            BusinessTable1List({
                ...this.pagination
            }).then(res => {
                this.data = res.list
                this.pagination.total = res.page.total
                this.loading = false
            }).catch(err => {
                console.log('err', err)
                this.loading = false
            })
        },
        handleChange(value) {
          console.log(value)
          let s = ''
          let len = value.length
          value.forEach(function (item) {
            s += CodeToText[item]
            len--
            if (len >= 1)
              s += '-'
          })
          this.city = s
        },
        async editChange() {
          if (this.buttonValue === '修改') {
            this.buttonValue = '保存'
          } else {
            await this.$store.dispatch('d2admin/user/set', {
              name: this.info.name,
              mail: this.info.mail,
              createTime: this.info.createTime,
              city: this.city
            }, { root: true })
            this.buttonValue = '修改'
          }
        }
    },
    computed: {
      ...mapState('d2admin/user', [
        'info'
      ])
    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .avatar-uploader-icon {
    font-size: 28px;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center
  }

  .avatar {
    width: 120px;
    height: 120px;
    display: block;
    border-radius: 50%
  }

  .user-info {
    padding-left: 0px;
    list-style: none;
    li{
      border-bottom: 1px solid #F0F3F4;
      border-top: 1px solid #F0F3F4;
      padding: 11px 0px;
      font-size: 13px;
    }
    .user-right {
      float: right;
      text-align: center;
      a{
        color: #317EF3;
      }
    }
  }

</style>