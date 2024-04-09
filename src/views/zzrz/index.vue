<template>
    <page-header-wrapper
    >
      <template v-slot:extraContent>
        <!-- <div style="width: 155px; margin-top: -20px;"><img style="width: 100%" :src="extraImage" /></div> -->
      </template>
      <!-- <a-list
        rowKey="id"
        :grid="{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}"
        :dataSource="dataSource"
        class="card-list"
      >
        <a-list-item slot="renderItem" slot-scope="item"> -->
  
          <a-card :bordered="false">
              <a-row :gutter="16">
                <a-col class="gutter-row" v-for="(item, index) in teachingList" :span="6">
                  <div data-v-373a1af0="" class="expert-box border-line">
                    <div data-v-373a1af0="" class="">
                      <!-- <img data-v-373a1af0="" :src="item.avatar" alt="" class="expert-img" /> -->
                      <img width="150" :src="item.img" alt="" />
                    </div>
                    <div data-v-373a1af0="" class="">
                      <div data-v-373a1af0="" class="expert-name">
                        <!-- <img :src="item.img" alt="" /> -->
                        <!-- {{ item.title }} -->
                      </div>
                      <p data-v-373a1af0="" class="expert-intro">
                        {{ item.title }}
                      </p>
                    </div>
                  </div>
                </a-col>
              </a-row>
          </a-card>
  
        <!-- </a-list-item>
      </a-list> -->
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
    data () {
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
      testFun () {
        this.$message.info('快速开始被点击！')
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
    @import "~@/components/index.less";
  
    .card-list {
      :deep(.ant-card-body:hover) {
        .ant-card-meta-title>a {
          color: @primary-color;
        }
      }
  
      :deep(.ant-card-meta-title) {
        margin-bottom: 12px;
  
        &>a {
          display: inline-block;
          max-width: 100%;
          color: rgba(0,0,0,.85);
        }
      }
  
      :deep(.meta-content) {
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        height: 64px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
  
        margin-bottom: 1em;
      }
    }
  
    .card-avatar {
      width: 48px;
      height: 48px;
      border-radius: 48px;
    }
  
    .ant-card-actions {
      background: #f7f9fa;
  
      li {
        float: left;
        text-align: center;
        margin: 12px 0;
        color: rgba(0, 0, 0, 0.45);
        width: 50%;
  
        &:not(:last-child) {
          border-right: 1px solid #e8e8e8;
        }
  
        a {
          color: rgba(0, 0, 0, .45);
          line-height: 22px;
          display: inline-block;
          width: 100%;
          &:hover {
            color: @primary-color;
          }
        }
      }
    }
  
    .new-btn {
      background-color: #fff;
      border-radius: 2px;
      width: 100%;
      height: 188px;
    }
  
    .expert-box:hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
  }
  
  
  </style>
  