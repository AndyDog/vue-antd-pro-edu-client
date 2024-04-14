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
        </div>
      </div>


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
        </div>
      </div>


    </div>




  </page-header-wrapper>
</template>
  
<script>

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
    }
  },
  methods: {
    testFun() {
      this.$message.info('快速开始被点击！')
    }
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
    margin-bottom: 50px;

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
}
</style>
  