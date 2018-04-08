//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  
  onLoad: function () {
    //用户登录
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //获取登录信息
      if (userInfo) {
       console.log(userInfo)
      }else {
         console.log('testttt')
      }

    })

  }
 
})
