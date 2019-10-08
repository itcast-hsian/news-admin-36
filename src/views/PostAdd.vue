<template>
  <div style="width:80%; margin-top:30px;">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="内容">
        <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="form.content">
      </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // 表单的数据对象
      form: {
        title: "", // 标题
        content: "",
        categories: [],
        cover: [],
        type: 1
      }
    }
  }
}
</script>

<style>

</style>