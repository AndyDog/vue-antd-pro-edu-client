<template>
  <page-header-wrapper11 :title="false">

    <div class="imglist">
      <el-row :gutter="0">
        <el-col :xs="12" :sm="12" :lg="{ span: '4-8' }" class="card-panel-col" v-for="fit in imageList" :key="fit">
          <div>
            <el-image style="width: 100%; height: 150px" :src="fit.url" fit="contain"></el-image>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="homepagecontent1">
      <div class="homepagecontent1img">
        <el-image class="img-responsive wp-image-7 lazyloaded"
          src="http://106.54.167.222:39900/wp-content/uploads/2024/04/logo-300x296.png">
          <div slot="error" class="image-slot">
            <img width="300" height="296" src="@/assets/logo-300x296.png" alt="">
          </div>
        </el-image>
      </div>

      <div class="homepagecontent1title">
        <div>
          <div class="title">
            应急医学的使命是保障人民生命安全、健康和社会稳定
          </div>
          <div class="subtitle">
            涉及到在灾难、事故、战争、流行病等紧急情况下提供医疗救援、处理伤病患者、管理医疗资源等方面的工作
          </div>
          <div class="bottomline">
            <div class="bottomlinecenter"></div>
          </div>
        </div>

      </div>

      <div class="homepagecontentbtn">
        <el-row type="flex" :gutter="30" class="row-bg" justify="center">
          <el-col :span="10">
            <div class="grid-content bg-purple">
              <el-image style="width: 100%; height: 300px" :src="ke1image" :preview-src-list="[ke1image]">
              </el-image>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content bg-purple-light">

              <div class="introlistRightList">
                <div class="title">校园急救课程</div>
                <div class="content">
                  校园急救课程是针对学生、教职员工和校园社区成员的急救培训课程，旨在提高校园内紧急情况下的应对能力和急救技能。以下是一个校园急救课程的概述：
                  校园急救课程旨在向校园社区成员传授基本的急救技能和知识，以提高他们在校园内发生意外事件或紧急情况时的应对能力和自救能力。该课程通常由专业的急救培训机构或医疗机构提供，结合校园实际情况和学生特点，设计相应的课程内容和教学方法。
                </div>
                <div class="btn">
                  <el-button style="width: 100%;" type="warning" @click="gobook">Learn More</el-button>
                </div>

              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="ant-pro-pages-list-projects-cardList">
        <a-list :data-source="courseList" :grid="{ gutter: 24, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }">
          <a-list-item slot="renderItem" slot-scope="item">
            <a-card class="ant-pro-pages-list-projects-card" hoverable>
              <img slot="cover" :src="item.icon" :alt="item.title" />
              <!-- <a-card-meta :title="item.title">
                  <template slot="description">
                    <div>
                      {{item.subtitle}}
                    </div>
                  </template>
                </a-card-meta> -->

            </a-card>
          </a-list-item>
        </a-list>
      </div>
    </div>
  </page-header-wrapper11>
</template>

<script>
import RepositoryForm from './RepositoryForm'
import TaskForm from './TaskForm'
import FooterToolBar from '@/components/FooterToolbar'
import { baseMixin } from '@/store/app-mixin'

const fieldLabels = {
  name: '仓库名',
  url: '仓库域名',
  owner: '仓库管理员',
  approver: '审批人',
  dateRange: '生效日期',
  type: '仓库类型',
  name2: '任务名',
  url2: '任务描述',
  owner2: '执行人',
  approver2: '责任人',
  dateRange2: '生效日期',
  type2: '任务类型'
}

export default {
  name: 'AdvancedForm',
  mixins: [baseMixin],
  components: {
    FooterToolBar,
    RepositoryForm,
    TaskForm
  },
  data() {
    return {
      loading: false,
      memberLoading: false,
      activeKey: '1',
      tabdata: [
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
      // table
      columns: [
        {
          title: '成员姓名',
          dataIndex: 'name',
          key: 'name',
          width: '20%',
          scopedSlots: { customRender: 'name' }
        },
        {
          title: '工号',
          dataIndex: 'workId',
          key: 'workId',
          width: '20%',
          scopedSlots: { customRender: 'workId' }
        },
        {
          title: '所属部门',
          dataIndex: 'department',
          key: 'department',
          width: '40%',
          scopedSlots: { customRender: 'department' }
        },
        {
          title: '操作',
          key: 'action',
          scopedSlots: { customRender: 'operation' }
        }
      ],
      imageList: [
        {
          key: '1',
          url: require("@/assets/client-logo-5.png"),
        },
        {
          key: '2',
          url: require("@/assets/client-logo-6-1.png"),
        },
        {
          key: '3',
          url: require("@/assets/client-logo-7-2.png"),
        },
        {
          key: '4',
          url: require("@/assets/client-logo-8-1.png"),
        },
        {
          key: '5',
          url: require("@/assets/client-logo-9-2.png"),
        }
      ],
      errors: [],
      ke1image: require("@/assets/ke1.jpg"),
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

    handleSubmit(e) {
      e.preventDefault()
    },
    newMember() {
      const length = this.data.length
      this.data.push({
        key: length === 0 ? '1' : (parseInt(this.data[length - 1].key) + 1).toString(),
        name: '',
        workId: '',
        department: '',
        editable: true,
        isNew: true
      })
    },
    remove(key) {
      const newData = this.data.filter(item => item.key !== key)
      this.data = newData
    },
    saveRow(record) {
      this.memberLoading = true
      const { key, name, workId, department } = record
      if (!name || !workId || !department) {
        this.memberLoading = false
        this.$message.error('请填写完整成员信息。')
        return
      }
      // 模拟网络请求、卡顿 800ms
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({ loop: false })
        }, 800)
      }).then(() => {
        const target = this.data.find(item => item.key === key)
        target.editable = false
        target.isNew = false
        this.memberLoading = false
      })
    },
    toggle(key) {
      const target = this.data.find(item => item.key === key)
      target._originalData = { ...target }
      target.editable = !target.editable
    },
    getRowByKey(key, newData) {
      const data = this.data
      return (newData || data).find(item => item.key === key)
    },
    cancel(key) {
      const target = this.data.find(item => item.key === key)
      Object.keys(target).forEach(key => { target[key] = target._originalData[key] })
      target._originalData = undefined
    },
    handleChange(value, key, column) {
      const newData = [...this.data]
      const target = newData.find(item => key === item.key)
      if (target) {
        target[column] = value
        this.data = newData
      }
    },

    // 最终全页面提交
    validate() {
      const { $refs: { repository, task }, $notification } = this
      const repositoryForm = new Promise((resolve, reject) => {
        repository.form.validateFields((err, values) => {
          if (err) {
            reject(err)
            return
          }
          resolve(values)
        })
      })
      const taskForm = new Promise((resolve, reject) => {
        task.form.validateFields((err, values) => {
          if (err) {
            reject(err)
            return
          }
          resolve(values)
        })
      })

      // clean this.errors
      this.errors = []
      Promise.all([repositoryForm, taskForm]).then(values => {
        $notification['error']({
          message: 'Received values of form:',
          description: JSON.stringify(values)
        })
      }).catch(() => {
        const errors = Object.assign({}, repository.form.getFieldsError(), task.form.getFieldsError())
        const tmp = { ...errors }
        this.errorList(tmp)
      })
    },
    errorList(errors) {
      if (!errors || errors.length === 0) {
        return
      }
      this.errors = Object.keys(errors)
        .filter(key => errors[key])
        .map(key => ({
          key: key,
          message: errors[key][0],
          fieldLabel: fieldLabels[key]
        }))
    },
    scrollToField(fieldKey) {
      const labelNode = document.querySelector(`label[for="${fieldKey}"]`)
      if (labelNode) {
        labelNode.scrollIntoView(true)
      }
    },


    gobook() {
      this.$router.push('/course/courseDetail/3333')
    }
  },

}
</script>

<style lang="less" scoped>
.el-col-lg-4-8 {
  width: 20%;
}

.imglist {
  background: #FFF;
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
    background: #FFF;

    .introlistRightList {
      text-align: center;
      padding: 30px;

      .title {
        color: #f09a3e;
        font-size: 20px;
      }

      .content {
        color: #7E8890;
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
    color: #333C4E;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .fusion-text {
    color: #7E8890;

    p {
      line-height: 30px;
      font-size: 15px;
    }
  }
}
</style>
