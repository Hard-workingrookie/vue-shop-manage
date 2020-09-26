<template>
  <div class="loginWrap">
    <div class="loginBox">
      <h3>LOGIN</h3>
      <input
        type="text"
        placeholder="username"
        class="username"
        v-model="username"
      />
      <input
        type="password"
        placeholder="password"
        class="password"
        v-model="password"
      />
      <button class="loginBtn" @click="login">
        <router-link class="loginLink" v-if="isLogin" to="/">LOGIN</router-link>
        <router-link class="loginLink" v-else to="/login">LOGIN</router-link>
      </button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.username != "" && this.password != "") {
        let obj = {
          username: this.username,
          password: this.password,
        };
        this.$store.commit("checkLogin", obj);
      } else {
        this.$message({
          message: "请输入用户名或密码",
          type: "warning",
        });
      }
    },
  },
  computed: {
    ...mapState(["isLogin"]),
  },
};
</script>


<style lang="less" scope>
.loginWrap {
  width: 100vw;
  height: 100vh;
  display: block;
  background-image: url("https://s1.ax1x.com/2020/08/28/dIFNDI.jpg ");
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginBox {
    background-color: rgba(21, 74, 83, 0.4);
    width: 380px;
    height: 400px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    h3 {
      text-align: center;
      color: #fff;
      font-weight: bolder;
      font-size: 26px;
    }
    .username {
      border: 1px solid #fff;
      width: 80%;
      outline: none;
      margin: 20px 0;
      height: 36px;
      line-height: 36px;
      border-radius: 6px;
    }
    .username::placeholder {
      text-align: center;
      font-size: 16px;
    }
    .password {
      border: 1px solid #fff;
      outline: none;
      width: 80%;
      margin: 20px 0;
      height: 36px;
      line-height: 36px;
      border-radius: 6px;
    }
    .password::placeholder {
      font-size: 16px;
      text-align: center;
    }
    .loginBtn {
      font-size: 18px;
      border: none;
      outline: none;
      color: #fff;
      background: rgba(21, 74, 83, 0.7);
      padding: 8px 20px;
      border-radius: 4px;
      cursor: pointer;
    }
    .loginLink {
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>