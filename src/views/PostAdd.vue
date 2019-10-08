<template>
  <div style="padding:30px;">
    <el-form :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
    </el-form>
    <div>
    <vueEditor :config="config"/>
    </div>
  </div>
</template>
<script>

import vueEditor from "vue-word-editor";
import "quill/dist/quill.snow.css"
export default {
  name: 'app',
  data(){
    return {
      form: {

      },

      config: {
        modules: { 
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
            ['image', 'video'],
            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
          ]
        },
        theme: 'snow',
        uploadImage: {
          url: "http://localhost:3000/upload",
          headers: {
            Authorization: JSON.parse(localStorage.getItem("user") || `{}`).token
          },
          name: "file",
          uploadBefore(file){
            return true
          },
          uploadProgress(res){
          },
          uploadSuccess(res, insert){
            insert("http://localhost:3000" + res.data[0].url)
          },
          uploadError(){},
          showProgress: false
        },
        uploadVideo: {
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore(file){
            return true
          },
          uploadProgress(res){
          },
          uploadSuccess(res, insert){
            insert("http://localhost:1337" + res.data[0].url)
          },
          uploadError(){},
        }
      }
    }
  },
  components: {
    vueEditor
  },
}
</script>

<style>
</style>