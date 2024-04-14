<template>
  <page-header-wrapper :title="false">
    <!-- PageHeader 第二种使用方式 (v-slot) -->
    <template v-slot:content>
    </template>


    <div class="content">

      <div class="title">
        应急培训的意义
      </div>

      <div class="ant-pro-pages-list-projects-cardList">
        <a-list :data-source="courseList" :grid="{ gutter: 24, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }">
          <a-list-item slot="renderItem" slot-scope="item">
            <div class="listelem">


              <div class="icon">
                <i class="el-icon-connection"></i>

              </div>

              <div class="title">
                {{ item.title }}
              </div>
              <div class="elemcontent">
                {{ item.content }}
              </div>

              <div class="btn">
                <el-button type="warning">了解更多</el-button>
              </div>
            </div>

          </a-list-item>
        </a-list>
      </div>
    </div>


    <div class="imgcontent flex">
      <div class="">
        <div class="flex">
          <i class="el-icon-picture-outline-round"></i>
        </div>
        <div class="flex title">
          <p>课程设置</p>
        </div>
        <div class="flex subtitle">
          <p>提供广泛的高质量教学和课外活动。</p>
        </div>
        <div class="bottomline">
          <div class="bottomlinecenter"></div>
        </div>
        <div class="flex content">
          <div>
            希望通过社会急救课程让社会各界组织和个人在面对突发事件和紧急情况时，通过自愿参与和积极行动，为受伤、生病或遇险人员提供急救服务和支持的活动。
          </div>
        </div>
      </div>
    </div>

    <!-- 教师团队 -->

    <div class="teacher">
      <div>
        <div class="flex title">
          <p>教师团队</p>
        </div>
        <div class="bottomline">
          <div class="bottomlinecenter"></div>
        </div>
      </div>


      <div class="cardList">
        <el-row :gutter="16">
          <el-col class="gutter-row" v-for="item in projectsperson.slice(0, 4)" :xs="24" :sm="24" :md="12" :lg="12"
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
                <p data-v-373a1af0="" class="expert-name">
                  {{ item.realname }}
                </p>
                <p data-v-373a1af0="" class="expert-intro" :title="item.introduction">

                  {{ item.introduction }}
                  <!-- 
                  <el-tooltip class="item" effect="dark" :content="item.introduction" placement="top-start">
                    {{ item.introduction }}
                  </el-tooltip> -->
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>



    <!-- 跑马灯 -->
    <div class="carousel">
      <!-- <el-carousel :interval="4000" type="card" height="300px" :autoplay="false">
        <el-carousel-item v-for="item in courseListcarousel" :key="item">
          <el-image :src="item.icon" fit="cover">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-carousel-item>
      </el-carousel> -->

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


    <!-- 举办学校急救教育师资专业培训 -->
    <div class="lastmodel">

      <div class="">
        <div class="flex">
          <el-image :src="titlebg" fit="contain" style="width: 100px;height:100px;" class="expert-img">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <div class="flex title">
          <p>举办学校急救教育师资专业培训</p>
        </div>
        <div class="flex subtitle">
          <p>
            课程按照“理论与实践相结合”的原则设计，以急救教育理论为基础，聚焦急救教育实践中的具体问题，全面提升教师的急救实操能力。培训课程包括“急救教育政策法规”“急救教育理论知识”“急救实操演练”“急救设施设备操作”四个学习模块。
          </p>
        </div>
        <div class="bottomline">
          <div class="bottomlinecenter"></div>
        </div>
        <div class="flex content">
          <div>
            为深入推动《健康中国行动（2019—2030年）》，贯彻落实教育部等五部门《关于全面加强和改进新时代学校卫生与健康教育工作的意见》、教育部办公厅《关于开展全国学校急救教育试点工作的通知》《关于实施全国健康学校建设计划的通知》精神，推进全国学校急救教育工作优质均衡发展，增强学校教职工的急救意识，提高教职工的急救技能及应对突发事件、处置意外伤害的能力，守护师生生命健康与安全，同时为社会培养乐于施救、敢于施救、善于施救的人员，中国教育科学研究院培训中心会同中国教育科学研究院体育美育教育研究所，依照《教育部办公厅关于做好首批全国学校急救教育试点建设和管理工作的通知》（教体艺厅函〔2022〕2号）要求，共同开展学校急救教育师资专业培训活动，现将有关事项通知如下。
          </div>
        </div>
      </div>



    </div>



  </page-header-wrapper>
</template>

<script>
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Swiper from 'swiper'; // 注意引入的是Swiper
import 'swiper/css/swiper.min.css' // 注意这里的引入
export default {
  name: 'StepForm',
  components: {
    Step1,
    Step2,
    Step3
  },
  data() {
    return {
      currentTab: 0,
      // form
      form: null,
      bg: require('@/assets/blog_post_header_top_bg_3.jpg'),
      titlebg: require('@/assets/page-logo-1.png'),
      courseList: [
        {
          title: "保障生命安全",
          subtitle: "Engineering & Technology",
          icon: require('@/assets/jchu.jpg'),
          content: "培训的核心目标是保障生命安全。通过提供急救知识和技能培训，帮助参与者及时有效地救助受伤或生病的人员，最大限度地减少伤亡。 通过参加基础急救课程，学员可以掌握应急救援的基本技能，提高自己的应急能力。"
        },
        {
          title: "传播应急意识",
          subtitle: "Arts & Humanities",
          icon: require('@/assets/ggcs.jpg'),
          content: "培训有助于传播应急意识，提高社会公众对于应急情况的认识和重视程度，培养人们在面对危险时的警惕性和应对能力。 通过参加基础急救课程，学员可以掌握应急救援的基本技能，提高自己的应急能力。"
        },
        {
          title: "保障公共安全",
          subtitle: "Business & Management",
          icon: require('@/assets/xinli.jpg'),
          content: "通过培训社会各界人员的应急能力，可以更好地保障公共安全，提高社会整体的应急响应水平，减少灾害和事故带来的损失。 通过参加基础急救课程，学员可以掌握应急救援的基本技能，提高自己的应急能力。"
        }
      ],
      projectsperson: [],

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

    getprojectsperson() {
      let that = this
      this.$http.get('http://106.14.124.163:8090/api/front/expertPage?page=1&limit=999').then((res) => {
        console.log(res)
        that.projectsperson = res && res.data && res.data.list
        // this.loading = false
        // console.log(that.projects)
      })
    },
    // handler
    nextStep() {
      if (this.currentTab < 2) {
        this.currentTab += 1
      }
    },
    prevStep() {
      if (this.currentTab > 0) {
        this.currentTab -= 1
      }
    },
    finish() {
      this.currentTab = 0
    },
    gobook() {
      this.$router.push('/trainingDetail/3333')
    }
  },
  mounted() {
    this.getprojectsperson()
    this.getSwiper()
  }
}
</script>

<style lang="less" scoped>
@import '../base.less';

.steps {
  max-width: 750px;
  margin: 16px auto;
}


.content {
  max-width: 80%;
  margin: 16px auto;
  text-align: center;

  .title {
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    // padding: 90px 30px 90px 30px;
    color: #333C4E;
    margin: 20px 0;
  }

  .elemcontent {
    font-size: 15px;
    color: #7E8890;
    margin: 30px 0;
  }

  .listelem {
    background: #FFF;
    // max-width: 200px;
    padding: 35px;
    min-height: 400px;


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

  .btn {
    width: 100%;

    .el-button {
      width: 100%;
    }
  }

  .icon {
    i {
      font-size: 50px;
    }
  }





}

.imgcontent {
  // width: 100%;
  height: 900px;
  background: url(@/assets/blog_post_header_top_bg_3.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  margin: 30px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #FFF;

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
    // color: #333c4e;
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

  .content {
    font-size: 15px;
    // color: #7E8890;
  }

  div {
    >div {
      margin-bottom: 20px;
    }

  }

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
      overflow: hidden;
      text-overflow: ellipsis;
      // 只要超过宽度就换行，不论中文还是英文
      word-break: break-all;
      //最多展示两行
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      //根据样式设置
      line-height: 1.2em;
      max-height: 2.4em;

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


.lastmodel {
  // width: 100%;
  // height: 900px;
  // background: url(@/assets/blog_post_header_top_bg_3.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #FFF;
  width: 800px;

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
</style>
