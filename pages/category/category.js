// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'哈哈哈'
  },
  handleBtnClick(){
    console.log("进入点击函数")
    this.setData({
      message: '嘿嘿嘿'
    })
  }
 
})