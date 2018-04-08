//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots:true,
    autoplay:true,
    interval:500,
    duration:500,
    imgUrls:[
      '../../images/banner01.png',
      '../../images/banner01.png',
      '../../images/banner01.png',
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    children:
        [
          {
            child_id: 1,
            name: '项链',
            image: "../../images/list/list01.jpg",
          },
          {
            child_id: 2,
            name: '手链',
            image: "../../images/list/list01.jpg",
          },
          {
            child_id: 3,
            name: '吊坠',
            image: "../../images/list/list01.jpg",
          },
          {
            child_id: 4,
            name: '戒指',
            image: "../../images/list/list01.jpg",
          }
        ],
    navbar: ['全部订单', '待付款', '待发货','待收货'],
    currentTab: 0,
   
      

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
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
  },

   /*列表的几个点击事件*/
  
   navbarTap: function(e){ 
    /*做判断*/
    console.log(e.currentTarget.dataset.idx) /*索引值*/
    if (e.currentTarget.dataset.idx==0) {
      console.log('beijing')
    }else if (e.currentTarget.dataset.idx==1) {
       /*宝石*/
       var that = this
       this.setData({
         xilieTitle: that.data.xilieTitle 
       })  
       console.log('baoshi')
    }else if (e.currentTarget.dataset.idx==2){
       var that = this
       this.setData({
         xilieTitle: that.data.xilieTitle 
       })  
      console.log('zhuanshi')
    }else if (e.currentTarget.dataset.idx==3){
       var that = this
       this.setData({
         xilieTitle: that.data.xilieTitle 
       })  
        console.log('feicui')
    }else if (e.currentTarget.dataset.idx==4) {
       var that = this
       this.setData({
         xilieTitle: that.data.xilieTitle 
       })  
      console.log('sheji')
    }
    this.setData({
      
      currentTab: e.currentTarget.dataset.idx  
    })  
  },
  /*宝石*/
  gemstone:function(){
   console.log('宝石')
  }



 
})
