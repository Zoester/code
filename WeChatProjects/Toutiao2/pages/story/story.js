// pages/story/story.js
Page({

  /**
   * Page initial data
   */


  data: {
    story: {},
    comments: [],
    "votes": {
      "$incr_by": -1
   }
  },

//for my stories
  getRequestData: function(res) {
    console.log(res)
    this.setData({
      story: res.data
    });
  },
// For my Comments 
  getRequestData2: function(res) {
    console.log(res)
    this.setData ({
      comments: res.data.objects
    });
  },
  /**
   * Lifecycle function--Called when page load
   */

  onLoad: function (options) {
    let page = this; 
    let id = options.id
      const request = {
        url: `https://cloud.minapp.com/oserve/v1/table/84988/record/${id}`,
        method: 'GET',
        header: { 'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
        success: page.getRequestData
      }
    wx.request(request);

      const request2 = {
        url: 'https://cloud.minapp.com/oserve/v1/table/85188/record/',
        method: 'GET',
        header: { 'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e' },
    
        data: {
          where: { // filtering comments for a specific story
            "story_id": { "$eq": id } // story id
          }
        },
        success: page.getRequestData2
      }
    wx.request(request2);
    },

  deleteComment(event) {
    let data = event.currentTarget.dataset;
    wx.request({
      url:`https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method: 'DELETE',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
      success () {
        wx.redirectTo({
          url: '/pages/index/index',
        });
      }
    });
  },

  voteComment(event) {
    let page = this

    let data = event.currentTarget.dataset;
    let votes = data.votes;
    let new_votes = { votes: votes + 1 }

    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method: 'PUT',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API key from Above
      data: new_votes,

      success(res) {
        let new_comment = res.data
        let comments = page.data.comments
        let comment = comments.find(comment => comment._id == new_comment.id)
        comment.votes = new_comment.votes
        page.setData({comments:comments})
        console.log(res)
      }
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

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