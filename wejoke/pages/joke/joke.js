//logs.js
var util = require('../../utils/util.js')
var page = 1
Page({
  data: {
    logs: [],
    array: []
  }, 
  onLoad: function () {
    var that = this
  
    this.setData({

      // map(function (log) {
      //   return util.formatTime(new Date(log))
    })
     console.log('onLoad 方法执行了吗');
  this.requestNet();
  },
   upper: function(e) {
    console.log("upper>>>>>>>>>"+e)
    this.requestNet();
  },
  lower: function(e) {
    console.log("lower>>>>>>>>>"+e)
    this.requestNet();
  },
  scroll: function(e) {
    console.log("scroll>>>>>>>>>"+e)
  },
  tap: function(e) {
     console.log("tap>>>>>>>>>"+e)
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function(e) {
     console.log("tapMove>>>>>>>>>"+e)
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  // onShow:function(){
  //   console.log('onShow 方法执行了吗');
  //   this.requestNet();
  // },
  
   requestNet: function () {
    console.log('请求网络数据开始');
    // wx.showToast({
    //   title:'加载中...'
    // })
    var that = this
    let _artArray =[];
    wx.request({
      url: 'https://route.showapi.com/341-1?showapi_sign=ef07e49819e24259a37cebf35a208135&showapi_appid=27240&page='+page++,
      data: {
        // showapi_appid: '27240',
        // showapi_sign: 'ef07e49819e24259a37cebf35a208135'
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        var s = res.data;
        var v = s.showapi_res_code;
        var datas = s.showapi_res_body;
        var contentlists = datas.contentlist;
        contentlists.map(function (num) {
          return _artArray.push({message:num.title,content:num.text});
        }
        );
        that.setData({
          array:_artArray
        })


      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
})
