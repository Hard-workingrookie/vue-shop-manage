<template>
  <div class="userInfo">
    <!-- 输入新增按钮 -->
    <div class="inputWrap">
      <el-button class="add" type="primary">+新增</el-button>
      <div class="search">
        <el-input
          class="searchIpt"
          v-model="searcInputText"
          placeholder="请输入内容"
        ></el-input>
        <el-button class="searchBtn" type="primary">搜索</el-button>
      </div>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" height="400">
      <el-table-column fixed prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope" class="operation">
          <el-button @click="edit(scope.$index, scope.row)" plain size="small"
            >编辑</el-button
          >
          <el-button type="danger" plain size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
    </div>
    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination layout="prev, pager, next" :total="1000"> </el-pagination>
    </div>
    <!-- 弹出框 -->
    <el-dialog
      title="更新用户"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <ul class="form">
        <li class="infoItem">
          <span class="title">姓名</span>
          <el-input
            class="infoIpt"
            v-model="EditInfo.name"
            :placeholder="EditInfo.name"
          ></el-input>
        </li>
        <li class="infoItem">
          <span class="title">年龄</span>
          <el-input
            class="infoIpt"
            v-model="EditInfo.age"
            :placeholder="EditInfo.age"
          ></el-input>
        </li>
        <li class="infoItem">
          <span class="title">性别</span>
          <el-select v-model="EditInfo.sex" :placeholder="EditInfo.sex">
            <el-option
              v-for="item in sexs"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </li>
        <li class="infoItem">
          <span class="title">出生日期</span>
          <el-date-picker
            v-model="EditInfo.date"
            type="date"
            :placeholder="EditInfo.date"
          >
          </el-date-picker>
        </li>
        <li class="infoItem">
          <span class="title">地址</span>
          <el-input
            class="infoIpt"
            v-model="EditInfo.address "
            :placeholder="`${EditInfo.province} ${EditInfo.city} `"
          ></el-input>
        </li>
      </ul>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>


<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      dialogVisible: false,
      searcInputText: "",
      EditInfo: [],
      date: "",
      sexs: [
        { value: "男", label: "男" },
        { value: "女", label: "女" },
      ],
    };
  },
  methods: {
    edit(index, data) {
      this.dialogVisible = true;
      this.EditInfo = data;
    },
    handleClose() {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
  computed: {
    ...mapState(["tableData"]),
  },
};
</script>


<style lang='less'  scope>
.userInfo {
  .inputWrap {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 10px;
    .add {
    }
    .search {
      display: flex;
      .searchIpt {
      }
      .searchBtn {
        margin-left: 10px;
      }
    }
  }
}
.operation {
  display: flex;
}
.form {
  .infoItem {
    list-style: none;
    display: flex;
    .title {
      text-align: start;
      width: 100px;
      margin: 16px 0;
    }
    el-input{
      flex: 1;
    }
  }
}
</style>