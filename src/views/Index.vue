<template>
    <el-container class="container">
        <!-- 侧边栏 -->
        <el-aside width="200px">
            
        </el-aside>
        <!-- 右侧的内容部分 -->
        <el-container>
            <!-- 头部 -->
            <el-header>
                <img :src="$axios.defaults.baseURL + user.user.head_img" alt="" class="head">
                <span>{{ user.user.nickname }}</span>
                <span>退出</span>
            </el-header>
            <!-- 子页面显示的内容 -->
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {

    data(){
        return {
            user: JSON.parse(localStorage.getItem("user") || `{}` )
        }
    },

    mounted(){

    }
}
</script>

<style scoped lang="less">
 .el-header, .el-footer {
    background-color: #eee;
    color: #333;
    line-height: 60px;
  }

  .el-header{
      text-align: right;

      *{
          vertical-align: middle;
      }

      .head{
          width:38px;
          height:38px;
          border-radius: 50%;
          border:1px #999 solid;
      }

      span{
          margin-left:10px;
      }
  }
  
  .el-aside {
    background-color: #333;
    color: #333;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #fff;
    color: #333;
  }
  
  .container {
    position: absolute;
    top:0;
    bottom:0;
    width:100%;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>