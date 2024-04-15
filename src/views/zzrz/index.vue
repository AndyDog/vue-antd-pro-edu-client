<template>
  <page-header-wrapper :title="false">

    <div class="zzrz">

      <div class="imgcontent flex">
        <div class="">

          <div class="flex title">
            <p>1. 参加培训</p>
          </div>
          <div class="flex subtitle">
            <p>参与者需要参加由我们的急救培训课程</p>
          </div>
          <div class="bottomline">
            <div class="bottomlinecenter"></div>
          </div>
          <div class="flex content">
            <div>
              这些课程通常涵盖心肺复苏（CPR）、人工呼吸、止血、骨折固定等基本急救技能的培训，以及应急处置流程、传染病防控等方面的知识培训。 </div>
          </div>

          <div class="flex">
            <el-button type="warning">APP下载</el-button>
          </div>
          <div class="flex">
            <!-- <img style="width: 100%;" src="@/assets/delive.png" alt=""> -->
          </div>

        </div>
      </div>

      <div class="flex">
        <img style="width: 100%;margin-bottom: 100px;" src="@/assets/delive.png" alt="">
      </div>


      <div class="imgcontent flex">
        <div class="">
          <div class="flex">
            <img src="@/assets/step1.png" alt="">
          </div>
          <div class="flex title">
            <p>2. 通过考核</p>
          </div>
          <div class="flex subtitle">
            <p>在完成培训课程后，参与者需要通过相关的考核评估</p>
          </div>
          <div class="bottomline">
            <div class="bottomlinecenter"></div>
          </div>
          <div class="flex content">
            <div>
              以证明他们掌握了必要的急救技能和知识。考核通常包括理论知识测试和实际操作技能考核。 </div>
          </div>


          <div class="flex">
            <el-button type="warning">Review Process</el-button>
          </div>

        </div>
      </div>
      <div class="flex">
        <img style="width: 100%;margin-bottom: 100px;" src="@/assets/arrbg.jpg" alt="">
      </div>
      <!-- <div class="flex">
        <img style="width: 100%;" src="@/assets/delive.png" alt="">
      </div> -->

      <div class="imgcontent flex">
        <div class="">
          <div class="flex">
            <img src="@/assets/step2.png" alt="">
          </div>
          <div class="flex title">
            <p>3. 获得认证证书</p>
          </div>
          <div class="flex subtitle">
            <p>资质取得</p>
          </div>
          <div class="bottomline">
            <div class="bottomlinecenter"></div>
          </div>
          <div class="flex content">
            <div>
              通过考核后，参与者将获得急救师认证证书，证明他们具备了相应的急救能力和资格。这些认证证书通常由专业机构或组织颁发，并具有一定的权威性和公信力。 </div>
          </div>

          <div class="flex">
            <el-button type="warning">报名</el-button>
          </div>


        </div>
      </div>



      <div class="joinus">

        <div>
          <h3 style="text-align: center; font-size: 30px;color: #ffffff;" class="fusion-responsive-typography-calculated">
            加入&nbsp;<span style="color: #f09a3e;">500,000 名</span> 急救师的队伍</h3>
        </div>

        <p style="text-align:center;color: #7e8890;font-size: 20px;">
          持有急救师认证的人员通常能够在医疗机构、急救中心、学校、企业等场所担任急救工作，为受伤或生病的人员提供及时有效的救助。</p>




        <div class="bottomform">

          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
              <div class="input">
                <el-input v-model="input" placeholder="用户名"></el-input>
              </div>

            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
              <div class="input">
                <el-input v-model="input" placeholder="电子邮件Email"></el-input>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
              <div class="input">
                <el-input v-model="input" placeholder="Subject"></el-input>
              </div>
            </el-col>
          </el-row>


        </div>





        <div class="bottomform">

          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <div class="input">
                <el-select v-model="value" placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>

            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <div class="input">
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="年龄"></el-input-number>
              </div>
            </el-col>

          </el-row>





        </div>

        <div>

          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="you message" v-model="textarea2">
          </el-input>
        </div>

        <div class="flex">
          <el-button style="width: 200px;margin-top: 20px;" type="warning">提交</el-button>
        </div>


      </div>



      <!-- 学员评价 -->
      <div>


        <!-- <div class=" imgcontent xueyuanpj flex">
          <div class="">

            <div class="flex title">
              <p>学员评价</p>
            </div>

            <div class="bottomline">
              <div class="bottomlinecenter"></div>
            </div>
          </div>
        </div> -->



        <div class="teacher">
          <div>
            <div class="flex title">
              <p>学员评价</p>
            </div>
            <div class="bottomline">
              <div class="bottomlinecenter"></div>
            </div>
          </div>


          <div class="cardList">
            <el-row :gutter="16">
              <el-col class="gutter-row" v-for="item in projectsperson.slice(0, 3)" :xs="12" :sm="12" :md="8" :lg="8"
                :xl="12">
                <div data-v-373a1af0="" class="expert-box border-line">
                  <div data-v-373a1af0="" class="">
                    <!-- <img data-v-373a1af0="" :src="item.avatar" alt="" class="expert-img" /> -->
                    <el-image :src="item.avatar" style="width: 150px;height:150px;" class="expert-img">
                      <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                      </div>
                    </el-image>
                  </div>
                  <div data-v-373a1af0="" class="">

                    <p data-v-373a1af0="" class="expert-intro" :title="item.introduction">

                      {{ item.introduction }}
                      <!-- 
                  <el-tooltip class="item" effect="dark" :content="item.introduction" placement="top-start">
                    {{ item.introduction }}
                  </el-tooltip> -->
                    </p>
                  </div>

                  <p data-v-373a1af0="" class="expert-name">
                    {{ item.name }},
                    <span style="color: #f09a3e;">
                      {{ item.role }}
                    </span>

                  </p>


                </div>
              </el-col>
            </el-row>
          </div>
        </div>









      </div>




      <!-- 跑马灯 -->
      <div class="carousel">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div v-for="item in courseListcarousel" :key="item.id" class="swiper-slide"
              :style="`background-image:url(${item.icon})`">
              <!-- <h3>{{ item.title }}</h3>
                      <el-button>立即办理</el-button> -->
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>



      </div>



    </div>




  </page-header-wrapper>
</template>
  
<script>
import Swiper from 'swiper'; // 注意引入的是Swiper
import 'swiper/css/swiper.min.css' // 注意这里的引入
const dataSource = []
dataSource.push({})
for (let i = 0; i < 11; i++) {
  dataSource.push({
    id: i,
    title: 'Alipay',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    content: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
  })
}

export default {
  name: 'CardList',
  data() {
    this.tabList = [
      { key: 'tab1', tab: '快速开始' },
      { key: 'tab2', tab: '产品简介' },
      { key: 'tab3', tab: '产品文档' }
    ]
    return {
      tabActiveKey: 'tab1',

      extraImage: 'https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png',
      dataSource,
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
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      projectsperson: [
        {
          avatar: require('@/assets/hushi-300x287.jpg'),
          name: "李XX",
          role: "护士",
          introduction: '“作为一名医生，我对这个课程的专业水平感到非常满意。课程内容涵盖了各种常见急救情况的处理方法，从基础的心肺复苏到更复杂的伤口处理和骨折固定等技能，让我受益匪浅。”'
        },
        {
          avatar: require('@/assets/laoshi-288x300.jpg'),
          name: "张XX",
          role: "医生",
          introduction: '“作为一名医生，我对这个课程“在课程结束时，我可以明显地看到大家的学习成果。我们掌握了丰富的急救知识和技能，能够熟练处理各种紧急情况，提高了自己的应急能力和水平。”的专业水平感到非常满意。课程内容涵盖了各种常见急救情况的处理方法，从基础的心肺复苏到更复杂的伤口处理和骨折固定等技能，让我受益匪浅。”'
        }, {
          avatar: require('@/assets/xuesheng-300x297.jpg'),
          name: "李XX",
          role: "大学生",
          introduction: '“我非常喜欢课程的内容安排，涵盖了各种急救技能和知识，从基础的心肺复苏到更复杂的伤口处理和骨折固定等，让我受益匪浅。”'
        }
      ],
      courseListcarousel: [
        {
          title: "保障生命安全",
          icon: require('@/assets/jchu.jpg'),
        },
        {
          title: "传播应急意识",
          icon: require('@/assets/ggcs.jpg'),
        },
        {
          title: "保障公共安全",
          icon: require('@/assets/xinli.jpg'),
        },
        {
          title: "保障公共安全",
          icon: require('@/assets/course_sports_portfolio_feat.jpg'),
        },
        {
          title: "保障公共安全",
          icon: require('@/assets/course_biology_portfolio_feat-1.jpg'),
        }
      ],
    }
  },
  methods: {
    getSwiper() {
      this.swiper = new Swiper(".swiper-container", {
        loop: true, // 无缝
        autoplay: false,
        paginationClickable: true,
        slidesPerView: 5, // 一组三个
        spaceBetween: 10, // 间隔
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // 窗口变化,重新init,针对F11全屏和放大缩小,必须加
        observer: true,
        observeParents: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true, // 分页器可以点击
        },
      })
    },
    testFun() {
      this.$message.info('快速开始被点击！')
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
  },
  mounted() {
    this.getSwiper()
  }
}
</script>
  
<style lang="less" scoped>
// @import "~@/components/index.less";


.zzrz {

  .imgcontent {
    // width: 100%;
    // height: 900px;
    // background: url(@/assets/blog_post_header_top_bg_3.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    // margin: 30px;
    align-items: center;
    display: flex;
    justify-content: center;
    color: #FFF;
    // margin-bottom: 50px;

    i {
      font-size: 50px;
    }

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

    .bottomline {
      margin-bottom: 30px;
      text-align: center;
      display: flex;
      justify-content: center;

      .bottomlinecenter {
        height: 1px;
        width: 200px;
        background: #f09a3e;
      }
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

  .imgcontent:first-child {
    background: #FFF;
  }

  .flex {
    text-align: center;
    display: flex;
    justify-content: center;
  }


  .joinus {
    background: #333c4e;
    padding: 70px 30px 90px;
    height: 600px;
    margin-bottom: 100px;

    .bottomform {
      .input {
        margin-bottom: 20px;
      }
    }
  }

  .xueyuanpj {
    align-items: center;
    display: flex;
    justify-content: center;
    // background: #333c4e;
  }

  .xueyuanpj:first-child {
    background: #f7f5f4;
  }


  .teacher {
    margin: 30px;

    .title {
      font-size: 34px;
      font-weight: 600;
      align-items: center;
      display: flex;
      justify-content: center;
    }

    .subtitle {
      font-size: 20px;
      // color: #7E8890;
    }

    .bottomline {
      margin-bottom: 30px;
      text-align: center;
      display: flex;
      justify-content: center;

      .bottomlinecenter {
        height: 1px;
        width: 200px;
        background: #f09a3e;
      }
    }

    .expert-box {
      background: #FFF;
      text-align: center;
      padding: 45px 30px;
      margin-bottom: 20px;
      border-radius: 8px;

      .el-image {
        border-radius: 50%;
      }

      .expert-name {
        font-size: 18px;
        color: #7E8890;
      }

      .expert-intro {
        font-size: 14px;
        color: #7E8890;
        line-height: 30px;
        // overflow: hidden;
        // text-overflow: ellipsis;
        // 只要超过宽度就换行，不论中文还是英文
        // word-break: break-all;
        //最多展示两行
        // display: -webkit-box;
        // -webkit-box-orient: vertical;
        // -webkit-line-clamp: 2;
        //根据样式设置
        // line-height: 1.2em;
        // max-height: 2.4em;

      }
    }




  }


  .carousel {
    margin: 30px 60px;
    // display: flex;
    // justify-content: center;
    // width: 90%;
    // margin: 20px 60px;

    /deep/.el-carousel__container {
      text-align: center;
    }


    // width: 1200px;
    // margin: 0 auto;
    padding: 70px 0;

    .swiper-slide {
      position: relative;
      height: 160px;
      width: 20%;
      padding: 36px 22px;
      background-repeat: no-repeat;
      background-size: cover;
      background-color: #F7F8FA;
      cursor: pointer;

      .el-button {
        z-index: 2;
      }
    }


  }



}
</style>
  