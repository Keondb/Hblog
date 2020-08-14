<template>
  <div>
    <div class="index">
      <div class="conts">
        <el-card class="box-card" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
          <div class="boxs" v-for="(item,ids) in datalists" v-bind:key="ids">
            <el-card shadow="hover">
              <div class="tops"  @click="jump(item.id)">
                <span>{{item.titles}}</span>
              </div>
              <div>
                <span>{{item.created_at}}</span>
              </div>
            </el-card>
          </div>
          <p v-if="loading" style="margin-top:10px;" class="loading">
            <span></span>
          </p>
          <p
            v-if="noMore"
            style="margin-top:10px;font-size:13px;color:#ccc;text-align: center;"
          >没有更多了</p>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      datalists: [],
      count: 1, //起始页数值为0
      loading: false,
      totalPages: 0 //取后端返回内容的总页数
    };
  },
  computed: {
    noMore() {
      //当起始页数大于总页数时停止加载
      return this.count >= this.totalPages;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  created() {
    this.lists();
  },
  methods: {
    lists() {
      let _this = this;
      let page = _this.count;
      _this.$api.article
        .articleList(page)
        .then(function(res) {
          if (res.status == 200) {
            //因为每次后端返回的都是数组，所以这边把数组拼接到一起
            _this.datalists = _this.datalists.concat(res.data.data.data);
            _this.totalPages = res.data.data.last_page;
            _this.loading = false;
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
    },
    jump(value) {
      this.$router.push({ name: "/articleDetail", params: { id: value } });
    }
  }
};
</script>


<style scoped>
@import "./index.css";
</style>