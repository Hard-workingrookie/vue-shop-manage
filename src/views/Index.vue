<template>
  <div class="IndexContainer">
    <div class="IndexContainer-left">
      <UserCard></UserCard>
    </div>
    <div class="IndexContainer-right">
      <div class="orderWrap" v-for="item in orderList" :key="item.id">
        <OrderCard
          :icon="item.icon"
          :money="item.money"
          :text="item.text"
        ></OrderCard>
      </div>
      <LineChart></LineChart>
    </div>
  </div>
</template>


<script>
import UserCard from "../components/UserCard";
import OrderCard from "../components/OrderCard";
import LineChart from "../components/LineChart";
export default {
  components: {
    UserCard,
    OrderCard,
    LineChart,
  },
  data() {
    return {
      orderList: [
        {
          id: 1,
          icon: "el-icon-circle-check",
          money: 1024,
          text: "今日支付订单",
        },
        {
          id: 2,
          icon: "el-icon-goods",
          money: 238,
          text: "今日收藏订单",
        },
        {
          id: 3,
          icon: "el-icon-star-off",
          money: 209,
          text: "今日未支付订单",
        },
        {
          id: 4,
          icon: "el-icon-circle-check",
          money: 982,
          text: "本月支付订单",
        },
        {
          id: 5,
          icon: "el-icon-goods",
          money: 1078,
          text: "本月收藏订单",
        },
        {
          id: 6,
          icon: "el-icon-star-off",
          money: 278,
          text: "本月未支付订单",
        },
      ],
    };
  },
};
</script>


<style lang='less'  scope>
.IndexContainer {
  display: flex;
  width: 100%;
  height: 100vh;
  .IndexContainer-left {
    width: 400px;
    height: 100vh;

  }
  .IndexContainer-right {
    margin-left: 20px;
    flex: 1;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
}
.orderWrap {
  display: flex;
  flex-wrap: wrap;
}
</style>