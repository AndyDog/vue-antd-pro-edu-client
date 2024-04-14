import storage from 'store'
import {
  SIDEBAR_TYPE,
  TOGGLE_MOBILE_TYPE,
  TOGGLE_NAV_THEME,
  TOGGLE_LAYOUT,
  TOGGLE_FIXED_HEADER,
  TOGGLE_FIXED_SIDEBAR,
  TOGGLE_CONTENT_WIDTH,
  TOGGLE_HIDE_HEADER,
  TOGGLE_COLOR,
  TOGGLE_WEAK,
  TOGGLE_MULTI_TAB,
  // i18n
  APP_LANGUAGE,
} from '@/store/mutation-types'
import { loadLanguageAsync } from '@/locales'
const api = 'http://118.178.233.104:8080/medicine/user/downLoadImage?name='
const app = {
  state: {
    sideCollapsed: false,
    isMobile: false,
    theme: 'light',
    layout: 'topmenu',
    contentWidth: '',
    fixedHeader: false,
    fixedSidebar: false,
    autoHideHeader: false,
    color: '',
    weak: false,
    multiTab: true,
    lang: 'en-US',
    _antLocale: {},
    imgList: {
      logo: api + 'logo',
      logoNew: api + 'logoNew',
      banner: api + 'banner',
      homebanner: api + 'homebanner',
      homet3: api + 'homet3',
      introbanner: api + 'introbanner',
      tzbanner: api + 'tz-banner',
      'px-banner': api + 'px-banner',
      avatar: api + 'avatar',
      favicon: api + 'favicon',
      trainingProgram: api + 'trainingProgram',
      'login-background': api + 'login-background',
      'login-middle-background': api + 'login-middle-background',
      course: api + 'course',
      message: api + 'message',
      announcement: api + 'announcement',
      defaultPay: api + 'defaultPay',
      announcement: api + 'announcement',
      announcement: api + 'announcement',
      announcement: api + 'announcement',
      homemainsliderbg:api+"home_main_slider_bg",
      coursegraphicdesignportfolioheader:api+"course_graphic_design_portfolio_header",
      coursesmaintopheader:api+'courses_main_top_header',
      facilitiesptbtopbg1:api+"facilities_ptb_top_bg-1",
      latestnewsptbtopbg1:api+'latest_news_ptb_top_bg-1',
      admissionsptbtopbg:api+'admissions_ptb_top_bg',
      universitypagetitlebaropbg:api+'university_page_title_bar_op_bg',
    },
  },
  mutations: {
    [SIDEBAR_TYPE]: (state, type) => {
      state.sideCollapsed = type
      storage.set(SIDEBAR_TYPE, type)
    },
    [TOGGLE_MOBILE_TYPE]: (state, isMobile) => {
      state.isMobile = isMobile
    },
    [TOGGLE_NAV_THEME]: (state, theme) => {
      state.theme = theme
      storage.set(TOGGLE_NAV_THEME, theme)
    },
    [TOGGLE_LAYOUT]: (state, mode) => {
      state.layout = mode
      storage.set(TOGGLE_LAYOUT, mode)
    },
    [TOGGLE_FIXED_HEADER]: (state, mode) => {
      state.fixedHeader = mode
      storage.set(TOGGLE_FIXED_HEADER, mode)
    },
    [TOGGLE_FIXED_SIDEBAR]: (state, mode) => {
      state.fixedSidebar = mode
      storage.set(TOGGLE_FIXED_SIDEBAR, mode)
    },
    [TOGGLE_CONTENT_WIDTH]: (state, type) => {
      state.contentWidth = type
      storage.set(TOGGLE_CONTENT_WIDTH, type)
    },
    [TOGGLE_HIDE_HEADER]: (state, type) => {
      state.autoHideHeader = type
      storage.set(TOGGLE_HIDE_HEADER, type)
    },
    [TOGGLE_COLOR]: (state, color) => {
      state.color = color
      storage.set(TOGGLE_COLOR, color)
    },
    [TOGGLE_WEAK]: (state, mode) => {
      state.weak = mode
      storage.set(TOGGLE_WEAK, mode)
    },
    [APP_LANGUAGE]: (state, lang, antd = {}) => {
      state.lang = lang
      state._antLocale = antd
      storage.set(APP_LANGUAGE, lang)
    },
    [TOGGLE_MULTI_TAB]: (state, bool) => {
      storage.set(TOGGLE_MULTI_TAB, bool)
      state.multiTab = bool
    },
  },
  actions: {
    setLang({ commit }, lang) {
      return new Promise((resolve, reject) => {
        commit(APP_LANGUAGE, lang)
        loadLanguageAsync(lang)
          .then(() => {
            resolve()
          })
          .catch((e) => {
            reject(e)
          })
      })
    },
  },
}

export default app
