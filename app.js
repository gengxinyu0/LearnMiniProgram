// 注册一个小程序示例
App({
  // 生命周期函数 
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 获取用户信息
    console.log('小程序初始化完成： onLaunch')
    // wx.request({
    //   url: '',
    // })
    // 异步调用
    // wx.getUserInfo({
    //   // 数据拿到之后回调
    //   success: function(res){
    //     console.log(res);
    //   }
    // })
    // setTimeout(function(){
    //   const err = new Error()
    //   throw err;
    // },3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log("界面显示出来了: onShow");
    console.log(options)
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("界面被隐藏时执行！：onHide")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("程序发生错误！： onError")
  }
})
