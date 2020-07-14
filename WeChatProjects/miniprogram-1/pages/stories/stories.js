// pages/stories/stories.js
let app = getApp()

Page({
  /**
   * Page initial data
   */
  data: {
      stories: [], 
      name: ''
  },

  /**
   * Component initial data
   */
  data: {
    content: "FMC!!!",
    name: "Yinghui",
    tagline: "Bugs everywhere!"
  },



  /**
   * Component methods
   */
  methods: {

  }
})

/**
 * Lifecycle Function --Called when page load 
 */
onload:function(options) {
    this.setData ({
      stories: app.globalData.stories,
      name: 'Martin'
    })
  }

