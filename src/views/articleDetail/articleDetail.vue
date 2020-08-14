<template>
  <div class="badys">
    <div class="h1">{{details.titles}}</div>
    <div class="h2">{{details.created_at}}</div>
    <div class="main">{{details.content}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: [],
      id: 0
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.shows(this);
  },
  methods: {
    shows() {
      let _this = this;
      _this.$api.article
        .articleDetail(this.id)
        .then(function(res) {
          if (res.status == 200) {
            let data = res.data.data;
            _this.details = data;
            console.log(res);
          }
        })
        .catch(function(res) {
          console.log(res);
        });
    },
    load() {
      //滑到底部时进行加载
      this.loading = true;
      setTimeout(() => {
        this.count += 1; //页数+1
        this.lists(); //调用接口，此时页数+1，查询下一页数据
      }, 2000);
    }
  }
};
</script>

<style scoped>
@import "./articleDetail.css";
</style>