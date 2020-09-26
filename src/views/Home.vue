<template>
  <div class="home">
    <el-container class="container">
      <el-header>
          <Header ></Header>
      </el-header>
      <el-container class="main">
        <el-aside width="200px">
            <Aside ></Aside>
        </el-aside>
        <el-main>
            <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './Header'
import Main from './Main'
import Aside from './Aside'

export default {
  name: "Home",
  components: {
    Header,
    Main,
    Aside,
  },
  data(){ 
    return{
    }
  },
  methods:{
  
  }
};
</script>

<style >
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main {
  flex: 1;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>




