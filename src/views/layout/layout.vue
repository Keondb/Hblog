<template>
  <div class="layout">
    <el-container>
      <el-header style="height:100px">
        <div id="head">
          <div class="titles">
            <span>koenblog</span>
            </div>
          <div id="head_width">
            <router-link to="/">
              <i class="iconfont icon-homefill"></i>
              <span>首页</span>
            </router-link>
            <!-- <router-link to="/login" v-if="loginhome == 0">
              <i class="iconfont icon-peoplefill"></i>
              <span>登录</span>
            </router-link> -->
            <router-link to="/about">
              <i class="iconfont icon-peoplefill"></i>
              <span>关于</span>
            </router-link>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      loginhome: 0,
      userName: ""
    };
  },
  created() {}
};
</script>
<style scoped>
@import "./layout.css";
</style>