<template>
  <global-footer class="footer custom-render">
    <div class="footer">
      <div data-v-0cded264="" data-v-e506c3de="" class="friendship-bg">
        <div data-v-0cded264="" class="default-main">
          <div data-v-0cded264="" class="friendship-link">
            <p data-v-0cded264=""><span data-v-0cded264="">友情链接</span></p>
            <ul data-v-0cded264="">
              <li data-v-0cded264="">
                <a data-v-0cded264="" href="http://www.moe.gov.cn" target="_blank">中华人民共和国教育部</a>
              </li>
              <li data-v-0cded264="">
                <a data-v-0cded264="" href="http://www.nies.edu.cn" target="_blank">中国教育科学研究院</a>
              </li>
              <li data-v-0cded264="">
                <a data-v-0cded264="" href="https://www.mtzyy.com.cn" target="_blank">国家应急医学研究中心</a>
              </li>
              <li data-v-0cded264="">
                <a data-v-0cded264="" href="https://xt.tcc.edu.cn" target="_blank">全国教育干部培训协作平台</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div data-v-23d43d3f="" data-v-e506c3de="">
        <div data-v-23d43d3f="" class="foot-info">
          <div data-v-23d43d3f="" class="default-main">
            <div data-v-23d43d3f="" class="copy-right-1">
              <span data-v-23d43d3f=""> 中国教育科学研究院培训中心主办 </span
              ><span data-v-23d43d3f=""
                ><a data-v-23d43d3f="" href="https://www.edu-home.cn/" target="_blank"
                  >北京安华数字应急技术有限公司运维</a
                ></span
              ><span data-v-23d43d3f=""
                ><a data-v-23d43d3f="" href="http://www.wiseloong.com/" target="_blank"
                  >上海智隆信息技术股份有限公司技术支持</a
                ></span
              >
            </div>
            <div data-v-23d43d3f="" class="copy-right-2">
              <a data-v-23d43d3f="" href="https://beian.miit.gov.cn" target="_blank">沪ICP备19000885号-8</a
              >&nbsp;&nbsp;<span data-v-23d43d3f=""> 版权所有未经允许请勿转载</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </global-footer>
</template>

<script>
import { GlobalFooter } from '@ant-design-vue/pro-layout'

export default {
  name: 'ProGlobalFooter',
  components: {
    GlobalFooter,
  },
}
</script>

<style scoped lang="less">
.friendship-bg {
  background: url(../../assets/foot-bj.png) no-repeat top;
}

.friendship-link {
  padding: 30px 24px;
  margin-top: 15px;
}

.friendship-link > p span {
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  padding: 0 0 6px 0;
  border-bottom: 2px solid #65acef;
}

.friendship-link > ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 20px 0 0;
  padding: 0 27px;
}

.friendship-link > ul li {
  width: 25%;
  font-size: 14px;
  text-align: center;
}

.friendship-link > ul li:first-child {
  text-align: left;
}

.friendship-link > ul li:last-child {
  text-align: right;
}

.friendship-link > ul li a {
  color: #aaaaab;
}

.friendship-link > ul li a:hover {
  color: var(--color-primary);
}

@media only screen and (max-width: 900px) {
  .friendship-link > ul li {
    width: 50%;
    text-align: center !important;
    margin-bottom: 5px;
  }
}

@media only screen and (max-width: 450px) {
  .friendship-link > ul li {
    width: 100%;
  }
}

.foot-info {
  background: #232323;
  text-align: center;
  padding: 33px 0 18px;
}

.foot-info .copy-right-1 {
  padding: 0 27px;
  margin-bottom: 27px;
  font-size: 14px;
}

.foot-info .copy-right-1 span {
  display: inline-block;
  width: 33.3333%;
  text-align: center;
  color: #aaaaab;
}

.foot-info .copy-right-1 span a {
  color: #aaaaab;
}

.foot-info .copy-right-1 span a:hover {
  color: var(--color-primary);
}

.foot-info .copy-right-1 span:first-child {
  text-align: left;
}

.foot-info .copy-right-1 span:last-child {
  text-align: right;
}

.foot-info .copy-right-2 {
  color: #fff;
  font-size: 12px;
}

.foot-info .copy-right-2 a {
  color: #fff;
}

.foot-info .copy-right-2 a:hover {
  color: var(--color-primary);
}

@media only screen and (max-width: 950px) {
  .foot-info .copy-right-1 span {
    width: 100%;
    text-align: center !important;
    margin-bottom: 5px;
  }
}

@media only screen and (max-width: 540px) {
  .copy-right-1 {
    display: flex;
    flex-wrap: wrap;
    white-space: nowrap;
    justify-content: center;
  }
}
</style>
