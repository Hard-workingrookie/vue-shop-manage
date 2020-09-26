<template>
  <div class="order-card">
    <div class="iconWrap">
      <i :class="icon" ></i>
    </div>
    <div class="info">
      <div class="money">￥  {{ money }}</div>
      <span>{{ text }}</span>
    </div>
  </div>
</template>


<script >
export default {
  props: ["icon", "money", "text"],
};
</script>


<style lang="less" scope>
.order-card {
  width: 260px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 100px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  .iconWrap {
    width: 80px;
    height: 100px;
    background-color: #299;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
        font-size: 30px;
        color: #fff;
    }
  }
  .info {
    padding-left: 20px;
    flex: 1;
    .money {
      font-size: 24px;
      color: #333;
    }
    span {
      color: #555;
      font-size: 16px;
    }
  }
}
</style>