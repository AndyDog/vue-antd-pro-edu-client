<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <a-row :gutter="16">
        <a-col class="gutter-row" v-for="item in projects" :span="6">
          <div data-v-373a1af0="" class="expert-box border-line">
            <div data-v-373a1af0="" class="">
              <img data-v-373a1af0="" :src="item.avatar" alt="" class="expert-img" />
            </div>
            <div data-v-373a1af0="" class="">
              <p data-v-373a1af0="" class="expert-name">
                {{ item.realname }}
              </p>
              <p data-v-373a1af0="" class="expert-intro">
                {{ item.introduction }}
              </p>
            </div>
          </div>
        </a-col>
      </a-row>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import { getRoleList, getServiceList } from '@/api/manage'

import StepByStepModal from './modules/StepByStepModal'
import CreateForm from './modules/CreateForm'

const columns = [
  {
    title: '#',
    scopedSlots: { customRender: 'serial' },
  },
  {
    title: '规则编号',
    dataIndex: 'no',
  },
  {
    title: '描述',
    dataIndex: 'description',
    scopedSlots: { customRender: 'description' },
  },
  {
    title: '服务调用次数',
    dataIndex: 'callNo',
    sorter: true,
    needTotal: true,
    customRender: (text) => text + ' 次',
  },
  {
    title: '状态',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' },
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
    sorter: true,
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '150px',
    scopedSlots: { customRender: 'action' },
  },
]

const statusMap = {
  0: {
    status: 'default',
    text: '关闭',
  },
  1: {
    status: 'processing',
    text: '运行中',
  },
  2: {
    status: 'success',
    text: '已上线',
  },
  3: {
    status: 'error',
    text: '异常',
  },
}

export default {
  name: 'TableList',
  components: {
    STable,
    Ellipsis,
    CreateForm,
    StepByStepModal,
  },
  data() {
    this.columns = columns
    return {
      // create model
      visible: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 加载数据方法 必须为 Promise 对象
      loadData: (parameter) => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        return getServiceList(requestParameters).then((res) => {
          return res.result
        })
      },
      selectedRowKeys: [],
      selectedRows: [],
      projects: [
        {
          title: 'aid课程001',
        },
        {
          title: 'aid课程002',
        },
        {
          title: 'aid课程003',
        },
        {
          title: 'aid课程004',
        },
      ],
    }
  },
  filters: {
    statusFilter(type) {
      return statusMap[type].text
    },
    statusTypeFilter(type) {
      return statusMap[type].status
    },
  },
  created() {
    getRoleList({ t: new Date() })
    this.getProjects()
  },
  computed: {
    rowSelection() {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange,
      }
    },
  },
  methods: {
    getProjects() {
      let that = this
      this.$http.get('http://106.14.124.163:8090/api/front/expertPage?page=1&limit=999').then((res) => {
        console.log(res)
        that.projects = res && res.data && res.data.list
        // this.loading = false
        console.log(that.projects)
      })
    },
    handleAdd() {
      this.mdl = null
      this.visible = true
    },
    handleEdit(record) {
      this.visible = true
      this.mdl = { ...record }
    },
    handleOk() {
      const form = this.$refs.createModal.form
      this.confirmLoading = true
      form.validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)
          if (values.id > 0) {
            // 修改 e.g.
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
              }, 1000)
            }).then((res) => {
              this.visible = false
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()

              this.$message.info('修改成功')
            })
          } else {
            // 新增
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
              }, 1000)
            }).then((res) => {
              this.visible = false
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()

              this.$message.info('新增成功')
            })
          }
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleCancel() {
      this.visible = false

      const form = this.$refs.createModal.form
      form.resetFields() // 清理表单数据（可不做）
    },
    handleSub(record) {
      if (record.status !== 0) {
        this.$message.info(`${record.no} 订阅成功`)
      } else {
        this.$message.error(`${record.no} 订阅失败，规则已关闭`)
      }
    },
    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced() {
      this.advanced = !this.advanced
    },
    resetSearchForm() {
      this.queryParam = {
        date: moment(new Date()),
      }
    },
  },
}
</script>

<style>
.path .path-first[data-v-63f326fb] {
  color: var(--color-text-primary);
}

.path .path-first[data-v-63f326fb]:hover {
  color: var(--color-primary);
}

.path .path-arrow[data-v-63f326fb] {
  color: var(--color-info);
  margin: 0 8px;
}

.default-main {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.section-part {
  margin-top: 13px;
  border-radius: 5px;
}

.section-title {
  color: var(--color-text-primary);
  padding: 15px 34px 22px 15px;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
}

.section-title-1 {
  color: var(--color-primary);
  height: 28px;
  line-height: 28px;
  position: relative;
  padding: 0 12px;
  margin-bottom: 10px;
  font-size: 20px;
}

.section-title-1:before {
  content: '';
  width: 4px;
  height: 20px;
  background-color: var(--color-primary);
  display: block;
  position: absolute;
  top: 5px;
  left: 0;
}

.more {
  font-size: 14px;
  float: right;
}

.more,
.more:hover {
  color: var(--color-primary);
}

.bg-white {
  background-color: #fff;
  margin-top: 15px;
}

.bg-white-1 {
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
}

.theme-shadow {
  overflow: hidden;
}

.el-carousel__container {
  height: 100%;
}

.el-carousel__container img {
  width: 100%;
  height: 100%;
  transition: transform 3s;
}

.el-carousel__container img:hover {
  transform: scale(1.1);
}

@media only screen and (max-width: 1200px) {
  .default-main {
    width: 100%;
    box-sizing: border-box;
  }

  .more {
    right: 10px;
  }
}

@media only screen and (max-width: 540px) {
  .section-title {
    font-size: 18px;
  }
}

@media screen and (max-width: 768px) {
  .ele-body {
    padding: 15px !important;
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

/* .banner {
    height: 283px
}

@media only screen and (max-width: 920px) {
    .banner {
        height:135px
    }
}

@media only screen and (max-width: 820px) {
    .banner {
        height:120px
    }
}

@media only screen and (max-width: 540px) {
    .banner {
        height:75px
    }
}

@media only screen and (max-width: 280px) {
    .banner {
        height:40px
    }
} */

.default-main {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.section-part {
  margin-top: 13px;
  border-radius: 5px;
}

.section-title {
  color: var(--color-text-primary);
  padding: 15px 34px 22px 15px;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
}

.section-title-1 {
  color: var(--color-primary);
  height: 28px;
  line-height: 28px;
  position: relative;
  padding: 0 12px;
  margin-bottom: 10px;
  font-size: 20px;
}

.section-title-1:before {
  content: '';
  width: 4px;
  height: 20px;
  background-color: var(--color-primary);
  display: block;
  position: absolute;
  top: 5px;
  left: 0;
}

.more {
  font-size: 14px;
  float: right;
}

.more,
.more:hover {
  color: var(--color-primary);
}

.bg-white {
  background-color: #fff;
  margin-top: 15px;
}

.bg-white-1 {
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
}

.theme-shadow {
  overflow: hidden;
}

.el-carousel__container {
  height: 100%;
}

.el-carousel__container img {
  width: 100%;
  height: 100%;
  transition: transform 3s;
}

.el-carousel__container img:hover {
  transform: scale(1.1);
}

@media only screen and (max-width: 1200px) {
  .default-main {
    width: 100%;
    box-sizing: border-box;
  }

  .more {
    right: 10px;
  }
}

@media only screen and (max-width: 540px) {
  .section-title {
    font-size: 18px;
  }
}

@media screen and (max-width: 768px) {
  .ele-body {
    padding: 15px !important;
  }
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

.default-main {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.section-part {
  margin-top: 13px;
  border-radius: 5px;
}

.section-title {
  color: var(--color-text-primary);
  padding: 15px 34px 22px 15px;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
}

.section-title-1 {
  color: var(--color-primary);
  height: 28px;
  line-height: 28px;
  position: relative;
  padding: 0 12px;
  margin-bottom: 10px;
  font-size: 20px;
}

.section-title-1:before {
  content: '';
  width: 4px;
  height: 20px;
  background-color: var(--color-primary);
  display: block;
  position: absolute;
  top: 5px;
  left: 0;
}

.more {
  font-size: 14px;
  float: right;
}

.more,
.more:hover {
  color: var(--color-primary);
}

.bg-white {
  background-color: #fff;
  margin-top: 15px;
}

.bg-white-1 {
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
}

.theme-shadow {
  overflow: hidden;
}

.el-carousel__container {
  height: 100%;
}

.el-carousel__container img {
  width: 100%;
  height: 100%;
  transition: transform 3s;
}

.el-carousel__container img:hover {
  transform: scale(1.1);
}

@media only screen and (max-width: 1200px) {
  .default-main {
    width: 100%;
    box-sizing: border-box;
  }

  .more {
    right: 10px;
  }
}

@media only screen and (max-width: 540px) {
  .section-title {
    font-size: 18px;
  }
}

@media screen and (max-width: 768px) {
  .ele-body {
    padding: 15px !important;
  }
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
