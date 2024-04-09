<template>
  <page-header-wrapper :title="false">
    <template v-slot:content>
      <div class="page-header-content">
        <video width="600" height="360" controls v-if="false">
          <!-- http://vod.jj-edu.cn/promotional.mp4 -->
          <source :src="tzbanner" type="video/mp4" />
        </video>
        <img :src="tzbanner" alt="" />
      </div>
    </template>
    <template v-slot:extraContent>
      <div class="extra-content">
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="1" tab="资讯动态">
            <a-list item-layout="horizontal" :data-source="data">
              <a-list-item slot="renderItem" slot-scope="item, index">
                <a-list-item-meta>
                  <div slot="title" style="cursor: pointer">{{ item.title }}</div>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-tab-pane>
          <a-tab-pane key="2" tab="培训通知" force-render>Content of Tab Pane 2</a-tab-pane>
          <a-tab-pane key="3" tab="政策文件">Content of Tab Pane 3</a-tab-pane>
        </a-tabs>
      </div>
    </template>

    <div>
      <a-card
        class="project-list"
        style="margin-bottom: 24px"
        :bordered="false"
        title="培训项目"
        :body-style="{ padding: 0 }"
      >
        <a slot="extra">更多</a>
        <div>
          <div
            class="pxmg-image"
            style="background-image: url(http://106.14.124.163:8090/api/system/sysStaticPicture/px-banner)"
          ></div>

          <div class="pxmg-image1">
            <img :src="homet3" alt="" />
          </div>
        </div>
      </a-card>

      <a-card
        class="project-list"
        :loading="loading"
        style="margin-bottom: 24px"
        :bordered="false"
        title="专家团队"
        :body-style="{ padding: 0 }"
      >
        <a slot="extra">更多</a>
        <div>
          <a-card :bordered="false">
            <a-row :gutter="16">
              <a-col class="gutter-row" v-for="item in projectsperson.slice(0, 4)" :span="6">
                <div data-v-373a1af0="" class="expert-box border-line">
                  <div data-v-373a1af0="" class="">
                    <img data-v-373a1af0="" :src="item.avatar" alt="" class="expert-img" />
                  </div>
                  <div data-v-373a1af0="" class="">
                    <p data-v-373a1af0="" class="expert-name">
                      {{ item.realname }}
                    </p>
                    <p data-v-373a1af0="" class="expert-intro">
                      {{ item.introduction }}
                    </p>
                  </div>
                </div>
              </a-col>
            </a-row>
          </a-card>
        </div>
      </a-card>
      <a-card
        class="project-list"
        :loading="loading"
        style="margin-bottom: 24px"
        :bordered="false"
        title="培训课程"
        :body-style="{ padding: 0 }"
      >
        <a slot="extra">更多</a>
        <div>
          <a-card :bordered="false">
            <a-tabs v-model:activeKey="activeKey">
              <a-tab-pane key="1" tab="通知公告">
                <a-list item-layout="horizontal" :data-source="projectsperson.slice(0, 8)">
                  <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-list-item-meta>
                      <div slot="title" style="cursor: pointer; font-weight: 600">
                        {{ item.introduction.slice(0, 50) }}
                        <a-badge count="优先发布" class="item"> </a-badge>
                      </div>
                    </a-list-item-meta>
                    <div>{{ item.realname }}</div>
                  </a-list-item>
                </a-list>
              </a-tab-pane>
              <a-tab-pane key="2" tab="培训通知" force-render>Content of Tab Pane 2</a-tab-pane>
              <a-tab-pane key="3" tab="政策文件">Content of Tab Pane 3</a-tab-pane>
            </a-tabs>
          </a-card>
        </div>
      </a-card>

      <a-card
        class="project-list"
        :loading="loading"
        style="margin-bottom: 24px"
        :bordered="false"
        title="推荐教材"
        :body-style="{ padding: 0 }"
      >
        <a slot="extra">更多</a>
        <div>
          <a-card :bordered="false">
            <a-row :gutter="16">
              <a-col class="gutter-row" v-for="(item, index) in teachingList" :span="6">
                <div data-v-373a1af0="" class="expert-box border-line">
                  <div data-v-373a1af0="" class="">
                    <!-- <img data-v-373a1af0="" :src="item.avatar" alt="" class="expert-img" /> -->
                    <img width="150" :src="item.img" alt="" />
                  </div>
                  <div data-v-373a1af0="" class="">
                    <div data-v-373a1af0="" class="expert-name">
                      <!-- <img :src="item.img" alt="" /> -->
                      <!-- {{ item.title }} -->
                    </div>
                    <p data-v-373a1af0="" class="expert-intro">
                      {{ item.title }}
                    </p>
                  </div>
                </div>
              </a-col>
            </a-row>
          </a-card>
        </div>
      </a-card>

      <a-card
        class="project-list"
        :loading="loading"
        style="margin-bottom: 24px"
        :bordered="false"
        title="直播课程"
        :body-style="{ padding: 0 }"
      >
        <a slot="extra">更多</a>
        <div style="height: 360px; display: flex; align-items: center; justify-content: center">
          <a-empty description="暂无直播课程">
            <span slot="description"> 暂无直播课程</span>
          </a-empty>
        </div>
      </a-card>

      <!-- 
          <a-card :loading="loading" title="动态" :bordered="false">
            <a-list>
              <a-list-item :key="index" v-for="(item, index) in activities">
                <a-list-item-meta>
                  <a-avatar slot="avatar" size="small" :src="item.user.avatar" />
                  <div slot="title">
                    <span>{{ item.user.nickname }}</span
                    >&nbsp; 在&nbsp;<a href="#">{{ item.project.name }}</a
                    >&nbsp; <span>{{ item.project.action }}</span
                    >&nbsp;
                    <a href="#">{{ item.project.event }}</a>
                  </div>
                  <div slot="description">{{ item.time }}</div>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-card> -->
    </div>
  </page-header-wrapper>
</template>

<script>
import { timeFix } from '@/utils/util'
import { mapState } from 'vuex'
import { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import { Radar } from '@/components'
import { getRoleList, getServiceList } from '@/api/manage'

const DataSet = require('@antv/data-set')
const data = [
  {
    title: '川渝浙省域急救教育实施启动会在北京外国语大学成功召开',
  },
  {
    title: '国家卫生健康委关于印发《突发事件医疗应急工作管理办法（试行）',
  },
  {
    title: '教育部 国家统计局 财政部 关于2022年全国教育经费执行情况统计公告',
  },
  {
    title: '河南郑州：将心肺复苏纳入中考体育项目',
  },
  {
    title: '河南郑州：将心肺复苏纳入中考体育项目',
  },
]
export default {
  name: 'Workplace',
  components: {
    PageHeaderWrapper,
    Radar,
  },
  data() {
    return {
      timeFix: timeFix(),
      avatar: '',
      user: {},
      projects: [],
      loading: true,
      radarLoading: true,
      activities: [],
      teams: [],
      data,
      axis1Opts: {
        dataKey: 'item',
        line: null,
        tickLine: null,
        grid: {
          lineStyle: {
            lineDash: null,
          },
          hideFirstLine: false,
        },
      },
      axis2Opts: {
        dataKey: 'score',
        line: null,
        tickLine: null,
        grid: {
          type: 'polygon',
          lineStyle: {
            lineDash: null,
          },
        },
      },
      scale: [
        {
          dataKey: 'score',
          min: 0,
          max: 80,
        },
      ],
      axisData: [
        { item: '引用', a: 70, b: 30, c: 40 },
        { item: '口碑', a: 60, b: 70, c: 40 },
        { item: '产量', a: 50, b: 60, c: 40 },
        { item: '贡献', a: 40, b: 50, c: 40 },
        { item: '热度', a: 60, b: 70, c: 40 },
        { item: '引用', a: 70, b: 50, c: 40 },
      ],
      radarData: [],
      playerOptions: {
        // videojs options
        muted: true,
        language: 'en',
        sources: [
          {
            src: 'http://vod.jj-edu.cn/promotional.mp4',
            type: 'video/mp4',
          },
        ],
        // other options
      },
      activeKey: '1',
      projectsperson: [],

      teachingList: [
        {
          title: ' 《医学急救与防疫（小学低年级）》 ',
          img: require('@/assets/textbook1.png'),
        },
        {
          title: ' 《医学急救与防疫（小学高年级）》 ',
          img: require('@/assets/textbook2.png'),
        },
        {
          title: '  《医学急救与防疫（初中）》  ',
          img: require('@/assets/textbook3.png'),
        },
        {
          title: ' 《校园急救》  ',
          img: require('@/assets/textbook4.png'),
        },
      ],
      textbook1: require('@/assets/textbook1.png'),
      textbook2: require('@/assets/textbook2.png'),
      textbook3: require('@/assets/textbook3.png'),
      textbook4: require('@/assets/textbook4.png'),
    }
  },
  computed: {
    ...mapState({
      nickname: (state) => state.user.nickname,
      welcome: (state) => state.user.welcome,
      tzbanner: (state) => state.app.imgList['tzbanner'],
      homet3: (state) => state.app.imgList['homet3'],
    }),
    currentUser() {
      return {
        name: '梁海军',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      }
    },
    userInfo() {
      return this.$store.getters.userInfo
    },
  },
  created() {
    this.user = this.userInfo
    this.avatar = this.userInfo.avatar

    getRoleList().then((res) => {
      // console.log('workplace -> call getRoleList()', res)
    })

    getServiceList().then((res) => {
      // console.log('workplace -> call getServiceList()', res)
    })
  },
  mounted() {
    this.getProjects()
    this.getActivity()
    this.getTeams()
    this.initRadar()
    this.getprojectsperson()
  },
  methods: {
    getProjects() {
      this.$http.get('/list/search/projects').then((res) => {
        console.log(res)
        this.projects = res.result && res.result.data
        this.loading = false
      })
    },
    getActivity() {
      this.$http.get('/workplace/activity').then((res) => {
        this.activities = res.result
      })
    },
    getTeams() {
      this.$http.get('/workplace/teams').then((res) => {
        this.teams = res.result
      })
    },

    getprojectsperson() {
      let that = this
      this.$http.get('http://106.14.124.163:8090/api/front/expertPage?page=1&limit=999').then((res) => {
        console.log(res)
        that.projectsperson = res && res.data && res.data.list
        // this.loading = false
        // console.log(that.projects)
      })
    },

    initRadar() {
      this.radarLoading = true

      this.$http.get('/workplace/radar').then((res) => {
        const dv = new DataSet.View().source(res.result)
        dv.transform({
          type: 'fold',
          fields: ['个人', '团队', '部门'],
          key: 'user',
          value: 'score',
        })

        this.radarData = dv.rows
        this.radarLoading = false
      })
    },
  },
}
</script>

<style lang="less" scoped>
@import './Workplace.less';

.project-list {
  .card-title {
    font-size: 0;

    a {
      color: rgba(0, 0, 0, 0.85);
      margin-left: 12px;
      line-height: 24px;
      height: 24px;
      display: inline-block;
      vertical-align: top;
      font-size: 14px;

      &:hover {
        color: #1890ff;
      }
    }
  }

  .card-description {
    color: rgba(0, 0, 0, 0.45);
    height: 44px;
    line-height: 22px;
    overflow: hidden;
  }

  .project-item {
    display: flex;
    margin-top: 8px;
    overflow: hidden;
    font-size: 12px;
    height: 20px;
    line-height: 20px;

    a {
      color: rgba(0, 0, 0, 0.45);
      display: inline-block;
      flex: 1 1 0;

      &:hover {
        color: #1890ff;
      }
    }

    .datetime {
      color: rgba(0, 0, 0, 0.25);
      flex: 0 0 auto;
      float: right;
    }
  }

  .ant-card-meta-description {
    color: rgba(0, 0, 0, 0.45);
    height: 44px;
    line-height: 22px;
    overflow: hidden;
  }
}

.item-group {
  padding: 20px 0 8px 24px;
  font-size: 0;

  a {
    color: rgba(0, 0, 0, 0.65);
    display: inline-block;
    font-size: 14px;
    margin-bottom: 13px;
    width: 25%;
  }
}

.members {
  a {
    display: block;
    margin: 12px 0;
    line-height: 24px;
    height: 24px;

    .member {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
      line-height: 24px;
      max-width: 100px;
      vertical-align: top;
      margin-left: 12px;
      transition: all 0.3s;
      display: inline-block;
    }

    &:hover {
      span {
        color: #1890ff;
      }
    }
  }
}

.mobile {
  .project-list {
    .project-card-grid {
      width: 100%;
    }
  }

  .more-info {
    border: 0;
    padding-top: 16px;
    margin: 16px 0 16px;
  }

  .headerContent .title .welcome-text {
    display: none;
  }
}

.page-header-content {
  width: 600px;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
}

/deep/.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-content {
  flex: none;
}
.ant-avatar-sm {
  width: 86px;
  height: 86px;
  line-height: 24px;
  border-radius: 50%;
}
.pxmg-image {
  width: 100%;
  height: 120px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
}

.expert-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 10px;
  margin-bottom: 20px;
}

.expert-box a {
  color: var(--color-text-primary);
}

.expert-box a:hover {
  color: var(--color-primary);
}

.expert-img {
  width: 86px;
  height: 86px;
  border-radius: 50%;
}

.expert-img:hover {
  transform: scale(1.1);
}

.expert-name {
  font-size: 18px;
  text-align: center;
  margin-top: 13px;
}

.expert-intro {
  font-size: 12px;
  text-align: center;
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  color: #999;
  line-height: 1.5;
}

.border-line {
  border-radius: 6px;
  border: 1px solid #f2f2f2;
}

.border-line:hover {
  box-shadow: var(--box-shadow-light);
}
</style>
