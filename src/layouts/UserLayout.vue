<template>
  <div id="userLayout" :class="['user-layout-wrapper', isMobile && 'mobile']">
    <div class="container">
      <!-- <div class="user-layout-lang">
        <select-lang class="select-lang-trigger" />
      </div> -->



      <div class="user-layout-content">


        <div class="user-layout-content1">
          <el-image :src="loginbackground" style="width: 470px; height: 510px" fit="cover">
            <div slot="error" class="image-slot">
              <img style="width: 470px; height: 510px" src="@/assets/loginBg2.png" class="logo" alt="logo" />
            </div>
          </el-image>
        </div>
        <div class="user-layout-content-right">

          <div class="top">
            <div class="header">
              <a href="/">
                <img src="@/assets/logo.png" class="logo" alt="logo" />
                <span class="title">国家应急医学研究中心</span>
              </a>
            </div>
            <div class="desc">
              国家应急医学研究中心
              <!-- {{ $t('layouts.userLayout.title') }} -->
            </div>
          </div>

          <router-view />

          <div class="footer">
            <!-- <div class="links">
            <a href="_self">帮助</a>
            <a href="_self">隐私</a>
            <a href="_self">条款</a>
          </div> -->
            <div class="copyright">Copyright &copy; 版权所有未经允许请勿转载</div>
          </div>
        </div>




      </div>
    </div>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import { deviceMixin } from '@/store/device-mixin'
import SelectLang from '@/components/SelectLang'
import { mapState } from 'vuex'
export default {
  name: 'UserLayout',
  components: {
    SelectLang,
  },
  mixins: [deviceMixin],
  computed: {
    ...mapState({
      nickname: (state) => state.user.nickname,
      welcome: (state) => state.user.welcome,
      loginbackground: (state) => state.app.imgList['loginbackground'],
    }),
  },

  mounted() {
    document.body.classList.add('userLayout')
  },
  beforeDestroy() {
    document.body.classList.remove('userLayout')
  },
}
</script>

<style lang="less" scoped>
#userLayout.user-layout-wrapper {
  height: 100%;

  // background: url('../assets/loginBg.jpg');
  &.mobile {
    .container {
      .main {
        max-width: 368px;
        width: 98%;
      }
    }
  }

  .container {
    width: 100%;
    min-height: 100%;
    background: #f0f2f5 url(~@/assets/loginBg.jpg) no-repeat 50%;
    background-size: cover;
    //padding: 50px 0 84px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .user-layout-lang {
      width: 100%;
      height: 40px;
      line-height: 44px;
      text-align: right;

      .select-lang-trigger {
        cursor: pointer;
        padding: 12px;
        margin-right: 24px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        vertical-align: middle;
      }
    }

    .user-layout-content {

      background: #fff;
      display: flex;


      .user-layout-content1 {}

      .user-layout-content-right {
        padding: 32px 24px;
      }


      .top {
        text-align: center;

        .header {
          height: 44px;
          line-height: 44px;

          .badge {
            position: absolute;
            display: inline-block;
            line-height: 1;
            vertical-align: middle;
            margin-left: -12px;
            margin-top: -10px;
            opacity: 0.8;
          }

          .logo {
            height: 44px;
            vertical-align: top;
            margin-right: 16px;
            border-style: none;
          }

          .title {
            font-size: 33px;
            color: rgba(0, 0, 0, 0.85);
            font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
            font-weight: 600;
            position: relative;
            top: 2px;
          }
        }

        .desc {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.45);
          margin-top: 12px;
          margin-bottom: 40px;
        }
      }

      .main {
        min-width: 260px;
        width: 368px;
        margin: 0 auto;
      }

      .footer {
        // position: absolute;
        width: 100%;
        bottom: 0;
        padding: 0 16px;
        margin: 48px 0 24px;
        text-align: center;

        .links {
          margin-bottom: 8px;
          font-size: 14px;

          a {
            color: rgba(0, 0, 0, 0.45);
            transition: all 0.3s;

            &:not(:last-child) {
              margin-right: 40px;
            }
          }
        }

        .copyright {
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
        }
      }
    }

    .user-layout-content1 {
      width: 470px;
      height: 510px;

      img {
        width: 470px;
        height: 510px;
      }
    }

    a {
      text-decoration: none;
    }
  }
}
</style>
