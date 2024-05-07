<template>
  <div class="ele-body list-article-responsive">
    <el-tabs v-model="activeNameparent" @tab-click="handleClick">
      <el-tab-pane v-for="item in toptab" :label="item.trainingName" :name="item.trainingId"></el-tab-pane>
      <!-- <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
    </el-tabs>

    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12" :lg="9" :xl="9">
        <div data-v-1477b94e="" class="article-list-right">
          <div data-v-1477b94e="" class="el-card is-never-shadow">
            <!---->
            <div class="el-card__body" style="padding: 15px">
              <div data-v-1477b94e="" class="el-image">
                <img
                  src="http://106.14.124.163:8090/api/system/sysStaticPicture/trainingProgram"
                  class="el-image__inner"
                />
                <!---->
              </div>
              <div data-v-1477b94e="" class="professional_name">
                <h5 data-v-1477b94e="">2023年山东省学校急救教育师资专业培训</h5>
              </div>
              <div data-v-1477b94e="" class="training-tag">
                <div data-v-1477b94e="">
                  <span data-v-1477b94e="" class="el-tag el-tag--medium el-tag--plain"> 要求学时 </span>
                  <p data-v-1477b94e="">32.0</p>
                </div>
                <div data-v-1477b94e="">
                  <span data-v-1477b94e="" class="el-tag el-tag--success el-tag--medium el-tag--plain"> 已学学时 </span>
                  <p data-v-1477b94e="">0.0</p>
                </div>
                <div data-v-1477b94e="">
                  <span data-v-1477b94e="" class="el-tag el-tag--danger el-tag--medium el-tag--plain"> 未学学时 </span>
                  <p data-v-1477b94e="">32</p>
                </div>
              </div>
              <div data-v-1477b94e="" class="exam" style="text-align: center">
                <a
                  data-v-1477b94e=""
                  class="el-link el-link--primary is-underline"
                  style="font-size: 12px; padding: 5px 0px"
                >
                  <!---->
                  <span class="el-link--inner">
                    正常考试
                    <span data-v-1477b94e="" style="font-size: 12px"> (2023-11-01 00:00~2024-10-31 00:00) </span>
                  </span>
                  <!---->
                </a>
              </div>
              <div data-v-1477b94e="" style="display: flex; flex-direction: row; justify-content: space-between">
                <!---->
                <!---->
              </div>
            </div>
          </div>
          <div data-v-1477b94e="" class="el-card wdms-introduction is-never-shadow">
            <div class="el-card__header">
              <div data-v-1477b94e="" class="clearfix">
                <h5 data-v-1477b94e="">培训简介</h5>
              </div>
            </div>
            <div class="el-card__body" style="padding: 10px 5px 10px 10px">
              <div data-v-1477b94e="" class="wdms_html introduction el-scrollbar">
                <article class="4ever-article">
                  <p style="text-align: center">&nbsp;</p>
                  <h2 style="text-align: center">关于举办2023年山东省学校急救教育师资专业培训的通知</h2>
                  <p>&nbsp;</p>
                  <p style="text-align: right">中教培〔2023〕8号</p>
                  <p>&nbsp;</p>
                  <p>山东省各市教育局、所属区县教体局、各大中小学校：</p>
                  <p>&nbsp;</p>
                  <p style="text-indent: 2em">
                    为深入推动《健康中国行动（2019—2030年）》，贯彻落实教育部等五部门《关于全面加强和改进新时代学校卫生与健康教育工作的意见》、教育部办公厅《关于开展全国学校急救教育试点工作的通知》《关于实施全国健康学校建设计划的通知》精神，推进全国学校急救教育工作优质均衡发展，增强学校教职工的急救意识，提高教职工的急救技能及应对突发事件、处置意外伤害的能力，守护师生生命健康与安全，同时为社会培养乐于施救、敢于施救、善于施救的人员，中国教育科学研究院培训中心会同中国教育科学研究院体育美育教育研究所，依照《首批全国学校急救教育试点工作实施方案》，计划2023年内在山东省开展学校急救教育师资专业培训，现将有关事项通知如下。
                  </p>
                  <p style="text-indent: 2em">&nbsp;</p>
                  <p>一、培训目标</p>
                  <p>&nbsp;</p>
                  <p style="text-indent: 2em">
                    以提升学校应急救护能力为目标，以建设学校急救教育师资队伍、普及急救知识和技能为重点，培养懂得急救基本原则、掌握紧急救护处理融合能力的急救队伍。
                  </p>
                  <p>&nbsp;</p>
                  <p>二、培训对象</p>
                  <p>&nbsp;</p>
                  <p style="text-indent: 2em">1.各大中小学幼儿园校长（园长）、校医、体育与健康课教师、班主任。</p>
                  <p style="text-indent: 2em">2.各地安全教育行政部门负责人及相关人员，各地监管部门工作人员。</p>
                  <p style="text-indent: 2em">&nbsp;</p>
                  <p>三、培训时间</p>
                  <p>&nbsp;</p>
                  <p style="text-indent: 2em">
                    每期线上培训不少于32学时，从学习第一天开始算，学员需在一个月内完成；线下培训不少于16学时，集中培训。
                  </p>
                  <p style="text-indent: 2em">
                    每期培训具体开班时间由参训单位与中国教育科学研究院培训中心协商确定，另行发布通知。
                  </p>
                  <p style="text-indent: 2em">&nbsp;</p>
                  <p>四、培训内容</p>
                  <p>&nbsp;</p>
                  <p style="text-indent: 2em">
                    培训课程按照理论与实践相结合的原则设计，以急救教育理论为基础，聚焦急救教育实践中的具体问题，全面提升教师的急救实操能力。培训课程包括“急救教育政策法规”“急救教育理论知识”“急救实操演练”“急救设施设备操作”四个学习模块。
                  </p>
                  <p>&nbsp;</p>
                  <p style="text-indent: 2em">
                    <strong> 1. </strong>
                    <strong> 急救教育政策法规 </strong>
                    。对《中华人民共和国基本医疗卫生与健康促进法》《中国教育现代化2035》《国务院关于实施健康中国行动的意见》《关于全面加强和改进新时代学校卫生与健康教育工作的意见》《关于开展全国学校急救教育试点工作的通知》《关于实施全国健康学校建设计划的通知》等政策文件进行解读。
                  </p>
                  <p style="text-indent: 2em">&nbsp;</p>
                  <p style="text-indent: 2em">
                    <strong> 2. </strong>
                    <strong> 急救教育理论知识 </strong>
                    。包括国内外急救教育对比、心源性猝死发病率起因与人群分析、心肺复苏概念与内涵、社会急救体系的结构与布局、全民社会救护素养的教培方向与教培模式、应激心理疏导方法等。
                  </p>
                  <p style="text-indent: 2em">&nbsp;</p>
                  <p style="text-indent: 2em">
                    <strong> 3. </strong>
                    <strong> 急救实操演练 </strong>
                    。充分利用急救设施设备开展单人、双人、团队演练的急救技能训练，有效培养自救互救技能。学校医务人员要掌握心肺复苏初级生命支持技能，逐步掌握高级生命支持技能，以及高效团队调动、综合团队演练的急救教学技能，具备急救的“三预方针”“三化方法”“三生方略”的理论与实践结合能力及心肺复苏技法、技术、技艺整合能力；非医务人员要掌握急救基础知识，掌握校园常见的心脏骤停、气道异物梗阻等紧急救护技能，创伤出血与止血、关节脱位与扭伤等创伤救护办法，淹溺、烧烫伤、中暑等意外伤害处置方法，火灾、地震、踩踏等突发事件的应急救护措施。
                  </p>
                  <p>&nbsp;</p>
                  <p style="text-indent: 2em">
                    <strong> 4. </strong>
                    <strong> 急救设施设备操作 </strong>
                    。熟练掌握急救设施设备使用方法，包括止血纱布与止血带使用、担架搬运操作、AED自动体外除颤器与无创伤心肺复苏仪的使用等（培训所需设施设备由中国教学仪器设备有限公司负责统筹）。
                  </p>
                  <p style="text-indent: 2em">&nbsp;</p>
                  <p>五、培训方式</p>
                  <p>&nbsp;</p>
                  <p style="text-indent: 2em">
                    采取线上学习与线下实践相结合，辅以实践技能考核的方式。理论与实践相结合，专题学习与案例研讨相结合，集中培训与小班教学相结合，形式灵活多样。
                  </p>
                  <p>&nbsp;</p>
                  <p style="text-indent: 2em">
                    <strong> 1. </strong>
                    <strong> 培训方式 </strong>
                    。线上学习，学员在中国教育科学研究院培训中心“小鹅通”平台上进行研学，须完成不少于32学时课程，为期一个月；线下实操学习，培训时间不少于16学时。现场实操为10人一组，最后一天为实操考核。线上线下共计48学时。
                  </p>
                  <p>&nbsp;</p>
                  <p style="text-indent: 2em">
                    <strong> 2. </strong>
                    <strong> 考核评价 </strong>
                    。中国教育科学研究院培训中心对参训学员进行统一管理，统计学时，考核学习任务的完成情况。每位学员在完成规定课程学习并通过考核后，可获得中国教育科学研究院培训中心颁发的“学校急救教育师资专业培训”电子合格证书。证书统一编号，中国教育科学研究院培训中心通过微信服务号提供查询和下载服务。
                  </p>
                  <p>&nbsp;</p>
                  <p>六、培训费用</p>
                  <p>&nbsp;</p>
                  <p style="text-indent: 2em">1.收费标准</p>
                  <p style="text-indent: 2em">
                    ◆每人1820元（包括线上32学时课程，每人260元；线下培训16课时，每人1560元。含培训费、场地费、耗材费、资料费等，不含食宿和交通费用）。
                  </p>
                  <p style="text-indent: 2em">◆如需纸质证书，需另付证书工本费、快递费 60 元。</p>
                  <p>&nbsp;</p>
                  <p style="text-indent: 2em">2.收款账号信息</p>
                  <p style="text-indent: 2em">收款单位：中国教育科学研究院培训中心</p>
                  <p style="text-indent: 2em">开户银行：北京银行北太平庄支行</p>
                  <p style="text-indent: 2em">账&nbsp;&nbsp;&nbsp; 号：01090343000120105142007</p>
                  <p style="text-indent: 2em">
                    无论是银行转账还是通过扫描下方二维码支付培训费用，请务必在附言栏注明以下信息：学校急救+开票单位+缴费人姓名+手机号。
                  </p>
                  <p style="text-indent: 2em">&nbsp;</p>
                  <p style="text-indent: 2em">3.报名方式</p>
                  <p style="text-indent: 2em">（1）由参训单位组织报名并填写《学校急救教育师资专业培训参训回执表》。</p>
                  <p style="text-indent: 2em">（2）在表内选择就近的线下实训点：</p>
                  <p style="text-indent: 2em">◆SD-JN-01山东省计算中心（国家超级计算济南中心）</p>
                  <p style="text-indent: 2em">（联系人：霍吉东 15662772258）</p>
                  <p style="text-indent: 2em">◆SD-JN-02山东商业职业技术学院</p>
                  <p style="text-indent: 2em">（联系人：李子江 15866629321）</p>
                  <p style="text-indent: 2em">◆SD-ZB-01淄博职业学院</p>
                  <p style="text-indent: 2em">（联系人：房泽海 13953377117）</p>
                  <p style="text-indent: 2em">◆SD-ZB-02淄博师范高等专科学校</p>
                  <p style="text-indent: 2em">（联系人：刘建波 15169359666）</p>
                  <p style="text-indent: 2em">◆SD-WH-01哈尔滨工业大学（威海校区）</p>
                  <p style="text-indent: 2em">（联系人：孙芳蕾13863179050）</p>
                  <p style="text-indent: 2em">◆SD-BZ-01滨州学院</p>
                  <p style="text-indent: 2em">（联系人：宫新军0543-3190315）</p>
                  <p style="text-indent: 2em">◆SD-TA-01泰山职业技术学院</p>
                  <p style="text-indent: 2em">（联系人：李志强18764889918）</p>
                  <p style="text-indent: 2em">◆SD-WF-01潍坊护理职业学院</p>
                  <p style="text-indent: 2em">（联系人：王文军 13153688666）</p>
                  <p style="text-indent: 2em">电子扫描件发送至：jiaokeyuanpeixun@sina.com。</p>
                  <p style="text-indent: 2em">&nbsp;</p>
                  <p>七、联系方式</p>
                  <p style="text-indent: 2em">&nbsp;</p>
                  <p style="text-indent: 2em">报名咨询：殷老师 &nbsp;13910227755</p>
                  <p style="text-indent: 2em">方案咨询：刘老师 &nbsp;13910879232</p>
                  <p style="text-indent: 2em">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    张老师 &nbsp;13366161161
                  </p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>
                    附件：
                    <a
                      title="学校急救教育线上培训课程内容"
                      href="http://vod.jj-edu.cn/VQJcpiqv8tGZSeCb_Ch5nQWS3pYyAcOOuAAOZtRGP8vE61.docx"
                      target="_blank"
                      rel="noopener"
                    >
                      学校急救教育线上培训课程内容
                    </a>
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      title="学校急救教育师资专业培训参训回执表"
                      href="http://vod.jj-edu.cn/v3MKZSjsO4VJxthA_Ch5nQWS3pZmAFkpDAABVrYHOMuA41.docx"
                      target="_blank"
                      rel="noopener"
                    >
                      学校急救教育师资专业培训参训回执表
                    </a>
                  </p>
                  <p>&nbsp;</p>
                  <p style="text-align: right">中国教育科学研究院培训中心</p>
                  <p style="text-align: right">2023年7月10日</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="15" :xl="15">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="item in projectsperson" :label="item.dictName" :name="item.dictCode">
            <a-list :data-source="courseList" :grid="{ gutter: 24, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }">
              <a-list-item slot="renderItem" slot-scope="item">
                <a-card class="ant-pro-pages-list-projects-card imgelem" hoverable @click="gobook(item)">
                  <!-- <img slot="cover" :src="item.courseImagePath" :alt="item.courseName" /> -->
                  <el-image :src="item.courseImagePath" :alt="item.courseName" fit="cover">
                    <div slot="error" class="image-slot">
                      <img slot="cover" :src="defaultimage" :alt="item.courseName || '基础急救课程'" />
                    </div>
                  </el-image>
                  <div>
                    <div v-if="item.courseName">{{ item.courseName }}</div>
                    <div v-if="item.lecturer">主讲人：{{ item.lecturer }}</div>
                  </div>
                </a-card>
              </a-list-item>
            </a-list>
          </el-tab-pane>
        </el-tabs></el-col
      >
    </el-row>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { mapState } from 'vuex'
import storage from 'store'
const uniqueBy = (arr, key) => {
  const map = new Map()
  return arr.filter((item) => {
    const k = key(item)
    return map.has(k) ? false : map.set(k, item)
  })
}
export default {
  name: 'mytraining',
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      activeName: '',
      activeNameparent: '',
      projectsperson: [],
      courseList: [],
      toptab: [],
      ke1image: require('@/assets/ke1.jpg'),
      defaultimage: require('@/assets/WTshSAcfPFulGGZg_i-AgeF3Chw2ABgwoAAKJEK3smWg766.jpg'),
      AccessToken: {},
    }
  },
  //计算属性 类似于data概念
  computed: {
    ...mapState({
      // 动态主路由
      userInfo: (state) => state.user.info,
    }),
  },
  //监控data中的数据变化
  watch: {
    userInfo: {
      deep: true,
      handler(newVal, oldVal) {
        //newVal和oldVal会包含formData里面的每一个属性值
        let AccessToken = storage.get('Access-Token')
        console.log(AccessToken)
        this.AccessToken = AccessToken
      },
    },
  },
  //方法集合
  methods: {
    getprojectsperson() {
      let that = this
      that.$http
        .post('/platform/queryDictionariesDetailLike', {
          currentPage: 1,
          size: 100000,
          parentCode: 'course_classification',
          type: 1,
        })
        .then((res) => {
          console.log(res)
          that.projectsperson = res && res.datas
          // that.projectsperson = Array.from(new Set(that.projectsperson.map(item => item.dictCode)));
          console.log(that.projectsperson)
          that.projectsperson = uniqueBy(that.projectsperson, (item) => item.dictCode)
          that.activeName = that.projectsperson[0].dictCode
          that.getqueryCourseList()
        })
      // queryDictionariesDetailLike({ "currentPage": 1, "size": 100000, "parentCode": "course_classification", "type": 1 }).then((res) => {
      //   console.log(res)
      //   that.projectsperson = res && res.data && res.data.list
      //   // this.loading = false
      //   // console.log(that.projects)
      // })
    },
    handleClick(tab, event) {
      this.getqueryCourseList()
    },
    getqueryCourseList() {
      let that = this
      that.$http
        .post('/base/queryCourseList', { currentPage: 1, size: 100000, type: 1, dictCode: this.activeName })
        .then((res) => {
          console.log(res)
          that.courseList = res && res.datas
          // that.projectsperson = Array.from(new Set(that.projectsperson.map(item => item.dictCode)));
          console.log(that.projectsperson)
          // that.courseList = uniqueBy(that.projectsperson, item => item.dictCode);
          // that.activeName = that.projectsperson[0].dictCode
        })
      // queryDictionariesDetailLike({ "currentPage": 1, "size": 100000, "parentCode": "course_classification", "type": 1 }).then((res) => {
      //   console.log(res)
      //   that.projectsperson = res && res.data && res.data.list
      //   // this.loading = false
      //   // console.log(that.projects)
      // })
    },

    getqueryCourseListtop() {
      let that = this
      that.$http
        .post('/training/getUserTraining', { page: 1, size: 100000, userId: '0e0b317e-bb93-4a85-95eb-be92814fe770' })
        .then((res) => {
          console.log(res)
          that.toptab = res && res.datas
          this.activeNameparent = that.toptab[0].trainingId
          // that.projectsperson = Array.from(new Set(that.projectsperson.map(item => item.dictCode)));
          // console.log(that.projectsperson)
          // that.courseList = uniqueBy(that.projectsperson, item => item.dictCode);
          // that.activeName = that.projectsperson[0].dictCode
        })
      // queryDictionariesDetailLike({ "currentPage": 1, "size": 100000, "parentCode": "course_classification", "type": 1 }).then((res) => {
      //   console.log(res)
      //   that.projectsperson = res && res.data && res.data.list
      //   // this.loading = false
      //   // console.log(that.projects)
      // })
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let AccessToken = storage.get('Access-Token')
    console.log(AccessToken)
    this.AccessToken = AccessToken
    this.getqueryCourseListtop()
    this.getprojectsperson()
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less" scoped>
.el-col-lg-4-8 {
  width: 20%;
}

.imglist {
  background: #fff;
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

  .homepagecontentbtn {
    background: #fff;

    .introlistRightList {
      text-align: center;
      padding: 30px;

      .title {
        color: #f09a3e;
        font-size: 20px;
      }

      .content {
        color: #7e8890;
        font-size: 15px;
        line-height: 30px;
        padding: 20px 0;
      }

      .btn {
        width: 100%;
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

.ant-pro-pages-list-projects-cardList {
  //width: 70%;
  margin: 20px auto;
}

.imgelem {
  img {
    width: 100%;
  }

  // max-width: 300px;
  // max-height: 300px;
}

li,
ul {
  list-style: none;
  text-align: center;
}

.title {
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  background: #f1f1f1;
}

.exam-item {
  display: flex;
  padding: 15px;
}

.exam-score {
  width: 10%;
}

.exam-time {
  width: 32.5%;
}

.exam-status {
  width: 25%;
}

.exam-item > div {
  padding: 0 5px;
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 14px;
  }

  .exam-item {
    font-size: 12px;
  }

  .el-dialog__body {
    padding: 0;
  }
}

.required {
  width: 60px;
  left: 5px;
  bottom: 40px;
  font-size: 0.85rem;
  transform-origin: left center;
  border-radius: 5px;
}

.jiaobiao,
.required {
  position: absolute;
  line-height: 1.5;
  color: #fff;
  text-align: center;
}

.jiaobiao {
  background-color: #01af63;
  width: 100px;
  right: -40px;
  top: -20px;
  transform: rotate(45deg);
  font-size: 1rem;
  transform-origin: left center;
}

.top-search-group {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
}

.top-search-group .el-input input {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right-width: 0;
}

.top-search-group .el-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.course-list-item {
  margin-bottom: 15px;
}

.course-list-item .el-card__body {
  padding: 0;
}

.course-list-cover {
  position: relative;
  overflow: hidden;
  border-radius: 6px 6px 0 0;
}

.course-list-cover img {
  width: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  height: 180px;
  transition: transform 0.3s;
}

.course-list-cover img:hover {
  transform: scale(1.1);
}

.course-list-title {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
}

.course-list-title h6 {
  color: #fff;
  padding: 5px;
}

.course-list-body {
  padding: 15px;
}

.course-list-desc {
  height: 44px;
  line-height: 22px;
  margin-top: 6px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.course-list-time {
  display: flex;
  margin-top: 6px;
  align-items: center;
}

.course-list-time-text {
  flex: 1;
}

.course-list-info {
  padding: 10px 5px 5px 5px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}

.course-list-info .course-list-info-list div {
  padding: 5px 0;
}

.course-info-button {
  display: flex;
  padding: 0 5px 10px 5px;
}

.course-info-button .el-button {
  width: 100%;
}

[data-v-8b0959f4] .el-dialog__body {
  padding: 0;
}

.introduction {
  line-height: 2;
  text-indent: 2rem;
  min-height: 300px;
  max-height: 700px;
  overflow-y: scroll;
}

.major-card {
  overflow: visible;
  background-color: transparent;
}

.major-card .el-card__body {
  padding: 0;
}

.article-list-right {
  min-height: 76vh;
}

.article-list-right .professional_name {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.article-list-right .professional_name span {
  margin-left: 10px;
}

.article-list-right .training-tag {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
}

.article-list-right .training-tag div {
  width: 33.33%;
  padding: 5px 0;
  text-align: center;
}

.article-list-right .training-tag div p {
  margin: 10px 0;
}

.article-list-tags {
  display: none;
}

.el-menu--horizontal > .el-menu-item {
  height: 50px;
  line-height: 50px;
}

.el-image {
  max-height: 300px;
  border-radius: 6px;
  min-width: 160px;
}

.top-search-group {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
}

.top-search-group .el-input input {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right-width: 0;
}

.top-search-group .el-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.article-list-wrapper {
  display: flex;
  padding-bottom: 15px;
}

.article-list-left {
  flex: 1;
}

.article-list-content {
  margin-top: 15px;
  max-width: 700px;
}

.article-list-user-group {
  margin-top: 15px;
}

.article-list-user-group > span {
  vertical-align: middle;
}

.article-list-footer {
  margin-top: 15px;
}

.article-list-footer .article-list-tool {
  display: inline-block;
  line-height: 22px;
  cursor: pointer;
}

.article-list-footer .el-divider--vertical {
  margin: 0 16px;
}

.el-menu-demo {
  displey: -webkit-flex;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: auto;
  list-style: none;
}

.el-menu-demo::-webkit-scrollbar {
  display: none;
}

.el-menu-demo {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.el-menu-demo li {
  display: inline-block;
}

@media screen and (max-width: 768px) {
  .article-list-left {
    top: 0 !important;
    margin-bottom: 15px;
  }

  .wdms-introduction {
    display: none;
  }

  .course-list {
    margin-top: 15px;
  }

  .article-list-right {
    min-height: auto;
    border-right: 0;
  }

  .article-list-hide {
    display: none;
  }

  .article-list-tags {
    display: block;
  }

  .el-image {
    width: 100%;
    max-height: 300px;
  }

  .article-list-tags > span {
    height: 20px;
    padding: 0 5px;
    line-height: 19px;
  }

  .article-list-left {
    margin-left: 0;
  }

  .list-article-responsive .article-list-wrapper {
    display: block;
  }

  .list-article-responsive .article-list-right {
    margin-top: 15px;
    padding-right: 0;
  }

  .list-article-responsive .article-list-right .el-image {
    max-width: 100%;
  }
}
</style>
