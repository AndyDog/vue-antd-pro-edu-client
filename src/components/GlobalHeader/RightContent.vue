<template>
  <div :class="wrpCls">
    <!-- <avatar-dropdown :menu="showMenu" :current-user="currentUser" :class="prefixCls" /> -->
    <!-- <select-lang :class="prefixCls" /> -->
    <!-- @click="login" -->
    <div style="color: red" @click="login">登录/注册</div>
  </div>
</template>

<script>
import AvatarDropdown from './AvatarDropdown'
import SelectLang from '@/components/SelectLang'

export default {
  name: 'RightContent',
  components: {
    AvatarDropdown,
    SelectLang,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-pro-global-header-index-action',
    },
    isMobile: {
      type: Boolean,
      default: () => false,
    },
    topMenu: {
      type: Boolean,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showMenu: true,
      currentUser: {},
    }
  },
  computed: {
    wrpCls() {
      return {
        'ant-pro-global-header-index-right': true,
        [`ant-pro-global-header-index-${this.isMobile || !this.topMenu ? 'light' : this.theme}`]: true,
      }
    },
  },
  methods: {
    login() {
      this.$store.dispatch('Logout').then(() => {
        this.$router.push({ path: '/user/login?type=test' })
      })

      // this.$router.push('/user/login?type=test')
    },
  },
  mounted() {
    setTimeout(() => {
      this.currentUser = {
        name: '梁海军',
      }
    }, 1500)
  },
}
</script>
