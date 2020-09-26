<template>
  <div>
    <el-col>
      <h5>后台管理系统</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        mode="vertical"
        router
      >
        <el-menu-item index="/" @click="chooseMenu(1)" >
          <i class="el-icon-location"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/video" @click="chooseMenu(2)"  >
          <i class="el-icon-menu"></i>
          <span slot="title">视频管理页</span>
        </el-menu-item>
        <el-menu-item index="/userinfo" @click="chooseMenu(3)"  >
          <i class="el-icon-document"></i>
          <span slot="title">用户管理页</span>
        </el-menu-item>
        <el-menu-item index="/" @click="chooseMenu(4)" >
          <i class="el-icon-setting"></i>
          <span slot="title">其他页</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>


<script>
import { mapState, mapGetters } from "vuex";

export default {
  props: [],
  data() {
    return {
    };
  },
  methods: {
    chooseMenu(id) {
      this.$store.commit("setMenuValue", id);
    },
  },
  computed: {
    ...mapState(["menu", "path",'menuList']),
  },
  
};
</script>


<style  scope>
</style>