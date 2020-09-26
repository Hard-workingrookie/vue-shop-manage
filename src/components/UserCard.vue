

<template>
  <div>
    <el-card class="box-card">
      <div class="top">
        <div class="topLeft">
          <img
            src="http://ahuntsun.gitee.io/e-sun-manage/img/user.3afb816e.png"
            alt=""
          />
        </div>
        <div class="topRight">
          <div class="name">LitterWang</div>
          <div class="identity">超级管理员</div>
        </div>
      </div>
      <div class="bottom">
        <div class="loginTime">
          <span>上次登录时间：</span>
          <span>2020-9-26</span>
        </div>
        <div class="loginAddress">
          <span>上次登录地点: </span>
          <span>天津市河西区</span>
        </div>
      </div>
    </el-card>
  </div>
</template>


<script>
export default {};
</script>


<style  lang='less' scope>
.box-card {
  display: flex;
  flex-direction: column;
  width: 400px;
  .top {
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .topLeft {
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }
    .topRight {
        margin-left:30px ;
        .name{
            font-size: 26px;
            color: #333;
            line-height: 40px;
        }
        .identity{
            color: #555;
            line-height: 40px;

        }
    }
  }
  .bottom {
    padding: 10px;
    border-top: 1px solid #ccc;
    .loginTime {
      span {
        line-height: 30px;
        font-size: 16px;
        color: #555;
        margin: 0 10px;
      }
    }
    .loginAddress {
      span {
        line-height: 30px;
        font-size: 16px;
        color: #555;
        margin: 0 10px;
      }
    }
  }
}
</style>