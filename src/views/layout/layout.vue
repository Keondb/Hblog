<template>
  <div class="layout">
    <el-container>
      <el-header style="height:100px">
        <div id="head">
          <div id="head_width">
            <router-link to="/">
              <i class="iconfont icon-homefill"></i>
              <span>首页</span>
            </router-link>
            <router-link to="/login" v-if="loginhome == 0">
              <i class="iconfont icon-peoplefill"></i>
              <span>登录</span>
            </router-link>
            <router-link to="/about" v-if="loginhome == 1">
              <i class="iconfont icon-peoplefill"></i>
              <span>我的</span>
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
      userName:''
    };
  },
  created() {
    this.userName = localStorage.getItem('user_name');
    if(this.userName){
      this.loginhome = 1;
    }
  },
};
</script>

<style>
.el-header {
  background-color: #f9f9f9;
}
.el-main{
  padding: 0;
}
#head {
  height: 100px;
}

#head #head_width {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}

#head #head_width a {
  font-weight: bold;
  color: #262a30;
  width: 75px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  /* &.router-link-exact-active {
  } */
}
#head #head_width a:hover {
  font-weight: bold;
  color: #ffffff;
  background: #262a30;
}

#head #head_width img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
</style>