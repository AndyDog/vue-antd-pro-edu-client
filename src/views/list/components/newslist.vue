<template>
    <div class="newslist">


        <div v-for="item in newsList" class="newselem">
            <div class="img">
                <el-image :src="item.img" fit="contain" style="width:100%;height:100%;">
                    <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
            </div>
            <div class="flex">
                <div class="newLeft">
                    <div class="newLefttop">
                        <div>{{ item.date.split('-')[2] }}</div>
                        <div>
                            <span>
                                {{ item.date.split('-')[1] }}, </span><span> {{ item.date.split('-')[0] }}
                            </span>
                        </div>
                    </div>
                    <div class="icon-edit">
                        <i class="el-icon-edit"></i>
                    </div>
                </div>
                <div class="newRight">
                    <div class="title">{{ item.title }}</div>
                    <div class="flex publish">
                        By
                        <el-link type="warning" :underline="false">{{ item.author }}</el-link>
                        | <el-link type="warning" :underline="false">{{ item.source }}</el-link>
                    </div>
                    <div>
                        {{ item.content }}
                    </div>
                </div>
            </div>

            <div class="bottom-line flex">

                <el-link type="warning" :underline="false"> Read More <i class="el-icon-arrow-right"></i></el-link>

            </div>
        </div>




    </div>
</template>

<script>
export default {
    name: 'newslist',
    props: {
        newsList: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style lang="less" scoped>
.newslist {

    .flex {
        display: flex;
        justify-content: flex-start;

    }

    .bottom-line {
        border-bottom: 1px solid #e7e4e2;
        text-align: right;
        padding: 8px 0;
        justify-content: flex-end;
        align-items: center;
    }

    .newselem {
        margin-bottom: 65px;

        .title {
            color: #f09a3e;
            font-size: 24px;
            font-weight: 600;
        }

        .newLeft {
            div.newLefttop {
                background: #f09a3e;
                width: 80px;
                height: 80px;
                padding: 8px 0 5px;
                color: #fff;
                display: block;
                text-align: center;

                div:first-child {
                    font-size: 29px;
                    display: inline-block;
                }

                div:last-child {
                    font-size: 15px;
                }
            }

            div.icon-edit {
                background: #e7e4e2;
                width: 80px;
                height: 60px;
                padding: 8px 0 5px;
                color: #fff;
                display: block;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 5px;

                i {
                    font-size: 22px;
                    color: #f09a3e;
                }
            }
        }

        .newRight {
            flex: 1;
            margin-left: 20px;

            .publish {
                margin: 10px 0;
            }

            .el-link {
                margin: 0 6px;
            }
        }
    }


}
</style>
