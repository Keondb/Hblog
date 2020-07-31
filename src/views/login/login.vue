<template>
  <div class="body">
    <div class="cards">
      <el-card class="box-card" shadow="hover">
        <div class="title">登录</div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="用户名">
            <el-input placeholder="请输入邮箱号" v-model="formLabelAlign.email" clearable ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="请输入密码" show-password v-model="formLabelAlign.password" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      formLabelAlign: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
      onSubmit() {
        this.$message.error('错了哦，这是一条错误消息');
        console.log('submit!');
      }
    }
};
</script>

<style>
@import "./login.css";
</style>