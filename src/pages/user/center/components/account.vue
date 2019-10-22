<template>
    <el-col>
      <h5>设置中心</h5>
      <update-home ref="home"></update-home>
      <el-menu
              default-active="1"
              class="el-menu-vertical-demo">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span>个人信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item class='el-icon-edit' index="1-1" @click="updateName">修改姓名</el-menu-item>
            <br/>
            <el-menu-item class='el-icon-location-outline' index="1-2" @click="updateHome">修改家乡</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-claim"></i>
            <span>安全相关</span>
          </template>
          <el-menu-item-group>
            <update-email ref="email"></update-email>
            <el-menu-item class='el-icon-postcard' index="1-1" @click="updateEmail">修改邮箱</el-menu-item>
            <br/>
            <update-password ref="password"/>
            <el-menu-item class='el-icon-key' index="1-2" @click="updatePassword">修改密码</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
</template>

<script>
  import { mapState} from 'vuex'
  import updateEmail from '../dialog/email'
  import updateHome from '../dialog/cascader'
  import updatePassword from '../dialog/password'

  export default {
    components: {updateEmail, updateHome, updatePassword},
    data(){
      return{

      }
    },
    methods:{
      updateName(){
        this.$prompt('请输入修改后姓名', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的姓名更新为: ' + value
          });
          this.$store.dispatch('d2admin/user/set', {
            name: value,
            mail: this.info.mail,
            createTime: this.info.createTime,
            city: this.city
          }, { root: true })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      updateEmail(){
        this.$refs.email.open()
      },
      updateHome(){
        this.$refs.home.open()
      },
      updatePassword(){
        this.$refs.password.open()
      }

    },
    computed: {
      ...mapState('d2admin/user', [
        'info'
      ])
    }
  }
</script>

<style scoped>
</style>