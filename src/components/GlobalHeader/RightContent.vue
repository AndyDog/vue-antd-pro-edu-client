<template>
  <div :class="wrpCls">
    <!-- <div>
      {{ userInfo && Object.keys(userInfo).length > 0 }}
    </div> -->
    <avatar-dropdown v-if="AccessToken && Object.keys(AccessToken).length > 0" :menu="showMenu"
      :current-user="AccessToken" :class="prefixCls" />
    <!-- <select-lang :class="prefixCls" /> -->
    <!-- @click="login" -->

    <div v-else style="color: red" @click="login">登录/注册 </div>
  </div>
</template>

<script>
import AvatarDropdown from './AvatarDropdown'
import SelectLang from '@/components/SelectLang'
import { mapState } from 'vuex'
import storage from 'store'
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
      AccessToken: ""
    }
  },
  computed: {
    wrpCls() {
      return {
        'ant-pro-global-header-index-right': true,
        [`ant-pro-global-header-index-${this.isMobile || !this.topMenu ? 'light' : this.theme}`]: true,
      }
    },
    ...mapState({
      // 动态主路由
      userInfo: (state) => state.user.info,
    })

  },
  watch: {
    userInfo: {
      deep: true,
      handler(newVal, oldVal) {
        //newVal和oldVal会包含formData里面的每一个属性值
        let AccessToken = storage.get('Access-Token')
        console.log(AccessToken)
        this.AccessToken = AccessToken
      }
    }

  },
  methods: {
    login() {
      this.$store.dispatch('Logout').then(() => {
        this.$router.push({ path: '/user/login' })
      })
      // this.$router.push('/user/login?type=test')
    },
  },
  mounted() {

    let AccessToken = storage.get('Access-Token')
    console.log(AccessToken)
    this.AccessToken = AccessToken

    // setTimeout(() => {
    //   this.currentUser = {
    //     name: '梁海军',
    //   }
    // }, 1500)
  },
}
</script>
