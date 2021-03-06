// pages/story/story.js
Page({

  /**
   * Page initial data
   */


  data: {
    //Story is object so we use curlies {}
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
    console.log(options);
    const id = options.id;
    const story = new wx.BaaS.TableObject('stories');
    const comments = new wx.BaaS.TableObject('comments');

    story.get(id).then((res) => {
      console.log(res);
      this.setData ({
      story: res.data
      })
    });

    let query = new wx.BaaS.Query ();

    query.compare('story_id','=',id);

    comments.setQuery (query).find().then((res) => {
      console.log(res);
      this.setData ({
      comments: res.data.objects
      })

    })
  },

    //binded to delete btn
  deleteComment(event) {
    let data = event.currentTarget.dataset;
    
    //delete request

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

  //binded to vote btn
  voteComment(event) {
    let page = this

    let data = event.currentTarget.dataset;
    let votes = data.votes;
    let new_votes = { votes: votes + 1 }

    //making the PUT request
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