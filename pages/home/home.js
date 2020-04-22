Page({
  data: {
    name: '雷潇伟',
    age: 18,
    students: [{
        id: 110,
        name: '张三',
        age: 30
      },
      {
        id: 110,
        name: '李四',
        age: 30
      },
      {
        id: 110,
        name: '王麻子',
        age: 30
      }
    ],
    counter: 18
  },
  handleBtnClick(){
    // 错误的做法 界面不会刷新
    // this.data.counter += 1
    // console.log(this.data.counter)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleBtnClickjian(){
    this.setData({
      counter: this.data.counter -1
    })
  }
})