<template>
  <!-- <div> -->
  <page-header-wrapper1 :title="false">
    <template v-slot:content>
      <!-- <div class="page-header-content">
        <video width="600" height="360" controls v-if="false">
          <source :src="tzbanner" type="video/mp4" />
        </video>
        <img :src="tzbanner" alt="" />
      </div> -->
    </template>
    <template v-slot:extraContent>
      <!-- <div class="extra-content">
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
      </div> -->
    </template>

    <div>


    <!-- 课程开始 -->
    <div class="container">
      <div class="news-header">
        课程列表
      </div>
      <div class="course-container">
        <div class="course">
          <img src="http://www.wiseloong.com/template/default/images/mb1.png" alt="Course 1">
          <h3>
            心肺复苏
          </h3>
          <p>
            心肺复苏一般指心肺复苏术。心肺复苏术分为初级心肺复苏和高级心肺复苏。主要是通过人工胸外按压、开通气道、人工呼吸以及应用辅助设备、特殊技术等建..
          </p>
          <ul>
            <li>
              内容 1
            </li>
          </ul>
        </div>
        <div class="course">
          <img src="http://www.wiseloong.com/template/default/images/mb2.png" alt="Course 2">
          <h3>
            烫伤烧伤
          </h3>
          <p>
            烧伤和烫伤是生活中比较常见的情况，它们随时都可以发生在人们身边。轻者给患者带来痛苦，重者将危及患者生命，还可带来终生伤害，因此了解烧伤烫伤的相关知识非常重要。。
          </p>
          <ul>
            <li>
              内容 1
            </li>
          </ul>
        </div>
        <div class="course">
          <img src="http://www.wiseloong.com/template/default/images/mb3.png" alt="Course 3">
          <h3>
            AED的使用
          </h3>
          <p>
            除颤器一般操作步骤如下，自动体外除颤器（AED）可根据说明书和设备提示进行操作。连接除颤器导线，接通电源，检查同步性能，选择R波较高导联进行示波观察。
          </p>
          <ul>
            <li>
              内容 3
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 课程结束 -->
    <!-- 新闻开始 -->
    <div class="container-new">
      <div class="news-header">
        新闻动态
      </div>
      <!-- 新闻动态标题 -->
      <div class="news-column">
        <div class="news-table">
          <img src="https://www.nies.edu.cn/storage/nies/web/cn/article/2024/03/c6801ac0fcc0215f7b0e06c97de6e5f8.jpg"
          alt="News 1">
          <div class="news-details">
            <div>
              <div class="news-title">
                新闻标题 1
              </div>
              <div class="news-content">
                新闻内容摘要...
              </div>
            </div>
            <div class="news-date">
              日期: 2024-04-01
            </div>
          </div>
        </div>
        <div class="news-table">
          <img src="https://www.nies.edu.cn/storage/nies/web/cn/article/2024/02/47b049361309e86e3b3b868cc5046d62.jpg"
          alt="News 2">
          <div class="news-details">
            <div>
              <div class="news-title">
                新闻标题 2
              </div>
              <div class="news-content">
                新闻内容摘要...
              </div>
            </div>
            <div class="news-date">
              日期: 2024-04-02
            </div>
          </div>
        </div>
      </div>
      <div class="news-column">
        <div class="news-table">
          <img src="https://www.nies.edu.cn/storage/nies/web/cn/article/2024/01/2d7c37013be45a6671ef476bcfdd4a84.png"
          alt="News 3">
          <div class="news-details">
            <div>
              <div class="news-title">
                新闻标题 3
              </div>
              <div class="news-content">
                新闻内容摘要...
              </div>
            </div>
            <div class="news-date">
              日期: 2024-04-03
            </div>
          </div>
        </div>
        <div class="news-table">
          <img src="https://www.nies.edu.cn/storage/nies/web/cn/article/2024/01/2d7c37013be45a6671ef476bcfdd4a84.png"
          alt="News 4">
          <div class="news-details">
            <div>
              <div class="news-title">
                新闻标题 4
              </div>
              <div class="news-content">
                新闻内容摘要...
              </div>
            </div>
            <div class="news-date">
              日期: 2024-04-04
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 新闻结束 -->
    <!-- 教材开始 -->
    <div class="container-jiaocai">
      <div class="section">
        <div class="section-header">
          推荐教材
        </div>
      </div>
      <!-- 推荐教材标题 -->
      <div class="textbook-column">
        <div class="textbook-table">
          <img src="http://118.178.233.104:8080/test/img/textbook1.fdb821cc.png"
          alt="Textbook 1">
          <div class="textbook-details">
            <div class="textbook-title">
              教材标题 1
            </div>
            <div class="textbook-content">
              教材内容摘要...
            </div>
          </div>
        </div>
      </div>
      <div class="textbook-column">
        <div class="textbook-table">
          <img src="http://118.178.233.104:8080/test/img/textbook2.4d51be9f.png"
          alt="Textbook 2">
          <div class="textbook-details">
            <div class="textbook-title">
              教材标题 2
            </div>
            <div class="textbook-content">
              教材内容摘要...
            </div>
          </div>
        </div>
      </div>
      <div class="textbook-column">
        <div class="textbook-table">
          <img src="http://118.178.233.104:8080/test/img/textbook3.a594d412.png"
          alt="Textbook 3">
          <div class="textbook-details">
            <div class="textbook-title">
              教材标题 3
            </div>
            <div class="textbook-content">
              教材内容摘要...
            </div>
          </div>
        </div>
      </div>
      <div class="textbook-column">
        <div class="textbook-table">
          <img src="http://118.178.233.104:8080/test/img/textbook4.1ac51623.png"
          alt="Textbook 4">
          <div class="textbook-details">
            <div class="textbook-title">
              教材标题 4
            </div>
            <div class="textbook-content">
              教材内容摘要...
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 教材结束 -->
    <!-- 团队开始 -->
    <div class="container-td">
      <div class="section">
        <div class="news-header">
          专家团队
        </div>
      </div>
      <!-- 专家团队标题 -->
      <div class="full-width-box">
        <div class="circle-images">
          <img src="http://vod.jj-edu.cn/87RviRoKxAwTCiEV_微信图片_20230805182850.png"
          alt="Image 1">
          <img src="http://vod.jj-edu.cn/U79ax4rEkYbeXpAp_微信图片_20230731122736.jpg"
          alt="Expert 2">
          <img src="http://vod.jj-edu.cn/21DzKVmlGGSBrZFT_Ch5nQWSxLfCAQsDGAATfUvB6uB0333.png"
          alt="Image 3">
          <!-- 添加更多小图片 -->
          <img src="http://vod.jj-edu.cn/bLLxAaidDSYXkbZq_Ch5nQWSxNoqAP8-OAANilTE3ZAI875.png"
          alt="Image 4">
          <img src="http://vod.jj-edu.cn/csHC5seSdHJD7Pjh_El8rdqe28fWiZyGW_CWW69gngRzgtnPkD_Ch5nQWSyAwyAYe2nAEdph4S6bTE214%20(6).png"
          alt="Image 5">
          <img src="http://vod.jj-edu.cn/EoDLZ5iAc3XKrk4q_El8rdqe28fWiZyGW_CWW69gngRzgtnPkD_Ch5nQWSyAwyAYe2nAEdph4S6bTE214%20(5).png"
          alt="Image 6">
          <img src="http://vod.jj-edu.cn/RRBDY4hdu1B9Fr42_El8rdqe28fWiZyGW_CWW69gngRzgtnPkD_Ch5nQWSyAwyAYe2nAEdph4S6bTE214%20(4).png"
          alt="Image 7">
          <img src="http://vod.jj-edu.cn/lMjgv1npkH7Neq13_El8rdqe28fWiZyGW_CWW69gngRzgtnPkD_Ch5nQWSyAwyAYe2nAEdph4S6bTE214%20(3).png"
          alt="Image 8">
          <img src="http://vod.jj-edu.cn/87RviRoKxAwTCiEV_微信图片_20230805182850.png"
          alt="Image 1">
          <img src="http://vod.jj-edu.cn/U79ax4rEkYbeXpAp_微信图片_20230731122736.jpg"
          alt="Expert 2">
          <img src="http://vod.jj-edu.cn/21DzKVmlGGSBrZFT_Ch5nQWSxLfCAQsDGAATfUvB6uB0333.png"
          alt="Image 3">
          <!-- 添加更多小图片 -->
          <img src="http://vod.jj-edu.cn/bLLxAaidDSYXkbZq_Ch5nQWSxNoqAP8-OAANilTE3ZAI875.png"
          alt="Image 4">
          <img src="http://vod.jj-edu.cn/csHC5seSdHJD7Pjh_El8rdqe28fWiZyGW_CWW69gngRzgtnPkD_Ch5nQWSyAwyAYe2nAEdph4S6bTE214%20(6).png"
          alt="Image 5">
          <img src="http://vod.jj-edu.cn/EoDLZ5iAc3XKrk4q_El8rdqe28fWiZyGW_CWW69gngRzgtnPkD_Ch5nQWSyAwyAYe2nAEdph4S6bTE214%20(5).png"
          alt="Image 6">
          <img src="http://vod.jj-edu.cn/RRBDY4hdu1B9Fr42_El8rdqe28fWiZyGW_CWW69gngRzgtnPkD_Ch5nQWSyAwyAYe2nAEdph4S6bTE214%20(4).png"
          alt="Image 7">
          <img src="http://vod.jj-edu.cn/lMjgv1npkH7Neq13_El8rdqe28fWiZyGW_CWW69gngRzgtnPkD_Ch5nQWSyAwyAYe2nAEdph4S6bTE214%20(3).png"
          alt="Image 8">
          <!-- 添加更多小图片 -->
        </div>
        <!-- <button class="more-button">
          更多
        </button> -->
        <a-button class="more-button" type="primary">
          更多
        </a-button>
      </div>
    </div>
        <!-- 团队结束 -->



    </div>
  <!-- </div> -->
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


<style scoped>

body {
	font-family:Arial,sans-serif;
	margin:0;
	padding:0;
	background-color:#f8f9fa;
	color:#333;
}

header h1 {
	margin:0;
	font-size:24px;
	/* 调整字体大小 */
}
/*yetou */ /*菜单开始 */ nav ul {
	list-style-type:none;
	margin:0;
	padding:0;
}
nav ul li {
	display:inline;
	margin-right:20px;
}
nav ul li a {
	color:#000;
	text-decoration:none;
	padding:15px 20px;
	/* 调整链接内边距 */ background-color:#fff;
	border-radius:5px;
	/* 调整边框圆角 */
			font-family:"黑体","Microsoft YaHei",sans-serif;
	transition:color 0.3s
			ease,background-color 0.3s ease;
	border:2px solid transparent;
	/* 添加边框并设置初始为透明
			*/
}
nav ul li a:hover {
	color:#007bff;
	background-color:#fff;
	border-color:#007bff;
	/* 鼠标悬停时边框颜色变为蓝色 */
}
nav ul li a.active {
	color:#fff;
	background-color:#76daff;
	border-color:#76daff;
	/* 链接被点击时边框颜色也为蓝色 */
}
/*菜单结束 */ /*banner
			*/ .banner {
	width:100%;
	margin-top:1px;
	/* 将banner与导航栏下方留出间距 */
}
/*banner
			*/ /*课程开始 */ @media screen and (max-width:600px) {
	header h1 {
	font-size:20px;
	/* 在小屏幕上调整字体大小 */
}
nav ul li a {
	padding:10px 15px;
	/* 在小屏幕上调整链接内边距
			*/
}
}.container {
	justify-content:center;
	/* 将课程列表水平居中排列 */ max-width:800px;
	margin:20px auto;
	padding:20px 40px;
	text-align:center;
	/* 将内容居中排列
			*/
}
h2 {
	color:#007bff;
}
.course-container {
	display:flex;
	flex-wrap:wrap;
	width:900px;
	justify-content:center;
	/* 将课程列表水平居中排列 */
}
.course {
	background-color:#fff;
	padding:20px;
	border-radius:5px;
	box-shadow:0 2px 5px rgba(0,0,0,0.1);
	margin:30px;
	/* 添加间距 */ width:calc(25%
			- 30px);
	/* 设置宽度自适应，并考虑间距 */ flex-grow:1;
	/* 让课程容器在需要时可以增长 */ box-sizing:border-box;
	/* 包含内边距和边框在内的总宽度计算 */ transition:box-shadow 1s;
	/* 添加过渡效果，时间为1秒钟
			*/
}
.course:hover {
	box-shadow:0 0 20px rgba(0,0,0,0.1);
	/* 悬浮时的阴影效果
			*/
}
.course h3 {
	margin-top:0;
}
.course p {
	margin-bottom:10px;
	font-size:9px;
}
.footer-text {
	text-align:center;
	font-size:14px;
	margin-top:20px;
}
.course img {
	border-top-left-radius:calc(.75rem - 1px);
	border-top-right-radius:calc(.75rem - 1px);
	max-width:100%;
	border-radius:5px;
	margin-bottom:10px;
}
/*课程结束 */ /*新闻开始 */ .container-new {
	max-width:1200px;
	margin:20px auto;
	padding:0 20px;
	display:flex;
	justify-content:space-between;
	flex-wrap:wrap;
	/* 添加wrap属性 */ justify-content:center;
	/* 将课程列表水平居中排列
			*/ text-align:center;
	/* 将内容居中排列 */
}
h2 {
	padding:0 20px;
	color:#007bff;
}
.news-column {
	padding:20px;
	flex:1;
	display:flex;
	flex-direction:column;
	gap:2px;
	/* 上下表格之间的间距 */
}
.news-table {
	margin-bottom:25px;
	position:relative;
	/* 设置图片容器为相对定位 */ padding:10px;
	background-color:rgba(255,255,255,0.8);
	/* 透明的背景颜色 */ border-radius:5px;
	box-shadow:0 2px 5px rgba(0,0,0,0.1);
	transition:transform 1s ease;
	/* 添加过渡效果
			*/
}
.news-table:hover {
	transform:scale(1.1);
	/* 悬停时放大 */
}
.news-table
			img {
	max-width:calc(100% - 40px);
	/* 调整图片宽度 */ max-height:calc(100%
			- 40px);
	/* 调整图片高度 */ border-radius:5px;
	margin-bottom:10px;
}
.news-details {
	position:absolute;
	/* 设置标题与内容容器为绝对定位 */ bottom:20px;
	/* 与图片底部的距离 */
			left:20px;
	/* 与图片左侧的距离 */ width:calc(100% - 60px);
	/* 宽度为图片宽度减去左右边距 */
			background-color:rgba(255,255,255,0.6);
	/* 透明的背景颜色 */ border-radius:1px;
	padding:10px;
	display:flex;
	/* 将标题和内容容器设置为flex布局 */ justify-content:space-between;
	/* 标题和内容分开，日期位于内容的最右边 */ align-items:flex-end;
	/* 内容与日期底部对齐
			*/
}
.news-title {
	font-size:15px;
	font-weight:bold;
	margin-bottom:5px;
}
.news-content {
	font-size:12px;
	margin-bottom:5px;
}
.news-date {
	font-size:12px;
	color:#666;
}
.news-header {
	width:100%;
  color: #000000;
	/* 宽度100% */ text-align:center;
	/* 居中显示 */ font-size:25px;
	/* 大字体 */ font-weight:bold;
	/* 字体加粗
			*/ margin-bottom:50px;
	/* 底部间距 */
}
/*新闻结束 */ /*教材开始 */ .container-jiaocai {
	max-width:1200px;
	margin:20px auto;
	padding:0 20px;
	display:flex;
	justify-content:space-between;
	flex-wrap:wrap;
	/* 添加wrap属性 */ margin-bottom:80px;
}
.section {
	width:100%;
	text-align:center;
	/* 标题居中 */ margin-top:20px;
	margin-bottom:20px;
}
.textbook-column {
	flex:1;
	padding:20px;
	display:flex;
	flex-direction:column;
	gap:20px;
	/* 上下表格之间的间距 */ align-items:center;
	/* 水平居中 */
}
.textbook-table {
	padding:20px;
	background-color:rgba(255,255,255,0.8);
	/* 透明的背景颜色 */ border-radius:10px;
	box-shadow:0 2px 5px rgba(0,0,0,0.1);
	transition:transform 1s ease;
	/* 添加过渡效果
			*/
}
.textbook-table:hover {
	transform:scale(1.1);
	/* 悬停时放大 */
}
.textbook-table
			img {
	max-width:100%;
	border-radius:5px;
	margin-bottom:10px;
}
.textbook-title {
	font-size:15px;
	font-weight:bold;
	margin-bottom:5px;
}
.textbook-content {
	margin-bottom:5px;
}
.section-header {
	color:#000000;
	padding-top:40px;
	width:100%;
	/* 宽度100% */ text-align:center;
	/* 居中显示 */ font-size:25px;
	/* 大字体 */ font-weight:bold;
	/* 字体加粗 */ margin-bottom:50px;
	/* 底部间距 */
}
/*教材结束 */ /*团队开始 */ .container-td {
	height:200;
	max-width:100%;
	margin:20px auto;
	padding:0 20px;
	display:flex;
	justify-content:space-between;
	flex-wrap:wrap;
	/* 添加wrap属性 */ margin-bottom:100px;
}
.section {
	width:100%;
	text-align:center;
	/* 标题居中 */ margin-top:20px;
	margin-bottom:20px;
	color:#fff;
	/* 白色字体 */
}
.footer-text {
	text-align:center;
	font-size:14px;
	margin-top:20px;
	width:10%;
	/* 宽度100% */ color:#fff;
	/* 白色字体 */
}
@media screen and (max-width:767px) {
	.team-details,.team-members {
	width:100%;
	/* 在小屏幕上占满整行 */
}
}.full-width-box {
	width:100%;
	background-color:#007bff;
	/* 蓝色背景 */ overflow:hidden;
	position:relative;
	padding-top:10px;
	/* 上间距为10px */ height:500px;
	/* 高度为400px */
}
.circle-images {
	position:absolute;
	top:0;
	right:0;
	bottom:50px;
	/* 留出空间给更多按钮 */ left:0;
	display:flex;
	flex-wrap:wrap;
	justify-content:flex-start;
	align-items:center;
	padding:20px;
	/* 调整小图片与边界的距离 */ animation:fade-in 2s forwards;
	/* 添加渐隐出现动画
			*/ opacity:0;
	/* 初始透明度为0 */
}
.circle-images img {
	width:100px;
	/* 调整小图片的大小
			*/ height:100px;
	border-radius:50%;
	/* 圆形 */ margin:10px;
	/* 调整小图片之间的距离
			*/ object-fit:cover;
	float:right;
	/* 从右向左浮动 */ box-shadow:0 0 10px rgba(0,0,0,0.2);
	/* 描边效果 */ transition:transform 0.3s ease;
	/* 添加浮动效果 */ position:relative;
	/* 相对定位 */ animation:fade-in 2s forwards;
	/* 添加渐隐出现动画 */ opacity:0;
	/* 初始透明度为0 */
}
.circle-images img:hover {
	transform:scale(1.1);
	/*
			鼠标悬停时放大 */
}
.more-button {
	position:absolute;
	bottom:0;
	left:50%;
	transform:translateX(-50%);
	background-color:#0053AA;
	color:#F7FED5;
	padding:6px 24px;
	border:none;
	border-radius:20px;
	cursor:pointer;
	transition:background-color
			0.3s ease;
	margin-bottom:50px;
	font-size:15px;
	animation:fade-in 2s forwards;
	/* 添加渐隐出现动画 */ opacity:0;
	/* 初始透明度为0 */
}
.more-button:hover {
	background-color:#F3A000;
	color:#fff;
}
@keyframes fade-in {
	from {
	opacity:0;
}
to {
	opacity:1;
}
}/*团队结束 */ h2 {
	color:#343a40;
}
ul {
	list-style-type:none;
	padding:0;
}
li {
	margin-bottom:20px;
}
li h3 {
	color:#007bff;
}
li p {
	color:#6c757d;
}
li a {
	color:#007bff;
	text-decoration:none;
}
li a:hover {
	text-decoration:underline;
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
