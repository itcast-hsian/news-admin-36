<template>
  <el-row type="flex" justify="center" align="middle" class="container">
    
      <!-- 登录表单的div -->
      <div class="form-wrap">
        <h3>登录</h3>

        <!-- model：表单的数据对象 -->
        <!-- rules：表单的校验规则 -->
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
            <el-form-item label="账号" prop="username"> 
                <el-input v-model="form.username"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>
      </div>

  </el-row>
</template>

<script>
export default {
    data(){
        return {
            // 表单的数据对象
            form: {
                username: "",
                password: ""
            },

            // rules是表单校验规则
            rules: {
                username: [
                    // required代表是否必填, 错误时候的提示,trigger什么时候触发
                    { required: true, message: "请输入用户名", trigger: "blur"}
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur"}
                ]
            }
        }
    },

    methods: {
        // 提交表单
        submitForm(){
            // validate方法是element的表单才有的
            this.$refs.form.validate( valid => {
                // valid为真时候提交表单
                if(valid){
                    // 请求登录接口
                    
                }
            })
        }
    }
}
</script>

<style scoped lang="less">
// 在定位时候同时设置top和bottom，该元素的高度取两者的距离
.container{
    position: absolute;
    top:0;
    bottom:0;
    width:100%;

    h3{
        text-align: center;
        margin-bottom: 20px;
    }
}

.form-wrap{
    padding: 20px;
    border:1px #ddd solid;
    border-radius: 10px;
    width:400px;
}
</style>