<template>
  <div id="app">
    <div class="head">
      <div class="head_width">
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
    <router-view />
  </div>
</template>

<style lang="scss">
@charset "utf-8";
body {
  margin: 0;
  padding: 0;
}
a,
u {
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.head {
  background: #f9f9f9;
  width: 100%;
  height: 100px;
}

.head .head_width {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}

.head .head_width a {
  font-weight: bold;
  color: #262a30;
  width: 75px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  &.router-link-exact-active {
  }
}
.head .head_width a:hover {
  font-weight: bold;
  color: #ffffff;
  background: #262a30;
}




.head .head_width img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
</style>
