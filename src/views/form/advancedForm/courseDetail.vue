<template>
    <page-header-wrapper11 :title="false">
   
       校园急救课程详情
  
   

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
    data () {
      return {
        loading: false,
        memberLoading: false,
        activeKey: '1',
        tabdata : [
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
      }
    },
    methods: {
  
      handleSubmit (e) {
        e.preventDefault()
      },
      newMember () {
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
      remove (key) {
        const newData = this.data.filter(item => item.key !== key)
        this.data = newData
      },
      saveRow (record) {
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
      toggle (key) {
        const target = this.data.find(item => item.key === key)
        target._originalData = { ...target }
        target.editable = !target.editable
      },
      getRowByKey (key, newData) {
        const data = this.data
        return (newData || data).find(item => item.key === key)
      },
      cancel (key) {
        const target = this.data.find(item => item.key === key)
        Object.keys(target).forEach(key => { target[key] = target._originalData[key] })
        target._originalData = undefined
      },
      handleChange (value, key, column) {
        const newData = [...this.data]
        const target = newData.find(item => key === item.key)
        if (target) {
          target[column] = value
          this.data = newData
        }
      },
  
      // 最终全页面提交
      validate () {
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
      errorList (errors) {
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
      scrollToField (fieldKey) {
        const labelNode = document.querySelector(`label[for="${fieldKey}"]`)
        if (labelNode) {
          labelNode.scrollIntoView(true)
        }
      }
    },
    
  }
  </script>
  
  <style lang="less" scoped>
  
     
  
  
    .el-col-lg-4-8 {
        width: 20%;
      }
  
     .imglist{
      background: #FFF;
     }
      .homepagecontent1{
      padding: 90px 30px 45px 30px;
      .homepagecontent1img{
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .homepagecontent1title{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        .title{
          font-size: 34px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .subtitle{
          margin-bottom: 20px;
          font-size: 20px;
        }
  
        .bottomline{
          margin-bottom: 60px;
        text-align: center;
        display: flex;
        justify-content: center;
        .bottomlinecenter{
          height: 1px;
          width: 200px;
          background: #f09a3e;
          }
        }
  
  
      }
  
     .homepagecontentbtn{
      background: #FFF;
      .introlistRightList{
        text-align: center;
        padding: 30px;
        .title{
          color: #f09a3e;
          font-size: 20px;
        }
        .content{
          color: #7E8890;
          font-size: 15px;
          line-height: 30px;
          padding: 20px 0;
        }
        .btn{
          width: 100%;
        }
      }
     }
  
  
      .cardtitle{
          color: #333C4E;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 20px;
        }
      .fusion-text{
        color: #7E8890;
  
        p{
          line-height: 30px;
          font-size: 15px;
        }
      }
    }
  
  
  </style>
  