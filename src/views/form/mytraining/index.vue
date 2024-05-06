<template>
    <div>


        <el-tabs v-model="activeNameparent" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>

        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane v-for="item in projectsperson" :label="item.dictName" :name="item.dictCode">
                <a-list :data-source="courseList" :grid="{ gutter: 24, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }">
                    <a-list-item slot="renderItem" slot-scope="item">
                        <a-card class="ant-pro-pages-list-projects-card imgelem" hoverable @click="gobook(item)">
                            <!-- <img slot="cover" :src="item.courseImagePath" :alt="item.courseName" /> -->
                            <el-image :src="item.courseImagePath" :alt="item.courseName" fit="cover">
                                <div slot="error" class="image-slot">
                                    <img slot="cover" :src="defaultimage" :alt="item.courseName || '基础急救课程'" />
                                </div>
                            </el-image>
                            <div>
                                <div v-if="item.courseName">{{ item.courseName }}</div>
                                <div v-if="item.lecturer">主讲人：{{ item.lecturer }}</div>
                            </div>
                        </a-card>
                    </a-list-item>
                </a-list>
            </el-tab-pane>

        </el-tabs>


    </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
const uniqueBy = (arr, key) => {
    const map = new Map();
    return arr.filter((item) => {
        const k = key(item);
        return map.has(k) ? false : map.set(k, item);
    });
};
export default {
    name: "mytraining",
    //import引入的组件需要注入到对象中才能使用
    components: {},
    props: {},
    data() {
        //这里存放数据
        return {
            activeName: "",
            activeNameparent: "",
            projectsperson: [],
            ke1image: require("@/assets/ke1.jpg"),
            defaultimage: require("@/assets/WTshSAcfPFulGGZg_i-AgeF3Chw2ABgwoAAKJEK3smWg766.jpg"),
        }

    },
    //计算属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {

        getprojectsperson() {
            let that = this
            that.$http.post('/platform/queryDictionariesDetailLike', { "currentPage": 1, "size": 100000, "parentCode": "course_classification", "type": 1 }).then(res => {
                console.log(res)
                that.projectsperson = res && res.datas
                // that.projectsperson = Array.from(new Set(that.projectsperson.map(item => item.dictCode)));
                console.log(that.projectsperson)
                that.projectsperson = uniqueBy(that.projectsperson, item => item.dictCode);
                that.activeName = that.projectsperson[0].dictCode
                that.getqueryCourseList()
            })
            // queryDictionariesDetailLike({ "currentPage": 1, "size": 100000, "parentCode": "course_classification", "type": 1 }).then((res) => {
            //   console.log(res)
            //   that.projectsperson = res && res.data && res.data.list
            //   // this.loading = false
            //   // console.log(that.projects)
            // })
        },
        handleClick(tab, event) {
            this.getqueryCourseList();
        },
        getqueryCourseList() {
            let that = this
            that.$http.post('/base/queryCourseList', { "currentPage": 1, "size": 100000, "type": 1, 'dictCode': this.activeName }).then(res => {
                console.log(res)
                that.courseList = res && res.datas
                // that.projectsperson = Array.from(new Set(that.projectsperson.map(item => item.dictCode)));
                console.log(that.projectsperson)
                // that.courseList = uniqueBy(that.projectsperson, item => item.dictCode);
                // that.activeName = that.projectsperson[0].dictCode
            })
            // queryDictionariesDetailLike({ "currentPage": 1, "size": 100000, "parentCode": "course_classification", "type": 1 }).then((res) => {
            //   console.log(res)
            //   that.projectsperson = res && res.data && res.data.list
            //   // this.loading = false
            //   // console.log(that.projects)
            // })
        },

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() { this.getprojectsperson() },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { } //如果页面有keep-alive缓存功能，这个函数会触发
};
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

.ant-pro-pages-list-projects-cardList {
    //width: 70%;
    margin: 20px auto;
}

.imgelem {
    img {
        width: 100%;
    }

    // max-width: 300px;
    // max-height: 300px;
}
</style>