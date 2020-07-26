<template>
  <div class="index">
    <div v-for="(item,ids) in dataList" v-bind:key="ids" class="conts">
      <div class="boxs">
        <div class="tops">
          <a href="">{{item.title}}</a>
        </div>
        <div></div>
        <div></div>
        <div>
          <a href>查看</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      dataList: [
        {
          id: 1,
          title: "行业数据透视",
          text:
            "汇聚用户购物能力、日常行为和区域经济等数据，进行数据处理分析，实现大数据计算、流计算、分布式计算等算法开发，使各行业数据多维价值得以挖掘，解决各行业面临的问题。",
          bg: require("@/assets/img/bj.jpg")
        },
        {
          id: 2,
          title: "数字化服务商管理系统",
          text:
            "通过城市数据应用场景，对海量数据资源进行采集、 计算、存储、加工，形成标准化的城市的数据资产。 通过对城市业务流的分析和再造，形成城市数据平面 的核心能力层，为服务商、商家、用户提供数据服务 应用进行支撑。",
          bg: require("@/assets/img/bj.jpg")
        },
        {
          id: 3,
          title: "城市综合数据链",
          text:
            "基于全面物联网连接与数字虚拟化技术，通过精准映射 、虚实交互，实现城市级的物理空间与虚拟空间之间虚 实交融、智能操控的映射关系，通过在实体世界以及数 字虚拟空间中记录、仿真、预测各行业对象全生命周期 的运行轨迹，实现系统内信息资源、物质资源的最优化 配置。",
          bg: require("@/assets/img/bj.jpg")
        }
      ]
    };
  },

  mounted() {},
  methods: {}
};
</script>

<style>
@import "../assets/css/index.css";
</style>