<template>
  <div style="" class="contentwarp">

    <div class="topNew">
      <div v-for="item in newslistNew">
        <div class="flex">
          <el-image class="img-responsive wp-image-7 lazyloaded" :src="item.img">
            <div slot="error" class="image-slot">
              <img width="300" height="296" src="../../../assets/266381809445946364978539786.png" alt="">
            </div>
          </el-image>
        </div>
        <div class="flex title">
          <p>{{ item.title }}</p>
        </div>
        <div class="flex subtitle">
          <p>{{ item.subtitle }}</p>
        </div>
        <div class="bottomline">
          <div class="bottomlinecenter"></div>
        </div>
        <div class="flex content">
          <div v-html="item.content">
          </div>
        </div>
      </div>
    </div>

    <div class="introList">
      <el-row :gutter="20">
        <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6" :xl="6" v-for="item in introList">
          <div class="grid-content bg-purple">

            <div class="icon">
              <i :class="item.icon"></i>
            </div>
            <div class="title">
              {{ item.title }}
            </div>
            <div class="content">
              {{ item.content }}
            </div>
          </div>
        </el-col>
      </el-row>
    </div>


    <div class="imgbg">


      <el-row :gutter="20">
        <el-col :span="6" :xs="12" :sm="12" :md="12" :lg="6" :xl="6" v-for="item in imgbgList">
          <div class="grid-content bg-purple">
            <div>
              <div class="icon">
                <i :class="item.icon"></i>
              </div>
              <div class="title">
                {{ item.title }}
              </div>
              <div class="content">
                {{ item.content }}
              </div>
            </div>

          </div>
        </el-col>
      </el-row>


    </div>

    <!-- 我们的课程 -->
    <div class="myintrolist">

      <div class="news">
        <div class="title">
          我们的课程
        </div>

        <div class="bottomline">
          <div class="bottomlinecenter"></div>
        </div>
        <div class="newcontent">

          <div class="ant-pro-pages-list-projects-cardList">
            <a-list :data-source="courseList" :grid="{ gutter: 24, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }">
              <a-list-item slot="renderItem" slot-scope="item">
                <a-card class="ant-pro-pages-list-projects-card" hoverable>
                  <img slot="cover" :src="item.icon" :alt="item.title" />
                  <a-card-meta :title="item.title">
                    <template slot="description">
                      <div>
                        {{ item.subtitle }}
                      </div>
                      <ellipsis :length="50">{{ item.content }}</ellipsis>
                    </template>
                  </a-card-meta>
                  <div class="cardItemContent">

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




  </div>
</template>

<script>
export default {
  name: 'BaseForm',
  data() {
    return {
      form: this.$form.createForm(this),
      newsList: [
        {
          title: '国家重点实验室第八届指导委员会成员名单',
          content: '实验室主任蒋华良研究员汇报了2020年度重点实验室工作，包括年度工作概况、各学科重要进展',
        },
        {
          title: '国家重点实验室第八届指导委员会成员名单',
          content: '实验室主任蒋华良研究员汇报了2020年度重点实验室工作，包括年度工作概况、各学科重要进展',
        },
        {
          title: '国家重点实验室第八届指导委员会成员名单',
          content: '实验室主任蒋华良研究员汇报了2020年度重点实验室工作，包括年度工作概况、各学科重要进展',
        },
      ],
      newslistNew: [
        {
          title: '国家应急医学研究中心',
          img: "http://106.54.167.222:39900/wp-content/uploads/2024/04/uyQhovioerqshrGp_yixuezhongxin-400x250.jpg",
          subimg: "",
          subtitle: '应急医学致力于在各种突发情况下保护人类生命和健康，通过紧急救援、疾病控制、资源管理等措施，尽可能地减少伤亡和疾病传播的风险。',
          content: `
          <p>应急总医院是应急管理部直属三级医院。国家应急医学研究中心是经应急管理部和国家卫健委批准，依托应急总医院组建，集医疗、教学、科研、救援、转化于一体的国家级平台，承担应急医学救援、应急医疗资源储备、国际医疗救援、应急医学研究和人才培养等职责。</p>
          <p>国家应急医学研究中心培训工作围绕应急医学内容设计各类培训课程，包括但不限于：应急急救员培训、消防救援队伍卫勤技能培训、校园应急安全培训、家庭急救等。</p>`
        },
        {
          title: '中国教育科学研究院培训中心',
          img: "http://106.54.167.222:39900/wp-content/uploads/2024/04/Bh2LJwiBj6qcN2Xj_jiaokeyuan-400x249.jpg",
          subtitle: '“求真、笃行、弘道、创新”',
          content: `
          <p>中国教育科学研究院培训中心成立于2000年，是中国教育科学研究院全资下属事业单位，是集教育培训、课题研究、产品研发、咨询服务等于一体的综合性教育服务机构。</p>
          <p>自成立以来，中国教育科学研究院培训中心坚持正确的政治导向和文化方向，坚持教育性和公益性原则，立足于贯彻落实党的教育方针、推动教育高质量发展、建设高素质专业化教育事业人才队伍，整合国内外优质教育资源，面向教育行政人员，教育科研人员，各级各类学校（幼儿园）的校长（园长）、教师，家长等群体，开展教育理论、学科教学、学校管理、家庭教育等方面的专业化培训，全力服务学员能力提升与职业发展，并逐渐形成了特色突显的自主培训、委托培训、合作培训三种培训方式。</p>
          <p>教育信息化、融合发展的新时代，更以“体验”为依归，更以“数据”为基础，更以“联接”为要义，更以“开放”为策略，更以“智能”为目标，这对培训工作提出了新挑战和新思考。培训中心将一如既往、继续努力，为广大教育工作者和家长提供更加精准、更有深度、更具实效的培训。</p>
          <p>目前培训中心新推出的培训项目有：家庭教育指导师资能力提升、学校急救教育师资专业培训、体育教师体能教学与训练、幼儿园教师STEM教育专业能力提升，等等。</p>
          
          `
        },
      ],
      introList: [
        {
          title: "急救技能培训",
          icon: "el-icon-mobile-phone",
          content: "包括心肺复苏（CPR）、人工呼吸、止血、骨折固定等基本急救技能的培训。"
        },
        {
          title: "危险源识别与风险评估",
          icon: "el-icon-notebook-2",
          content: "帮助参与者识别潜在的危险源，并进行风险评估，以制定有效的防范和应对措施。"
        },
        {
          title: "应急预案制定与演练",
          icon: "el-icon-user",
          content: "指导制定应急预案，并组织实际演练，检验和完善应急预案的可行性和有效性。"
        },
        {
          title: "沟通与协作",
          icon: "el-icon-chat-dot-round",
          content: "培训沟通技巧和团队协作能力，以有效应对突发事件中的各种挑战。"
        }
      ],
      imgbgList: [
        {
          title: "8682",
          icon: "el-icon-mobile-phone",
          content: "学员"
        },
        {
          title: "3589",
          icon: "el-icon-notebook-2",
          content: "课程"
        },
        {
          title: "754",
          icon: "el-icon-user",
          content: "教师"
        },
        {
          title: "38",
          icon: "el-icon-chat-dot-round",
          content: "位置"
        }
      ],
      courseList: [
        {
          title: "基础急救课程",
          subtitle: "Engineering & Technology",
          icon: require('@/assets/jchu.jpg'),
          content: "基础急救课程旨在向普通公众和一般工作人员传授基本的急救技能和知识，使他们能够在紧急情况下提供有效的急救服务。该课程涵盖了心肺复苏（CPR）、止血、骨折固定、意识评估等基本急救技能，以及应急处置流程和紧急情况的应对策略。 通过参加基础急救课程，学员可以掌握应急救援的基本技能，提高自己的应急能力。"
        },
        {
          title: "公共场所急救",
          subtitle: "Arts & Humanities",
          icon: require('@/assets/ggcs.jpg'),
          content: "公共场所急救培训通常由专业的急救培训机构或医疗机构提供，针对不同类型的公共场所（如商场、餐厅、体育场馆、地铁站等）的工作人员进行定制化的培训。该课程旨在向公共场所工作人员传授基本的急救技能和知识，使他们能够在紧急情况下迅速、有效地应对，保障员工和访客的生命安全。 通过参加基础急救课程，学员可以掌握应急救援的基本技能，提高自己的应急能力。"
        },
        {
          title: "心里急救课程",
          subtitle: "Business & Management",
          icon: require('@/assets/xinli.jpg'),
          content: "心理急救课程旨在向医护人员、社会工作者、教育工作者以及一般公众传授基本的心理援助技能和知识，使他们能够在紧急情况下提供有效的心理支持，帮助受到心理危机影响的个人。该课程强调对个人情绪和心理状态的敏感性，以及在危机情况下如何有效地应对和处理。 通过参加基础急救课程，学员可以掌握应急救援的基本技能，提高自己的应急能力。"
        }
      ]
    }
  },
  methods: {
    // handler
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
  },
}
</script>
<style scoped>
.contentwarp {
  /* padding: 50px 30px; */
  background: #f7f5f4;
  margin-bottom: 80px;
}

.topNew {
  background: #fff;
  padding: 50px 30px;

  .flex {
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 34px;
    font-weight: 600;
    color: #333c4e;
  }

  .subtitle {
    font-size: 20px;
    color: #7E8890;
  }

  .content {
    font-size: 15px;
    color: #7E8890;
  }

  div {
    >div {
      margin-bottom: 20px;
    }

  }

}

.introList {
  padding: 50px 30px;
  margin: 30px 0;

  .grid-content {
    text-align: center;

    .title {
      font-size: 24px;
      font-weight: 600;
      margin: 15px 0;

    }

    .content {
      font-size: 15px;
      color: #7E8890;
    }

    i {
      font-size: 50px;
      color: #0ea0d7;
    }


    &:hover {
      .title {
        color: #f09a3e
      }

      i {
        color: #f09a3e;
        transform: translateX(20px);
        /* 在悬停时水平向右移动10像素 */
      }

    }
  }
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

.imgbg {
  background-image: url("http://106.54.167.222:39900/wp-content/uploads/2017/10/university_page_title_bar_op_bg.jpg");
  width: 100%;
  /* height: 500px; */
  background-size: cover;
  padding: 110px 30px;

  .grid-content {
    background: #FFFFFF1F;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transform: scale(1);
    /* 给图片添加过渡效果 */
    transition: all 1s;
    margin-bottom: 20px;

    &:hover {
      /* 修改放大比例 */
      transform: scale(1.1);
    }

    .icon {
      color: #f09a3e;
      font-size: 50px;
    }

    .title {
      color: #f09a3e;
      font-size: 50px;
    }

    .content {
      color: #FFF;
    }
  }
}



.myintrolist {
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
      color: #7E8890;
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

}</style>
