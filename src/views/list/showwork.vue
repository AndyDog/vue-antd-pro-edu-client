<template>
  <!-- <page-header-wrapper :title="false"> -->
  <div class="showwork">
    <newsList :newsList="newsList"></newsList>
  </div>
  <!-- </page-header-wrapper> -->
</template>

<script>
import newsList from './components/newslist.vue'
export default {
  components: { newsList },
  props: {},
  data() {
    return {
      newsList: [
        {
          title: '国家应急医学研究中心专家组紧急赶赴银川开展燃气爆炸事故医疗救治工作',
          img: 'http://106.54.167.222:39900/wp-content/uploads/2016/03/52287a43fb669fb9eec898a8865b8fb0.jpg',
          date: '2016-03-16',
          author: 'JACKMA',
          source: '急救新闻',
          content:
            '6月21日20时40分许，宁夏回族自治区银川市兴庆区一烧烤店发生燃气爆炸事故，截至6月22日上午8时，事故造成31人死亡、7人受伤。 接报后，应急管理部部长王祥喜立即作出部署，要求全力组织搜救，做好伤员救治工作，尽最大努力减少伤亡，并尽快查明事故原因。应急管理部副部长宋元明在部',
        },
        {
          title:
            '国务院安委办、应急管理部召开全国安全防范工作视频会议强调 狠抓责任措施落实 及时消除事故隐患 确保全国安全形势稳定',
          img: 'http://106.54.167.222:39900/wp-content/uploads/2016/03/266381809445946364978539786.png',
          date: '2016-03-16',
          author: 'JACKMA',
          source: '急救新闻',
          content:
            '国务院安委办、应急管理部召开全国安全防范工作视频会议，深入分析当前面临的安全形势，部署重大事故隐患专项排查整治行动和五一假期安全防范工作。国务院安委会副主任、应急管理部部长王祥喜主持会议并讲话，强调要深入贯彻习近平总书记重要指示精神，落实中央领导同志批示要求和国务院安委会全体会议部署，以对党和人民高度负责的态度，全力以赴狠 接报后，应急管理部部长王祥喜立即作出部署，要求全力组织搜救，做好伤员救治工作，尽最大努力减少伤亡，并尽快查明事故原因。应急管理部副部长宋元明在部',
        },
        {
          title: '中国教科院发布全球数字教育发展指数和中国智慧教育发展报告2023',
          img: 'http://106.54.167.222:39900/wp-content/uploads/2016/03/af30d5ff82ef6753edf5a9100b07a5ec.jpg',
          date: '2016-03-16',
          author: 'JACKMA',
          source: '急救新闻',
          content:
            '在2024世界数字教育大会闭幕式上，中国教育科学研究院院长李永智正式发布全球数字教育发展指数和《中国智慧教育发展报告（2023）》。全球数字教育发展指数（Global Digital Education Development Index，简称GDEI）是中国教育科学研究院创新应用基于证据的评价范式所研制的评估各国数字教育整体发展水平的综合性 接报后，应急管理部部长王祥喜立即作出部署，要求全力组织搜救，做好伤员救治工作，尽最大努力减少伤亡，并尽快查明事故原因。应急管理部副部长宋元明在部',
        },
        {
          title: '北京小汤山医院与应急总医院开展座谈交流',
          img: 'http://106.54.167.222:39900/wp-content/uploads/2016/03/xts5.jpeg',
          date: '2016-03-16',
          author: 'JACKMA',
          source: '急救新闻编辑部',
          content:
            '3月21日上午，一场交流座谈在应急总医院举行。北京小汤山医院党委副书记、纪委书记朱江华率队，携发展协调办、党办、宣传中心、疾控办等多个部门共计11人，来到应急总医院就宣传思想文化、医疗管理等多方面进行深入探讨与交流。应 接报后，应急管理部部长王祥喜立即作出部署，要求全力组织搜救，做好伤员救治工作，尽最大努力减少伤亡，并尽快查明事故原因。应急管理部副部长宋元明在部',
        },
      ],
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style lang="less" scoped>
.showwork {
  width: 800px;
  margin: 30px auto;
  background: #f7f5f4;
  padding-bottom: 50px;
}
</style>
