import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuList: [
      {
        id: 1,
        name: '首页',
        path: '/',
        opened: false
      },
      {
        id: 2,
        name: '视频管理页',
        path: '/video',
        opened: false
      },
      {
        id: 3,
        name: '用户管理页',
        path: '/userinfo',
        opened: false
      },
      {
        id: 4,
        name: '其他页',
        path: '/',
        opened: false
      }
    ],
    Tags: [],
    tableData: [
      {
        id: '1',
        date: '2016-05-07',
        name: '彭小小',
        province: '湖南',
        city: '娄底',
        address: '湖南 娄底1518 弄',
        zip: 200333,
        age :53,
        sex:'女'
      },
      {
        id: '2',
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        age :23,
        sex:'女'
      },
      {
        id: '3',
        date: '2016-05-07',
        name: '刘暗',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        age :19,
        sex:'女'
      },
      {
        id: '4',
        date: '2016-05-07',
        name: '李四',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        age :23,
        sex:'男'
      },
      {
        id: '5',
        date: '2016-05-07',
        name: '张三',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        age :23,
        sex:'女'
      }
    ],
    menuName: '首页',
    path: '/',
    menu: '1',
    loginInfo:[
      {
        username:'admin',
        password:'123456'
      }
    ],
    isLogin:false
  },
  mutations: {
    setMenuValue(state, val) {
      state.menu = val
      state.menuList.some((item) => {
        if (item.id == val) {
          state.path = item.path
          state.menuName = item.name
          let obj = {
            id: item.id,
            name: item.name,
            path: item.path
          }
          const i = state.Tags.findIndex((x) => x.id === val)
          if (i == -1) {
            state.Tags.push(obj)
          }

          return true
        }
      })
    },
    checkLogin(state,val){
      if(val.username==state.loginInfo[0].username&&val.password==state.loginInfo[0].password){
        console.log('对了');
        
        state.isLogin=true
      }
      else{
        console.log(state.loginInfo);
        
        console.log('错了');

        state.isLogin=false
      }
    },
    handleCloseTags(state, val) {
      const i = state.Tags.findIndex((x) => x.id === val)
      if (i !== -1) {
        state.Tags.splice(i, 1)
      }
    }
  },
  actions: {},
  modules: {},
  getters: {}
})
