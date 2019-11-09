<template>
  <el-dropdown size="small" class="d2-mr">
    <span class="btn-text">{{info.name ? `你好 ${info.name}` : '未登录'}}</span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-if="info.name" @click.native="logOff">
        <d2-icon name="power-off" class="d2-mr-5"/>
          注销
      </el-dropdown-item>
      <el-dropdown-item v-else @click.native="login">
        <d2-icon name="power-off" class="d2-mr-5"/>
          登录
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('d2admin/user', [
      'info'
    ])
  },
  methods: {
    ...mapActions('d2admin/account', [
      'logout'
    ]),
    /**
     * @description 登出
     */
    logOff () {
      this.logout({
        confirm: true
      })
    },
    /**
     * @description 登录
     */
    login () {
      this.$router.push({path:'/login'})
    }

  }
}
</script>
