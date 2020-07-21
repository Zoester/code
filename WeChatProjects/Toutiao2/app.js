//app.js
App({
  onLaunch: function () {
    // require SDK
    require('./sdk-wechat.3.12.0');
    let clientID = '44fea959252750eb4fcd';
    wx.BaaS.init(clientID);
    console.log('App loaded.');
  },
  
  globalData: {
    stories: [
      { content: "OMG!!", name: "Yinghui" },
      { content: "Are you sure?", name: "Sophia" }
    ]
  }
})