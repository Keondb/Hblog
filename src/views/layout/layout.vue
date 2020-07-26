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
            <router-link to="/about">
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
  name: "Layout"
};
</script>

<style>
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