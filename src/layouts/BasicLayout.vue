<template>
  <pro-layout :menus="menus" :collapsed="collapsed" :mediaQuery="query" :isMobile="isMobile"
    :handleMediaQuery="handleMediaQuery" :handleCollapse="handleCollapse" :i18nRender="i18nRender" v-bind="settings">
    <!-- Ads begin
      广告代码 真实项目中请移除
      production remove this Ads
    -->
    <!-- <ads v-if="isProPreviewSite && !collapsed"/> -->
    <!-- Ads end -->
    <!-- 1.0.0+ 版本 pro-layout 提供 API，
          我们推荐使用这种方式进行 LOGO 和 title 自定义
    -->
    <template v-slot:menuHeaderRender>
      <div>
        <img :src="logo" />
        <h1>{{ title }}</h1>
      </div>
    </template>

    <template v-slot:headerContentRender>
      <div>
        <a-tooltip title="刷新页面">
          <a-icon type="reload" style="font-size: 18px; cursor: pointer" @click="() => {
              $message.info('只是一个DEMO')
            }
            " />
        </a-tooltip>
      </div>
    </template>

    <setting-drawer v-if="isDev" :settings="settings" @change="handleSettingChange">
      <div style="margin: 12px 0">This is SettingDrawer custom footer content.</div>
    </setting-drawer>
    <template v-slot:rightContentRender>
      <right-content :top-menu="settings.layout === 'topmenu'" :is-mobile="isMobile" :theme="settings.theme" />
    </template>
    <template v-slot:menuRender>
      <a-tabs v-model="activeKey" @tabClick="tabClick">
        <a-tab-pane :key="item.path" :tab="menu[item.meta.title]" v-for="item in menus"></a-tab-pane>
      </a-tabs>
    </template>
    <!-- custom footer / 自定义Footer -->
    <template v-slot:footerRender>
      <div class="fusion-title-heading-footer">
        <div class="fusion-highlighted-text-wrapper">
          <h2 class="fusion-title-heading title-heading-center fusion-responsive-typography-calculated" style="
              margin: 0;
              text-transform: capitalize;
            ">
            <span class="fusion-highlighted-text-prefix">加入我们</span>
            <span class="fusion-highlighted-text-wrapper"><span class="fusion-highlighted-text">为14亿中国人</span><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                <path d="M8.1,146.2c0,0,240.6-55.6,479-13.8"></path>
              </svg></span>
            <span class="fusion-highlighted-text-postfix">健康生命保驾护航</span>
          </h2>
        </div>
        <p style="text-align: center; font-size: 20px;color: #7E8890;margin-bottom: 60px;">
          致力于保障人民生命安全和健康，以及提供及时有效的医疗救援服务，为社会稳定与发展作出积极贡献</p>
        <div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="">
              <el-input v-model="formInline.user" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-input v-model="formInline.user" placeholder="Email"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-input v-model="formInline.user" placeholder="电话"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button style="height:40px;" type="warning" @click="onSubmit">Apply Now</el-button>
            </el-form-item>
          </el-form>


        </div>
      </div>
      <div class="allfooter">
        <div>
          应急医学数字教育示范基地© 保留所有权利由 XXXX 提供支持
        </div>
      </div>
      <!-- <GlobalFooter></GlobalFooter> -->
      <!-- <div class="footer">
        <div data-v-0cded264="" data-v-e506c3de="" style="background: #252b3a" class="friendship-bg">
          <div data-v-0cded264="" class="default-main">
            <div data-v-0cded264="" class="friendship-link">
              <p data-v-0cded264=""><span data-v-0cded264="">友情链接</span></p>
              <ul data-v-0cded264="">
                <li data-v-0cded264="">
                  <a data-v-0cded264="" href="http://www.moe.gov.cn" target="_blank">中华人民共和国教育部</a>
                </li>
                <li data-v-0cded264="">
                  <a data-v-0cded264="" href="http://www.nies.edu.cn" target="_blank">中国教育科学研究院</a>
                </li>
                <li data-v-0cded264="">
                  <a data-v-0cded264="" href="https://www.mtzyy.com.cn" target="_blank">国家应急医学研究中心</a>
                </li>
                <li data-v-0cded264="">
                  <a data-v-0cded264="" href="https://xt.tcc.edu.cn" target="_blank">全国教育干部培训协作平台</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div data-v-23d43d3f="" data-v-e506c3de="" style="background: #181818">
          <div data-v-23d43d3f="" class="foot-info">
            <div data-v-23d43d3f="" class="default-main">
              <div data-v-23d43d3f="" class="copy-right-1">
                <span data-v-23d43d3f=""> 中国教育科学研究院培训中心主办 </span
                ><span data-v-23d43d3f=""
                  ><a data-v-23d43d3f="" href="https://www.edu-home.cn/" target="_blank">北京xxxxxx术有限公司</a></span
                ><span data-v-23d43d3f=""
                  ><a data-v-23d43d3f="" href="http://www.wiseloong.com/" target="_blank"
                    >上海xxxxxxxx有限公司技术支持</a
                  ></span
                >
              </div>
              <div data-v-23d43d3f="" class="copy-right-2">
                <a data-v-23d43d3f="" href="https://beian.miit.gov.cn" target="_blank">沪ICP备xxxxxxxxxxxx</a
                >&nbsp;&nbsp;<span data-v-23d43d3f=""> 版权所有未经允许请勿转载</span>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </template>

    <div class="backtop">
      <a-back-top />
    </div>


    <div class="bannercontent">
      <!-- @/assets/banner.png -->
      <!-- {{bannerobj}} -->

      <el-image :src="bannerobj.url1" style="width: 100%; min-height: 560px" fit="cover">
        <div slot="error" class="image-slot">
          <img :src="bannerobj.url2" class="banner" alt="banner" />
        </div>
      </el-image>
      <div class="bannerText" :class="routename" v-if="routename == 'Workplace'">
        <h1 class="fusion-title-heading title-heading-center fusion-responsive-typography-calculated">
          应急医学数字教育示范基地
        </h1>
        <h1 class="fusion-title-heading title-heading-center fusion-responsive-typography-calculated"
          style="font-size: 26px; margin: 10px 20px">
          National Emergency Medical Research Center
        </h1>
        <div class="btngroup">
          <el-button class="btn1">查看详情</el-button>
          <el-button class="btn2">联系我们</el-button>
        </div>
      </div>
      <div class="bannerText" :class="routename" v-else>
        <h1 class="fusion-title-heading title-heading-center fusion-responsive-typography-calculated">
          {{ routenameTitle }}
        </h1>
      </div>
    </div>

    <router-view />
  </pro-layout>
</template>

<script>
import { SettingDrawer, updateTheme } from '@ant-design-vue/pro-layout'
import { i18nRender } from '@/locales'
import { mapState } from 'vuex'
import { CONTENT_WIDTH_TYPE, SIDEBAR_TYPE, TOGGLE_MOBILE_TYPE } from '@/store/mutation-types'

import defaultSettings from '@/config/defaultSettings'
import RightContent from '@/components/GlobalHeader/RightContent'
import GlobalFooter from '@/components/GlobalFooter/index.vue'
import Ads from '@/components/Other/CarbonAds'
import menu from '@/locales/lang/zh-CN/menu'
export default {
  name: 'BasicLayout',
  components: {
    SettingDrawer,
    RightContent,
    GlobalFooter,
    Ads,
  },
  data() {
    return {
      // preview.pro.antdv.com only use.
      isProPreviewSite: process.env.VUE_APP_PREVIEW === 'true' && process.env.NODE_ENV !== 'development',
      // end
      isDev: process.env.NODE_ENV === 'development' || process.env.VUE_APP_PREVIEW === 'true',
      activeKey: '/dashboard/workplace',
      menu,
      // base
      menus: [],
      // 侧栏收起状态
      collapsed: false,
      title: defaultSettings.title,
      settings: {
        // 布局类型
        layout: defaultSettings.layout, // 'sidemenu', 'topmenu'
        // CONTENT_WIDTH_TYPE
        contentWidth: defaultSettings.layout === 'sidemenu' ? CONTENT_WIDTH_TYPE.Fluid : defaultSettings.contentWidth,
        // 主题 'dark' | 'light'
        theme: defaultSettings.navTheme,
        // 主色调
        primaryColor: defaultSettings.primaryColor,
        fixedHeader: defaultSettings.fixedHeader,
        fixSiderbar: defaultSettings.fixSiderbar,
        colorWeak: defaultSettings.colorWeak,

        hideHintAlert: false,
        hideCopyButton: false,
      },
      // 媒体查询
      query: {},

      // 是否手机模式
      isMobile: false,

      formInline: {

      }
    }
  },
  computed: {
    ...mapState({
      // 动态主路由
      mainMenu: (state) => state.permission.addRouters,
      logo: (state) => state.app.imgList.logo,
      logoNew: (state) => state.app.imgList.logoNew,
      banner: (state) => state.app.imgList.banner,
      homebanner: (state) => state.app.imgList.homebanner,
      homemainsliderbg: (state) => state.app.imgList.homemainsliderbg,
      introbanner: (state) => state.app.imgList.introbanner,
      coursegraphicdesignportfolioheader: (state) => state.app.imgList.coursegraphicdesignportfolioheader,
      coursesmaintopheader: (state) => state.app.imgList.coursesmaintopheader,
      facilitiesptbtopbg1: (state) => state.app.imgList.facilitiesptbtopbg1,
      latestnewsptbtopbg1: (state) => state.app.imgList.latestnewsptbtopbg1,
      admissionsptbtopbg: (state) => state.app.imgList.admissionsptbtopbg,
      universitypagetitlebaropbg: (state) => state.app.imgList.universitypagetitlebaropbg,
    }),
    bannerobj() {
      console.log(this.$route)
      const obj = {
        Workplace: {
          url1: this.homemainsliderbg,
          url2: require('@/assets/home_main_slider_bg.jpg')
        },
        intro: {
          url1: this.coursegraphicdesignportfolioheader,
          url2: require('@/assets/course_graphic_design_portfolio_header.jpg')
        },
        courseDetailhome: {
          url1: this.coursesmaintopheader,
          url2: require('@/assets/courses_main_top_header.jpg')
        },
        courseDetail: {
          url1: this.universitypagetitlebaropbg,
          url2: require('@/assets/university_page_title_bar_op_bg.jpg')
        },
        training: {
          url1: this.facilitiesptbtopbg1,
          url2: require('@/assets/facilities_ptb_top_bg-1.jpg')
        },

        showwork: {
          url1: this.latestnewsptbtopbg1,
          url2: require('@/assets/latest_news_ptb_top_bg-1.jpg')
        },
        zzrz: {
          url1: this.admissionsptbtopbg,
          url2: require('@/assets/admissions_ptb_top_bg.jpg')
        },
      }
      return obj[this.$route.name] || this.banner
    },
    routename() {
      return this.$route.name
    },
    routenameTitle() {
      return menu[this.$route.meta.title]
    },
  },
  created() {
    const routes = this.mainMenu.find((item) => item.path === '/')
    this.menus = (routes && routes.children) || []
    this.menus = this.menus.filter((item) => {
      return !item.hidden
    })
    console.log(routes.children)
    // 处理侧栏收起状态
    this.$watch('collapsed', () => {
      this.$store.commit(SIDEBAR_TYPE, this.collapsed)
    })
    this.$watch('isMobile', () => {
      this.$store.commit(TOGGLE_MOBILE_TYPE, this.isMobile)
    })
  },
  mounted() {
    const userAgent = navigator.userAgent
    if (userAgent.indexOf('Edge') > -1) {
      this.$nextTick(() => {
        this.collapsed = !this.collapsed
        setTimeout(() => {
          this.collapsed = !this.collapsed
        }, 16)
      })
    }

    // first update color
    // TIPS: THEME COLOR HANDLER!! PLEASE CHECK THAT!!
    if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
      updateTheme(this.settings.primaryColor)
    }
  },
  methods: {
    i18nRender,
    handleMediaQuery(val) {
      this.query = val
      if (this.isMobile && !val['screen-xs']) {
        this.isMobile = false
        return
      }
      if (!this.isMobile && val['screen-xs']) {
        this.isMobile = true
        this.collapsed = false
        this.settings.contentWidth = CONTENT_WIDTH_TYPE.Fluid
        // this.settings.fixSiderbar = false
      }
    },
    handleCollapse(val) {
      this.collapsed = val
    },
    handleSettingChange({ type, value }) {
      console.log('type', type, value)
      type && (this.settings[type] = value)
      switch (type) {
        case 'contentWidth':
          this.settings[type] = value
          break
        case 'layout':
          if (value === 'sidemenu') {
            this.settings.contentWidth = CONTENT_WIDTH_TYPE.Fluid
          } else {
            this.settings.fixSiderbar = false
            this.settings.contentWidth = CONTENT_WIDTH_TYPE.Fixed
          }
          break
      }
    },
    tabClick(key) {
      console.log(key)
      window.scrollTo(0, 0);
      this.$router.push(key)
    },
  },
}
</script>

<style lang="less">
@import './BasicLayout.less';

.fusion-title-heading-footer {
  position: relative;
  background: #333c4e;
  padding: 50px 30px;
  text-align: center;

  .fusion-highlighted-text-prefix {
    font-size: 34px;
    color: #FFF;
  }

  .fusion-highlighted-text-postfix {
    font-size: 34px;
    color: #FFF;
  }

  .fusion-highlighted-text {
    font-size: 34px;
    color: #f09a3e;
  }



}

.fusion-highlighted-text-wrapper {
  position: relative;
  display: inline-block;
}

.fusion-title-heading svg {
  margin-top: var(--awb-highlight-top-margin);
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% + 0.75em);
  height: calc(100% + 0.75em);
  transform: translate(-50%, -50%);
  overflow: visible;

  path {
    stroke: #f09a3e;
    stroke-width: 6;
    fill: none;
    stroke-dasharray: 1500;
    stroke-linecap: round;
    stroke-linejoin: round;
    animation: fusion-title-highlight 10s;
    animation-name: fusion-title-highlight-off-loop;
  }
}

.allfooter {
  padding: 20px 30px;
  background-image: linear-gradient(180deg, #b1c3ff 0%, #ffffff 100%);
  ;
}
</style>
