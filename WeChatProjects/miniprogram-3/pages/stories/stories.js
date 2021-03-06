// pages/stories/stories.js
let app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {stories: app.globalData.stories},

  clickMe: function () {
      this.setData ({text: "Hello World!"})
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    this.setData({
      stories: app.globalData.stories
    })

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    this.setData({
      stories: app.globalData.stories
    })
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})