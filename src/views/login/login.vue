<template>
  <div class="body">
    <div class="cards">
      <el-card class="box-card" shadow="hover">
        <div class="title">登录</div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="用户名">
            <!-- {{$store.state.name}} -->
            <el-input placeholder="请输入邮箱号" v-model="formLabelAlign.email" clearable></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="请输入密码" show-password v-model="formLabelAlign.password" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="gologin">登录</el-button>
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
  created() {},
  methods: {
    gologin() {
      let _this = this;
      if (!_this.formLabelAlign.email) {
        _this.$message.error("请输入账号");
      }
      if (!_this.formLabelAlign.password) {
        _this.$message.error("请输入密码");
      }
      let params = _this.formLabelAlign;
      _this.$api.common.login(params).then(
        function (res) {
          console.log(res)
        }
      );
    },
    onSubmit() {
      this.$message.error("错了哦，这是一条错误消息");
      console.log("submit!");
    }
  }
};
</script>

<style>
@import "./login.css";
</style>