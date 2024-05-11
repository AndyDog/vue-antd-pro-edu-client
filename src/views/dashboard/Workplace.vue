<template>
  <!-- <div> -->
  <page-header-wrapper1 :title="false">
    <template v-slot:content> </template>
    <template v-slot:extraContent> </template>

    <div class="containerhomne logocontainer ant-pro-page-header-wrap">
      <div class="homepagecontent1">
        <div class="homepagecontent1img">
          <el-image class="img-responsive wp-image-7 lazyloaded"
            src="http://106.54.167.222:39900/wp-content/uploads/2024/04/logo-300x296.png">
            <div slot="error" class="image-slot">
              <img width="300" height="296" src="../../assets/logo-300x296.png" alt="" />
            </div>
          </el-image>
        </div>

        <div class="homepagecontent1title">
          <div>
            <div class="title">应急医学数字教育示范基地</div>
            <div class="subtitle">中国教育科学研究院培训中心与国家应急医学研究中心共建</div>
            <div class="bottomline">
              <div class="bottomlinecenter"></div>
            </div>
          </div>
        </div>

        <el-row type="flex" :gutter="30" class="row-bg" justify="center">
          <el-col :span="10">
            <div class="grid-content bg-purple">
              <div class="cardtitle">示范基地简介</div>
              <div class="fusion-text fusion-text-2">
                <p>
                  应急医学数字教育示范基地，是北京安华数字应急技术有限公司与应急总医院（国家应急医学研究中心）合作共建基地，是为全国51万所学校的应急培训教育打造设施建设标准、培训实施标准及基地建设模版，也是急救培训教育的对外宣传窗口。
                </p>
                <p>
                  示范基地依托应急总医院（国家应急医学研究中心）专业学术，以及中国教育科学研究院培训中心在教育行业的影响力，通过利用数字技术，将应急急救专业知识在教育行业全域的推广与应用，示范基地以先行先试为准绳，聚焦应急医学理论授课、实操演练、模拟考试、师资培训、实训室建设、教材开发、协作研讨等学校急救教育标准体系和培训体系，为全国学校急救教育试点工作提供数字教育新范式和学校急救教育的整体解决方案，进一步助力新时代学校卫生与健康教育工作的发展。
                </p>
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content bg-purple-light">
              <div class="introlistRightList">
                <el-image :src="tzbanner">
                  <div slot="error" class="image-slot">
                    <video width="380" height="250" controls="">
                      <source src="http://vod.jj-edu.cn/promotional.mp4" type="video/mp4" />
                    </video>
                  </div>
                </el-image>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="introlist">
        <el-row type="flex" :gutter="30" class="row-bg" justify="center">
          <el-col :span="10">
            <div class="grid-content bg-purple">
              <div class="title">我们在做什么</div>
              <div class="subtitle">
                致力于急救教学、学习和研究，并培养生命安全的领航者，他们在社会急救中发挥至关重要的作用。
              </div>
              <div class="list">
                <div v-for="item in introlist1">
                  <span><i :class="item.icon"></i></span>
                  {{ item.name }}
                </div>
              </div>
              <div class="introlistLeftFooter">
                总的来说，应急医学致力于在各种突发情况下保护人类生命和健康，通过紧急救援、疾病控制、资源管理等措施，尽可能地减少伤亡和疾病传播的风险。
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content bg-purple-light">
              <div class="title">应急文化</div>
              <div class="introlistRightList">
                <div>
                  <a-collapse default-active-key="1" :bordered="false" accordion>
                    <template #expandIcon="props">
                      <a-icon :type="props.isActive ? 'minus' : 'plus'" />
                    </template>
                    <a-collapse-panel key="1" header="我们的使命" :style="customStyle">
                      <div class="panel-body toggle-content fusion-clearfix">
                        <p>
                          应急医学的使命是保障人民生命安全、健康和社会稳定，应对各种突发事件和紧急情况，提供及时、有效的医疗救援和支持。其核心使命包括：
                        </p>
                        <ol>
                          <li>
                            <strong>保护生命</strong>：在突发事件中，应急医学致力于尽可能减少伤亡人数，最大限度地保护生命安全。
                          </li>
                          <li>
                            <strong>减轻痛苦</strong>：应急医学努力提供及时有效的医疗救助，缓解伤痛，减轻患者的痛苦。
                          </li>
                          <li>
                            <strong>控制疫情</strong>：在传染病暴发或疫情爆发时，应急医学的使命是迅速控制疫情蔓延，保护公众健康。
                          </li>
                          <li>
                            <strong>维护社会秩序</strong>：在灾难或紧急情况下，应急医学通过提供医疗服务和支持，维护社会秩序，保障社会稳定。
                          </li>
                          <li>
                            <strong>恢复生活</strong>：应急医学不仅关注急救和救助阶段，还关注灾后恢复和重建工作，帮助受灾群众尽快恢复正常生活。
                          </li>
                          <li>
                            <strong>预防再次发生</strong>：通过总结经验教训，制定应急预案，提高公众和医疗人员的应对能力，预防类似事件再次发生。
                          </li>
                        </ol>
                      </div>
                    </a-collapse-panel>
                    <a-collapse-panel key="2" header="我们的理念" :style="customStyle">
                      <div class="panel-body toggle-content fusion-clearfix">
                        <p>应急医学的理念体现了对突发事件和紧急情况的独特认知和应对方式，其核心包括：</p>
                        <div class="markdown prose w-full break-words dark:prose-invert light">
                          <ol>
                            <li>
                              <strong>综合性和多学科性</strong>：应急医学强调跨学科合作和综合应对，不仅涉及医学领域，还包括工程学、社会学、心理学等多个学科的知识与技能。综合性和多学科性是应对复杂紧急情况的重要保障。
                            </li>
                            <li>
                              <strong>及时响应和迅速行动</strong>：应急医学强调对紧急情况的敏感度和快速反应能力。在灾难或事故发生后，应急医学需要立即展开行动，以最大限度地减少伤亡和病患，保障生命安全。
                            </li>
                            <li>
                              <strong>预防为主和全民参与</strong>：应急医学注重预防工作，强调在突发事件发生前就进行风险评估、预警和预防措施的制定。同时，鼓励全民参与，提高公众的应对能力和自救能力。
                            </li>
                            <li>
                              <strong>科学管理和资源优化</strong>：应急医学提倡科学管理医疗资源，包括人力、物资和设施等，以确保在紧急情况下资源的合理利用和最大化效益。
                            </li>
                            <li>
                              <strong>人文关怀和心理支持</strong>：应急医学强调对受灾群众的人文关怀和心理支持，关注其身心健康，通过心理援助和社会支持，帮助他们度过难关。
                            </li>
                            <li>
                              <strong>持续改进和学习</strong>：应急医学不断总结经验教训，不断改进工作方法和应对策略，以适应不断变化的紧急情况和应对挑战。
                            </li>
                          </ol>
                          <p>
                            综上所述，应急医学的理念是以综合性、及时响应、全民参与、科学管理、人文关怀和持续改进为核心，为突发事件和紧急情况下的医疗救援提供指导和支持。
                          </p>
                        </div>
                      </div>
                    </a-collapse-panel>
                    <a-collapse-panel key="3" header="我们的承诺" :style="customStyle">
                      <div class="panel-body toggle-content fusion-clearfix">
                        <div class="panel-body toggle-content fusion-clearfix">
                          <p>
                            应急医学的承诺体现了医疗机构、医护人员以及整个应急医学系统对于保障人民生命安全和健康的坚定信念和责任感。其主要承诺包括：
                          </p>
                          <ol>
                            <li>
                              <strong>保障生命安全</strong>：应急医学承诺在突发事件和紧急情况下，尽最大努力保障每一个人的生命安全，无论是受伤患者、疫情患者还是其他受灾群众。
                            </li>
                            <li>
                              <strong>及时救援和医疗救助</strong>：应急医学承诺对于受伤患者和急需医疗救助的人员提供及时救援和医疗支持，无论是在灾难现场还是医疗机构内。
                            </li>
                            <li>
                              <strong>全面覆盖和公平对待</strong>：应急医学承诺在紧急情况下，为所有需要帮助的人提供服务，不分国界、种族、信仰或社会地位，保证医疗服务的公平和公正。
                            </li>
                            <li>
                              <strong>保障医护人员安全</strong>：应急医学承诺为医护人员提供必要的安全保障措施，确保他们在执行任务时的安全与健康。
                            </li>
                            <li>
                              <strong>透明和诚信</strong>：应急医学承诺在信息公开、沟通透明方面保持高度诚信，及时向公众通报灾情、疫情及相关医疗信息，以促进社会信任和合作。
                            </li>
                            <li>
                              <strong>持续改进和学习</strong>：应急医学承诺不断改进工作方法和应对策略，吸取经验教训，提高医疗救援能力和效率。
                            </li>
                            <li>
                              <strong>关注人文关怀和心理支持</strong>：应急医学承诺为受灾群众提供人文关怀和心理支持，关注他们的身心健康，帮助他们渡过难关。
                            </li>
                          </ol>
                          <p>
                            综上所述，应急医学的承诺是坚定地致力于保障人民生命安全和健康，以及提供及时有效的医疗救援服务，为社会稳定与发展作出积极贡献。
                          </p>
                        </div>
                      </div>
                    </a-collapse-panel>
                    <a-collapse-panel key="4" header="我们的价值" :style="customStyle">
                      <div class="panel-body toggle-content fusion-clearfix">
                        <ol>
                          <li>
                            <strong>保障生命安全</strong>：应急医学通过及时的救援和医疗服务，可以最大程度地减少伤亡人数，保障人民生命安全，是社会稳定和发展的基础。
                          </li>
                          <li>
                            <strong>保障公共卫生</strong>：在突发事件和紧急情况下，应急医学不仅能够控制疫情传播，还能够提供各种预防措施，保障公众健康，维护社会公共卫生安全。
                          </li>
                          <li>
                            <strong>维护社会稳定</strong>：应急医学在灾难和紧急情况中发挥着重要的维稳作用，通过提供医疗救援和支持，稳定受灾群众情绪，防止社会动荡和混乱。
                          </li>
                          <li>
                            <strong>提高应对能力</strong>：应急医学可以通过应急演练、培训和技术创新等手段，提高医疗机构和医护人员的应急能力和水平，为日常医疗工作提供更好的支持。
                          </li>
                          <li>
                            <strong>促进社会团结</strong>：在灾难面前，应急医学能够促进社会各界的团结合作，凝聚社会力量，共同应对危机，增强社会凝聚力和向心力。
                          </li>
                          <li>
                            <strong>提升国家形象</strong>：应急医学的高效运作和优质服务，能够提升国家在国际社会中的形象和声誉，增强国际社会的信任和合作。
                          </li>
                          <li>
                            <strong>推动科技发展</strong>：应急医学在医疗设备、医疗技术和医疗管理等方面不断创新和发展，推动医疗科技的进步，促进医疗卫生事业的发展。
                          </li>
                        </ol>
                      </div>
                    </a-collapse-panel>
                  </a-collapse>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="imglist">
        <el-row :gutter="20">
          <el-col :span="8" v-for="item in imglist">
            <div class="imgelem" @click="link(item)">
              <el-image :src="item.url">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <div class="imgtitle">
                <div>{{ item.title }}</div>
                <div></div>
                <div>了解更多</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="news">
        <div class="title">最新要闻</div>
        <div class="subtitle">新闻早知道</div>
        <div class="bottomline">
          <div class="bottomlinecenter"></div>
        </div>
        <div class="newcontent">
          <div class="ant-pro-pages-list-projects-cardList">
            <a-list :data-source="datanews" :grid="{ gutter: 24, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }">
              <a-list-item slot="renderItem" slot-scope="item">
                <a-card class="ant-pro-pages-list-projects-card" hoverable @click="newsdetail(item)">
                  <img slot="cover" :src="item.cover" :alt="item.title" />
                  <a-card-meta :title="item.title">
                    <template slot="description">
                      <ellipsis :length="50">{{ item.description }}</ellipsis>
                    </template>
                  </a-card-meta>
                  <div class="cardItemContent">
                    <span>{{ item.updatedAt | fromNow }}</span>
                    <div class="avatarList">
                      <avatar-list size="small" :max-length="2">
                        <avatar-list-item v-for="(member, i) in item.members" :key="`${item.id}-avatar-${i}`"
                          :src="member.avatar" :tips="member.name" />
                      </avatar-list>
                    </div>
                  </div>
                </a-card>
              </a-list-item>
            </a-list>
          </div>
        </div>
      </div>
    </div>

    <div></div>
  </page-header-wrapper1>
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
      datanews: [],
      imglist: [
        {
          url: require('@/assets/home_courses_section_bg.jpg'),
          title: '课程',
        },
        {
          url: require('@/assets/home_events_section_bg-1.jpg'),
          title: '事件',
        },
        {
          url: require('@/assets/home_latest_news_section_bg-1.jpg'),
          title: '热点新闻',
        },
      ],
      introlist1: [
        {
          name: '应急救援 – 在灾难、事故等突发情况下，为伤员提供紧急救护和医疗救助，包括现场急救、伤员分类、转运和安全的医疗处置等',
          icon: 'el-icon-picture-outline-round',
        },
        {
          name: '紧急医疗管理 – 管理医疗资源、协调医疗人员，确保在紧急情况下医疗服务的有效组织和运作。',
          icon: 'el-icon-s-shop',
        },
        {
          name: '应急预案制定和培训 – 制定应急医疗预案，培训医疗人员和应急救援人员，提高他们应对紧急情况的能力和应变能力。',
          icon: 'el-icon-potato-strips',
        },
        {
          name: '心理援助 – 在灾难或紧急情况下，为受创伤的个体和群体提供心理援助和心理治疗，缓解心理创伤。',
          icon: 'el-icon-potato-strips',
        },
      ],
      customStyle: 'background: #fff;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden',
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
    this.getList()
    console.log('!!!!!!!!!!!!!!!!!!!')
  },
  methods: {
    getList() {
      this.$http.get('/list/article', { params: { count: 3 } }).then((res) => {
        console.log('res', res)
        this.datanews = res.result
        // this.loading = false
      })
    },
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
    newsdetail(item) {
      console.log(item)
      this.$route.meta.title = item.description
      this.$router.push(`/showwork/showworkDetail/${item.id}`)
      this.$route.meta.title = item.description
    },
    link(item) {
      console.log(item)
      if (item.title == '课程') {
        this.$router.push({ path: '/course' })
      } else if (item.title == '热点新闻') {
        this.$router.push({ path: '/showwork' })
      } else {
        this.$router.push({ path: '/showwork' })
      }
    }
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

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
  color: #333;
}

header h1 {
  margin: 0;
  font-size: 24px;
  /* 调整字体大小 */
}

/*yetou */
/*菜单开始 */
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 20px;
}

nav ul li a {
  color: #000;
  text-decoration: none;
  padding: 15px 20px;
  /* 调整链接内边距 */
  background-color: #fff;
  border-radius: 5px;
  /* 调整边框圆角 */
  font-family: '黑体', 'Microsoft YaHei', sans-serif;
  transition: color 0.3s ease, background-color 0.3s ease;
  border: 2px solid transparent;
  /* 添加边框并设置初始为透明
			*/
}

nav ul li a:hover {
  color: #007bff;
  background-color: #fff;
  border-color: #007bff;
  /* 鼠标悬停时边框颜色变为蓝色 */
}

nav ul li a.active {
  color: #fff;
  background-color: #76daff;
  border-color: #76daff;
  /* 链接被点击时边框颜色也为蓝色 */
}

/*菜单结束 */
/*banner
			*/
.banner {
  width: 100%;
  margin-top: 1px;
  /* 将banner与导航栏下方留出间距 */
}

/*banner
			*/
/*课程开始 */
@media screen and (max-width: 600px) {
  header h1 {
    font-size: 20px;
    /* 在小屏幕上调整字体大小 */
  }

  nav ul li a {
    padding: 10px 15px;
    /* 在小屏幕上调整链接内边距
			*/
  }
}

.container {
  justify-content: center;
  /* 将课程列表水平居中排列 */
  /* max-width:800px; */
  /* margin:20px auto; */
  padding: 20px 40px;
  text-align: center;
  /* 将内容居中排列
			*/
}

h2 {
  color: #007bff;
}

.course-container {
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  justify-content: center;
  /* 将课程列表水平居中排列 */
}

.course {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 30px;
  /* 添加间距 */
  width: calc(25% - 30px);
  /* 设置宽度自适应，并考虑间距 */
  flex-grow: 1;
  /* 让课程容器在需要时可以增长 */
  box-sizing: border-box;
  /* 包含内边距和边框在内的总宽度计算 */
  transition: box-shadow 1s;
  /* 添加过渡效果，时间为1秒钟
			*/
}

.course:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  /* 悬浮时的阴影效果
			*/
}

.course h3 {
  margin-top: 0;
}

.course p {
  margin-bottom: 10px;
  font-size: 9px;
}

.footer-text {
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
}

.course img {
  border-top-left-radius: calc(0.75rem - 1px);
  border-top-right-radius: calc(0.75rem - 1px);
  max-width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}

/*课程结束 */
/*新闻开始 */
.container-new {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* 添加wrap属性 */
  justify-content: center;
  /* 将课程列表水平居中排列
			*/
  text-align: center;
  /* 将内容居中排列 */
}

h2 {
  padding: 0 20px;
  color: #007bff;
}

.news-column {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  /* 上下表格之间的间距 */
}

.news-table {
  margin-bottom: 25px;
  position: relative;
  /* 设置图片容器为相对定位 */
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  /* 透明的背景颜色 */
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 1s ease;
  /* 添加过渡效果
			*/
}

.news-table:hover {
  transform: scale(1.1);
  /* 悬停时放大 */
}

.news-table img {
  max-width: calc(100% - 40px);
  /* 调整图片宽度 */
  max-height: calc(100% - 40px);
  /* 调整图片高度 */
  border-radius: 5px;
  margin-bottom: 10px;
}

.news-details {
  position: absolute;
  /* 设置标题与内容容器为绝对定位 */
  bottom: 20px;
  /* 与图片底部的距离 */
  left: 20px;
  /* 与图片左侧的距离 */
  width: calc(100% - 60px);
  /* 宽度为图片宽度减去左右边距 */
  background-color: rgba(255, 255, 255, 0.6);
  /* 透明的背景颜色 */
  border-radius: 1px;
  padding: 10px;
  display: flex;
  /* 将标题和内容容器设置为flex布局 */
  justify-content: space-between;
  /* 标题和内容分开，日期位于内容的最右边 */
  align-items: flex-end;
  /* 内容与日期底部对齐
			*/
}

.news-title {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
}

.news-content {
  font-size: 12px;
  margin-bottom: 5px;
}

.news-date {
  font-size: 12px;
  color: #666;
}

.news-header {
  width: 100%;
  color: #000000;
  /* 宽度100% */
  text-align: center;
  /* 居中显示 */
  font-size: 25px;
  /* 大字体 */
  font-weight: bold;
  /* 字体加粗
			*/
  margin-bottom: 50px;
  /* 底部间距 */
}

/*新闻结束 */
/*教材开始 */
.container-jiaocai {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* 添加wrap属性 */
  margin-bottom: 80px;
}

.section {
  width: 100%;
  text-align: center;
  /* 标题居中 */
  margin-top: 20px;
  margin-bottom: 20px;
}

.textbook-column {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* 上下表格之间的间距 */
  align-items: center;
  /* 水平居中 */
}

.textbook-table {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  /* 透明的背景颜色 */
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 1s ease;
  /* 添加过渡效果
			*/
}

.textbook-table:hover {
  transform: scale(1.1);
  /* 悬停时放大 */
}

.textbook-table img {
  max-width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}

.textbook-title {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
}

.textbook-content {
  margin-bottom: 5px;
}

.section-header {
  color: #000000;
  padding-top: 40px;
  width: 100%;
  /* 宽度100% */
  text-align: center;
  /* 居中显示 */
  font-size: 25px;
  /* 大字体 */
  font-weight: bold;
  /* 字体加粗 */
  margin-bottom: 50px;
  /* 底部间距 */
}

/*教材结束 */
/*团队开始 */
.container-td {
  height: 200;
  max-width: 100%;
  margin: 20px auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* 添加wrap属性 */
  margin-bottom: 100px;
}

.section {
  width: 100%;
  text-align: center;
  /* 标题居中 */
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
  /* 白色字体 */
}

.footer-text {
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
  width: 10%;
  /* 宽度100% */
  color: #fff;
  /* 白色字体 */
}

@media screen and (max-width: 767px) {

  .team-details,
  .team-members {
    width: 100%;
    /* 在小屏幕上占满整行 */
  }
}

.full-width-box {
  width: 100%;
  background-color: #007bff;
  /* 蓝色背景 */
  overflow: hidden;
  position: relative;
  padding-top: 10px;
  /* 上间距为10px */
  height: 500px;
  /* 高度为400px */
}

.circle-images {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 50px;
  /* 留出空间给更多按钮 */
  left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  /* 调整小图片与边界的距离 */
  animation: fade-in 2s forwards;
  /* 添加渐隐出现动画
			*/
  opacity: 0;
  /* 初始透明度为0 */
}

.circle-images img {
  width: 100px;
  /* 调整小图片的大小
			*/
  height: 100px;
  border-radius: 50%;
  /* 圆形 */
  margin: 10px;
  /* 调整小图片之间的距离
			*/
  object-fit: cover;
  float: right;
  /* 从右向左浮动 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  /* 描边效果 */
  transition: transform 0.3s ease;
  /* 添加浮动效果 */
  position: relative;
  /* 相对定位 */
  animation: fade-in 2s forwards;
  /* 添加渐隐出现动画 */
  opacity: 0;
  /* 初始透明度为0 */
}

.circle-images img:hover {
  transform: scale(1.1);
  /*
			鼠标悬停时放大 */
}

.more-button {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #0053aa;
  color: #f7fed5;
  padding: 6px 24px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 50px;
  font-size: 15px;
  animation: fade-in 2s forwards;
  /* 添加渐隐出现动画 */
  opacity: 0;
  /* 初始透明度为0 */
}

.more-button:hover {
  background-color: #f3a000;
  color: #fff;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/*团队结束 */
h2 {
  color: #343a40;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
}

li h3 {
  color: #007bff;
}

li p {
  color: #6c757d;
}

li a {
  color: #007bff;
  text-decoration: none;
}

li a:hover {
  text-decoration: underline;
}

/* footer {
	background-color:#343a40;
	color:#fff;
	text-align:center;
	padding:10px 0;
	position:fixed;
	bottom:0;
	width:100%;
}
footer p {
	margin:0;
} */
</style>

<style lang="less" scoped>
.imglist {
  padding: 20px;
  background: #f7f5f4;

  .imgelem {
    position: relative;
    cursor: pointer;

    .imgtitle {
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      text-align: center;

      div:first-child {
        font-size: 40px;
        color: #fff;
        margin-bottom: 40px;
      }

      div:nth-child(2) {
        height: 1px;
        width: 70px;
        background: #f09a3e;
        text-align: center;
        position: absolute;
        transform: translate(-50%, 0);
        left: 50%;
      }

      div:nth-child(3) {
        font-size: 20px;
        color: #fff;
        // border-top: 1px solid #f09a3e;
        padding-top: 30px;
      }
    }
  }

  /deep/img {
    width: 100%;
    height: 100%;
    /* 设置放大比例 */
    transform: scale(1);
    /* 给图片添加过渡效果 */
    transition: all 1s;
  }

  /deep/ img:hover {
    /* 修改放大比例 */
    transform: scale(1.2);
  }
}

.news {
  padding: 20px;
  background: #f7f5f4;

  .title {
    display: flex;
    justify-content: center;
    font-size: 34px;
    padding-bottom: 30px;
  }

  .subtitle {
    display: flex;
    justify-content: center;
    font-size: 20px;
    color: #7e8890;
    padding-bottom: 30px;
  }

  .bottomline {
    text-align: center;
    display: flex;
    justify-content: center;

    .bottomlinecenter {
      height: 1px;
      width: 200px;
      background: #f09a3e;
    }
  }

  .newcontent {
    padding: 40px 0;
  }
}

.introlist {
  padding: 20px;
  background: #f7f5f4;

  .title {
    font-size: 24px;
    color: #333c4e;
    font-weight: 600;
    margin: 30px 0 20px 0;
  }

  .subtitle {
    font-size: 15px;
    color: #7e8890;
    margin-bottom: 20px;
  }

  .list {
    font-size: 19px;
    color: #7e8890;

    i {
      color: #f09a3e;
    }

    div {
      margin: 20px 0;
      line-height: 28px;
    }
  }

  .introlistLeftFooter {
    font-size: 15px;
    color: #7e8890;
  }

  /deep/.ant-collapse-header {
    font-size: 20px;
    color: #f09a3e;
  }

  /deep/ .ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow {
    font-size: 25px;
    margin-right: 15px;
  }
}

.homepagecontent1 {
  padding: 90px 30px 45px 30px;

  .homepagecontent1img {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .homepagecontent1title {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    .title {
      font-size: 34px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .subtitle {
      margin-bottom: 20px;
      font-size: 20px;
    }

    .bottomline {
      margin-bottom: 60px;
      text-align: center;
      display: flex;
      justify-content: center;

      .bottomlinecenter {
        height: 1px;
        width: 200px;
        background: #f09a3e;
      }
    }
  }

  .cardtitle {
    color: #333c4e;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .fusion-text {
    color: #7e8890;

    p {
      line-height: 30px;
      font-size: 15px;
    }
  }
}
</style>
