Page({
  data: {
     // input默认是1  
    num: 1,  
    // 使用data数据对象设置样式名  
    minusStatus: 'disabled',
    isLike: true,
    // banner
    imgUrls: [
      "http://mz.djmall.xmisp.cn/files/product/20161201/148057921620_middle.jpg",
      "http://mz.djmall.xmisp.cn/files/product/20161201/148057922659_middle.jpg",
      "http://mz.djmall.xmisp.cn/files/product/20161201/148057923813_middle.jpg",
      "http://mz.djmall.xmisp.cn/files/product/20161201/148057924965_middle.jpg",
      "http://mz.djmall.xmisp.cn/files/product/20161201/148057925958_middle.jpg"
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    // 商品详情介绍
    detailImg: [
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_1.jpg",
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_2.jpg",
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_3.jpg",
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_4.jpg",
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_5.jpg",
      "http://7xnmrr.com1.z0.glb.clouddn.com/detail_6.jpg",
    ],
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
  },
  /*跳转到购物车页面*/
  toCar() {
    wx.switchTab({
      url: '/pages/shoppingCart/shoppingCart'
    })
  },
  // 跳到购物车
  /*addCar() {
    console.log('tanqi')
    /*wx.switchTab({
      url: '/pages/shoppingCart/shoppingCart'
    })*/
 /* }, */
  // 立即购买
  immeBuy() {
     wx.redirectTo({
      url: '/pages/pendingPaymentOrder/pendingPaymentOrder'
    })
   },
   toggleDialog:function(){
    console.log('te5st')
   },
   /* wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
  },*/
  /**点击选择花色按钮、显示页面 购物车 */
  addCar: function (data) {
    var that = this;
    var animation = wx.createAnimation({//动画
      duration: 500,//动画持续时间
      timingFunction: 'linear',//动画的效果 动画从头到尾的速度是相同的
    })
    animation.translateY(0).step()//在Y轴偏移tx，单位px

    this.animation = animation
    that.setData({
      showModalStatus: true,//显示遮罩       
      animationData: animation.export()
    })
    that.setData({//把选中值，放入判断值中
      isHidden: 1,
      addCars:2,
    })
  },

  /*直接购买，弹出窗口*/
  immeBuy:function(){
      var that = this;
    var animation = wx.createAnimation({//动画
      duration: 500,//动画持续时间
      timingFunction: 'linear',//动画的效果 动画从头到尾的速度是相同的
    })
    animation.translateY(0).step()//在Y轴偏移tx，单位px

    this.animation = animation
    that.setData({
      showModalStatus: true,//显示遮罩       
      animationData: animation.export()
    })
    that.setData({//把选中值，放入判断值中
      isHidden: 1,
      addCars:3,
    })
  },


  /**隐藏选择花色区块 */
  hideModal: function (data) {

    var that = this;
    that.setData({//把选中值，放入判断值中
      showModalStatus: false,//显示遮罩       
      isHidden: 0,
    })

  },
 /*加减数量值*/
  /* 点击减号 */  
    bindMinus: function() {  
        var num = this.data.num;  
        // 如果大于1时，才可以减  
        if (num > 1) {  
            num --;  
        }  
        // 只有大于一件的时候，才能normal状态，否则disable状态  
        var minusStatus = num <= 1 ? 'disabled' : 'normal';  
        // 将数值与状态写回  
        this.setData({  
            num: num,  
            minusStatus: minusStatus  
        });  
    },  
    /* 点击加号 */  
    bindPlus: function() {  
        var num = this.data.num;  
        // 不作过多考虑自增1  
        num ++;  
        // 只有大于一件的时候，才能normal状态，否则disable状态  
        var minusStatus = num < 1 ? 'disabled' : 'normal';  
        // 将数值与状态写回  
        this.setData({  
            num: num,  
            minusStatus: minusStatus  
        });  
    },

   /*选好了的判断*/

   btn:function(e){
    var id = e.target.id
     //console.log(id)
     if (id==2) {
       //console.log('添加到购物车')
       wx.switchTab({
          url: '/pages/shoppingCart/shoppingCart'
       })


     }else if(id==3){
        //console.log('立即购买')
        wx.redirectTo({
          url:'/pages/pendingPaymentOrder/pendingPaymentOrder'
        })

     }
   },


})