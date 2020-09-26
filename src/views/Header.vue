<template>
  <div class="header">
    <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        v-if="menu !== 1"
        class="breadcrumb-item"
        :to="{ path: path }"
      >
        {{ menuName }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-avatar size="large" :src="circleUrl"></el-avatar>
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  watch: {
    
  },
   computed: {
    ...mapState(["menuName", "path",'menu']),
  },
};
</script>


<style  scope>
.header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.el-icon-arrow-right {
  color: #333;
}
</style>