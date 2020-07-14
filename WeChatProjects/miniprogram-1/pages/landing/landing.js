// pages/landing/landing.js
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {
    title: "F*** my code",
    description: "Share your horror stories when writing code at Le Wagon",
    cta: "Start here"
  },

  goToStories: function() {
    wx. navigateTo({
      url: '/pages/stories/stories'
    })
  }, 

  /**
   * Component methods
   */
  methods: {

  }
})
