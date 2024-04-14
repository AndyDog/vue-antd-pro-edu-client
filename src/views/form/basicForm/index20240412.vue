<template>
  <div style="width: 70%; margin: 0 auto; margin-bottom: 100px" class="contentwarp">
    <div class="container">
      <div class="content">
        <div class="box">
          <h2>国家应急医学研究中心</h2>
          <p>
            应急总医院是应急管理部直属三级医院。国家应急医学研究中心是经应急管理部和国家卫健委批准，依托应急总医院组建，集医疗、教学、科研、救援、转化于一体的国家级平台，承担应急医学救援、应急医疗资源储备、国际医疗救援、应急医学研究和人才培养等职责。
            国家应急医学研究中心培训工作围绕应急医学内容设计各类培训课程，包括但不限于应急急救员培训、消防救援队伍卫勤技能培训、校园应急安全培训、家庭急救等。
          </p>
        </div>
        <div class="box">
          <img src="http://vod.jj-edu.cn/uyQhovioerqshrGp_yixuezhongxin.jpg" alt="图片" />
        </div>
      </div>
    </div>
    <div class="content">
      <div class="box">
        <img src="http://vod.jj-edu.cn/Bh2LJwiBj6qcN2Xj_jiaokeyuan.jpg" alt="图片" />
      </div>
      <div class="box">
        <h2>中国教育科学研究院培训中心</h2>
        <p>
          中国教育科学研究院培训中心成立于2000年，是中国教育科学研究院全资下属事业单位，是集教育培训、课题研究、产品研发、咨询服务等于一体的综合性教育服务机构。
          自成立以来，中国教育科学研究院培训中心坚持正确的政治导向和文化方向，坚持教育性和公益性原则，立足于贯彻落实党的教育方针、推动教育高质量发展、建设高素质专业化教育事业人才队伍，整合国内外优质教育资源，面向教育行政人员，教育科研人员，各级各类学校（幼儿园）的校长（园长）、教师，家长等群体，开展教育理论、学科教学、学校管理、家庭教育等方面的专业化培训，全力服务学员能力提升与职业发展，并逐渐形成了特色突显的自主培训、委托培训、合作培训三种培训方式。
          教育信息化、融合发展的新时代，更以“体验”为依归，更以“数据”为基础，更以“联接”为要义，更以“开放”为策略，更以“智能”为目标，这对培训工作提出了新挑战和新思考。培训中心将一如既往、继续努力，为广大教育工作者和家长提供更加精准、更有深度、更具实效的培训。
          目前培训中心新推出的培训项目有：家庭教育指导师资能力提升、学校急救教育师资专业培训、体育教师体能教学与训练、幼儿园教师STEM教育专业能力提升，等等。
        </p>
      </div>
    </div>
    <div class="full-width-box">
      <img src="http://118.178.233.104:8080/test/img/introt2.278a5400.jpg" alt="图片" />
    </div>

    <div class="newcenter">
      <div style="margin: 30px auto; display: flex; justify-content: center; align-items: center; height: 200px">
        <div style="font-size: 30px; font-weight: 600">新闻中心</div>
        <br />
      </div>
      <div style="display: flex">
        <div style="border: 1px solid #ddd; padding: 10px; margin-right: 6px">
          <img src="../../../assets/news.jpg" alt="" />
          <div style="font-weight: 600; font-size: 16px; margin-bottom: 10px; margin-top: 10px">
            国家重点实验室第八届指导委员会成员名单
          </div>
          <div style="font-size: 12px">
            实验室主任蒋华良研究员汇报了2020年度重点实验室工作，包括年度工作概况、各学科重要进展
          </div>
        </div>
        <div class="newlist">
          <div class="newitem" v-for="item in newsList" :key="item.id">
            <div style="width: 125px; text-align: center; border-right: 1px solid #ddd; margin-right: 10px">
              <div style="font-size: 30px">22</div>
              <div>2020-12</div>
            </div>

            <div class="newtitle">
              <div style="font-weight: 600; font-size: 18px">{{ item.title }}</div>
              <div>{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div data-v-49c7ca68="" class="default-main intro-main" style="display:none">
      <div data-v-49c7ca68="" class="bg-white-1"><h3 data-v-49c7ca68="" class="intro-head">中心简介</h3><div data-v-49c7ca68="" class="intro-time"><span data-v-49c7ca68=""> 发布时间：2021-08-25 21:33:33 </span></div><div data-v-49c7ca68="" class="el-divider el-divider--horizontal"></div><div data-v-49c7ca68="" class="intro-content"><p data-v-49c7ca68="" class="wdms_html"><p style="text-align: center;"><strong><span style="font-size: 14pt;">中国教育科学研究院培训中心</span></strong></p>
<p style="text-indent: 2em;">&nbsp;</p>
<p style="text-indent: 2em;">中国教育科学研究院培训中心成立于2000年，是中国教育科学研究院全资下属事业单位，是集教育培训、课题研究、产品研发、咨询服务等于一体的综合性教育服务机构。</p>
<p style="text-indent: 2em;">&nbsp;</p>
<p style="text-indent: 2em;">自成立以来，中国教育科学研究院培训中心坚持正确的政治导向和文化方向，坚持教育性和公益性原则，立足于贯彻落实党的教育方针、推动教育高质量发展、建设高素质专业化教育事业人才队伍，整合国内外优质教育资源，面向教育行政人员，教育科研人员，各级各类学校（幼儿园）的校长（园长）、教师，家长等群体，开展教育理论、学科教学、学校管理、家庭教育等方面的专业化培训，全力服务学员能力提升与职业发展，并逐渐形成了特色突显的自主培训、委托培训、合作培训三种培训方式。</p>
<p style="text-indent: 2em;">&nbsp;</p>
<p style="text-indent: 2em;">教育信息化、融合发展的新时代，更以“体验”为依归，更以“数据”为基础，更以“联接”为要义，更以“开放”为策略，更以“智能”为目标，这对培训工作提出了新挑战和新思考。培训中心将一如既往、继续努力，为广大教育工作者和家长提供更加精准、更有深度、更具实效的培训。</p>
<p style="text-indent: 2em;">&nbsp;</p>
<p style="text-indent: 2em;">目前培训中心新推出的培训项目有：家庭教育指导师资能力提升、学校急救教育师资专业培训、体育教师体能教学与训练、幼儿园教师STEM教育专业能力提升，等等。</p>
<p style="text-indent: 2em;">&nbsp;</p>
<p style="text-align: center;"><img src="http://vod.jj-edu.cn/Bh2LJwiBj6qcN2Xj_jiaokeyuan.jpg" alt="" width="580" height="362"></p>
<p style="text-align: center;">&nbsp;</p>
<p style="text-align: center;">&nbsp;</p>
<p style="text-align: center;">&nbsp;</p>
<p style="text-align: center;"><span style="font-size: 14pt;"><strong>国家应急医学研究中心</strong></span></p>
<p style="text-align: center;">&nbsp;</p>
<p style="text-align: left; text-indent: 2em;">应急总医院是应急管理部直属三级医院。国家应急医学研究中心是经应急管理部和国家卫健委批准，依托应急总医院组建，集医疗、教学、科研、救援、转化于一体的国家级平台，承担应急医学救援、应急医疗资源储备、国际医疗救援、应急医学研究和人才培养等职责。</p>
<p style="text-align: left; text-indent: 2em;">&nbsp;</p>
<p style="text-align: left; text-indent: 2em;">国家应急医学研究中心培训工作围绕应急医学内容设计各类培训课程，包括但不限于：应急急救员培训、消防救援队伍卫勤技能培训、校园应急安全培训、家庭急救等。</p>
<p style="text-align: left; text-indent: 2em;">&nbsp;</p>
<p style="text-align: center;"><img src="http://vod.jj-edu.cn/uyQhovioerqshrGp_yixuezhongxin.jpg" alt="" width="580" height="362"></p></p><div data-v-49c7ca68="" style="display: none;"><div data-v-49c7ca68="" class="el-empty"><div class="el-empty__image"><svg viewBox="0 0 79 86" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="linearGradient-1-37" x1="38.8503086%" y1="0%" x2="61.1496914%" y2="100%"><stop stop-color="#FCFCFD" offset="0%"></stop><stop stop-color="#EEEFF3" offset="100%"></stop></linearGradient><linearGradient id="linearGradient-2-37" x1="0%" y1="9.5%" x2="100%" y2="90.5%"><stop stop-color="#FCFCFD" offset="0%"></stop><stop stop-color="#E9EBEF" offset="100%"></stop></linearGradient><rect id="path-3-37" x="0" y="0" width="17" height="36"></rect></defs><g id="Illustrations" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="B-type" transform="translate(-1268.000000, -535.000000)"><g id="Group-2" transform="translate(1268.000000, 535.000000)"><path id="Oval-Copy-2" d="M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z" fill="#F7F8FC"></path><polygon id="Rectangle-Copy-14" fill="#E5E7E9" transform="translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) " points="13 58 53 58 42 45 2 45"></polygon><g id="Group-Copy" transform="translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"><polygon id="Rectangle-Copy-10" fill="#E5E7E9" transform="translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) " points="2.84078316e-14 3 18 3 23 7 5 7"></polygon><polygon id="Rectangle-Copy-11" fill="#EDEEF2" points="-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"></polygon><rect id="Rectangle-Copy-12" fill="url(#linearGradient-1-37)" transform="translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) " x="38" y="7" width="17" height="36"></rect><polygon id="Rectangle-Copy-13" fill="#F8F9FB" transform="translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) " points="24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"></polygon></g><rect id="Rectangle-Copy-15" fill="url(#linearGradient-2-37)" x="13" y="45" width="40" height="36"></rect><g id="Rectangle-Copy-17" transform="translate(53.000000, 45.000000)"><mask id="mask-4-37" fill="white"><use xlink:href="#path-3-37"></use></mask><use id="Mask" fill="#E0E3E9" transform="translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) " xlink:href="#path-3-37"></use><polygon id="Rectangle-Copy" fill="#D5D7DE" mask="url(#mask-4-37)" transform="translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) " points="7 0 24 0 20 18 -1.70530257e-13 16"></polygon></g><polygon id="Rectangle-Copy-18" fill="#F8F9FB" transform="translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) " points="62 45 79 45 70 58 53 58"></polygon></g></g></g></svg></div><div class="el-empty__description"><p>暂无简介</p></div></div></div></div></div></div> -->

  <!-- </page-header-wrapper> -->
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
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 px;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px; /* 修改为50px */
  background-color: #f2f2f2;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果
*/
  z-index: 999; /* 确保菜单总是在最前面 */
}
.banner {
  text-align: center;
  margin-top: 0px;
}
.banner img {
  max-width: 100%;
  height: auto;
  transition: transform 1s ease;
}
.banner:hover img {
  transform: scale(1.1);
}
.header {
  background-color: #ffffff;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo img {
  width: 200px; /* 调整 logo 大小 */
  height: auto;
}
.menu-box {
  display: flex;
  margin-top: 0;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  height: auto;
}
.menu-box .menu-item {
  background-color: #ffffff;
  padding: 10px 20px;
  font-size: 20px; /* 修改为20px */
  cursor: pointer;
}
.menu-box .menu-item:hover {
  color: #56c4c8; /* 修改鼠标悬停时文字颜色 */
}
.menu-box .menu-item.active {
  background-color: #56c4c8;
  color: #ffffff;
}
.login-register {
  font-size: 14px;
  color: red;
}
.login-register a {
  color: red;
  text-decoration: none;
}
.content {
  display: flex;
  margin-top: 0;
  /* width: 50%; */
  margin-left: auto;
  margin-right: auto;
  height: auto;
}
.box {
  height: auto;
  width: calc(50% - 50px);
  background-color: #00000;
  padding: 50px;
}
.box h2 {
  margin-top: 10px;
}
.box p {
  padding: 5px 0px;
  line-height: 30px;
  margin-bottom: 1em;
  /* 调整段落间距 */
  font-size: 12px; /* 调整段落字体大小 */
}
.box .btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}
.box .btn:hover {
  background-color: #0056b3;
}
.box img {
  max-width: 100%;
  height: auto;
  transition: box-shadow 1s ease, transform 1s ease; /* 添加过渡效果，并且延长时间为1秒 */
}
.box img:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* 悬停时阴影效果 */
  transform: scale(1.1);
  /* 悬停时放大效果 */
}
.anniu {
  margin-top: auto;
}
.full-width-box {
  position: absolute;
  left: 0;
  right: 0;
  /* width: 100%; */
  /* width: calc(100vw); */
  /* width: calc(100vw); */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.full-width-box img {
  max-width: 100%;
  /* height: auto; */
  width: calc(100vw);
}

.newitem {
  background: #fff;
  border: 1px solid #ddd;

  padding: 10px;
  margin-bottom: 8px;
  height: 32%;
  display: flex;
  align-items: center;
}

.newcenter {
  /* right: 0; */
  margin-top: 300px;
}
</style>
<style lang="less">
.contentwarp {
  padding: 40px;
  img {
    // width: 370px;
    height: 300px;
    object-fit: fill;
  }
}
.bottomcontent {
  img {
    width: 100%;
    object-fit: contain;
  }
  .news {
    object-fit: none;
    height: 400px;
  }
}
</style>
