<template>
  <div>
    <div class="body">
      <div class="cards">
        <el-card class="box-card" shadow="hover">
          <div class="title">登录</div>
          <el-form
            :model="formLabelAlign"
            :rules="rules"
            ref="formLabelAlign"
            :label-position="labelPosition"
            label-width="80px"
          >
            <el-form-item label="用户名" prop="email">
              <!-- {{$store.state.name}} -->
              <el-input placeholder="请输入邮箱号" v-model="formLabelAlign.email" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                placeholder="请输入密码"
                show-password
                v-model="formLabelAlign.password"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="gologin('formLabelAlign')">登录</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      labelPosition: "top",
      formLabelAlign: {
        email: "",
        password: ""
      },
      //自定义表单验证
      rules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { type: "email", required: true, message: "请输入正确的邮箱" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "长度不能小于6个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() {},
  methods: {
    gologin(formName) {
      let _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (!_this.formLabelAlign.email) {
            _this.$message.error("请输入账号");
          }
          if (!_this.formLabelAlign.password) {
            _this.$message.error("请输入密码");
          }
          let params = _this.formLabelAlign;
          _this.$api.common
            .login(params)
            .then(function(res) {
              // console.log(res.data);
              let datas = res.data;
              // 登录成功,提示成功信息，然后跳转到首页，同时将token保存到localstorage中, 将登录名使用vuex传递到Home页面
              if (datas.status == 200) {
                // 提示成功信息
                _this.$message({
                  message: "登录成功",
                  type: "success"
                });

                // // 跳转到首页
                setTimeout(function() {
                  _this.$router.push({ name: "Index" });
                }, 1000);
                localStorage.setItem("token", datas.data.token);
                // 将登录名使用vuex传递到Home页面
                _this.$store.commit("handleUserName", datas.data.username);
              } else {
                // 登录失败，就提示错误信息
                _this.$message({
                  message: "登录失败,",
                  type: "error"
                });
              }
            })
            .catch(function(res) {
              console.log(res.status);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    onSubmit() {
      this.$message.error("错了哦，这是一条错误消息");
      console.log("submit!");
    }
  }
};
</script>

<style scoped>
@import "./login.css";
</style>