//app.js
App({
    onLaunch: function () {
      //展示本地存储能力
      this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0]
      console.log(wx.getStorageSync('curLang'))
    },
    globalData: {
      curLang: {},
      langList: [
        {
          'chs': '英文',
          'lang': 'en',
          "index": 0
        },
        {
          'chs': '中文',
          'lang': 'zh',
          "index": 1
        },
        {
          'chs': '日语',
          'lang': 'jp',
          "index": 2
        },
        {
          'chs': '韩语',
          'lang': 'kor',
          "index": 3
        },
        {
          'chs': '法语',
          'lang': 'fra',
          "index": 4
        },
        {
          'chs': '西班牙语',
          'lang': 'spa',
          "index": 5
        },
        {
          'chs': '阿拉伯语',
          'lang': 'ara',
          "index": 6
        },
        {
          'chs': '文言文',
          'lang': 'wyw',
          "index": 7
        },
        {
          'chs': '泰语',
          'lang': 'th',
          "index": 8
        },
        {
          'chs': '繁体中文',
          'lang': 'cht',
          "index": 9
        }
      ]
    }
})