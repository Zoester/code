//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    stories: [],
  },
  showStory(event) {
    let data = event.currentTarget.dataset;
    let id=data.id;

    wx.navigateTo({
      url: `/pages/story/story?id=${id}`,
    });
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },


  getRequestData: function (res) { 
    console.log(res);
    this.setData({
      stories:res.data.objects
    });
  },
  onLoad: function () {
    const stories = new wx.BaaS.TableObject ('stories');
    stories.find().then((res) => {
      console.log('res', res),
      this.setData ({
        stories: res.data.objects
      })
    })
  },

  toStories: function (e) {
    console.log(e); 
    const id=e.currentTarget.dataset.id;
    wx.navigateTo ({
      url:'story?id=' +id,
    })
  },
    
})
