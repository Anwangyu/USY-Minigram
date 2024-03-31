// 校友组织分页轮播图片，这里属性swiperList为总会
const swiperList = [
  {
    value: 'https://img2.imgtp.com/2024/03/22/hNZlfwOs.png',
    ariaLabel: '图片1',
  },

  {
    value: 'https://img2.imgtp.com/2024/03/22/8VMjmY56.png',
    ariaLabel: '图片2',
  },
];
Page({
  data: {
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
    imgSynopsis: 'https://img2.imgtp.com/2024/03/22/S8tgDYrl.png',
    imgLiaise: 'https://img2.imgtp.com/2024/03/22/rUAXrU8P.png',
    imgMembers: 'https://img2.imgtp.com/2024/03/22/QWpPMIBV.png',
    imgAlbum: 'https://img2.imgtp.com/2024/03/22/BBttDUba.png',
    imgMessage: 'https://img2.imgtp.com/2024/03/22/nkJOYTv5.png',
    moreIcon: 'https://img2.imgtp.com/2024/03/22/sKLbWXQd.png',
    xinzhiImage: 'https://img2.imgtp.com/2024/03/17/ou2wqstL.jpg',
    news01: 'https://img2.imgtp.com/2024/03/22/q9GWsBFw.jpg',
    news02: 'https://img2.imgtp.com/2024/03/22/Itag6XHk.jpg',
    news03: 'https://img2.imgtp.com/2024/03/22/9ApTQGmf.png',
    organisationalIcon: 'https://img2.imgtp.com/2024/03/22/lxWBILA0.png',
    activities01: 'https://img2.imgtp.com/2024/03/23/rrFSTLrY.jpg',
    activities02: 'https://img2.imgtp.com/2024/03/23/gyZgfHxS.jpg',
    activities03: 'https://img2.imgtp.com/2024/03/23/2OZXps09.jpg',
    albums01: 'https://img2.imgtp.com/2024/03/23/sAF3hwp9.jpg',
    albums02: 'https://img2.imgtp.com/2024/03/23/m8xWs7TW.jpg',
    albums03: 'https://img2.imgtp.com/2024/03/23/ZZxTFjQa.jpg',
    image: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
  },

  onShow() {
    this.getTabBar().init();
  },
  options: {
    styleIsolation: 'apply-shared',
  },
  onSynopsisClick: function () {
    wx.navigateToMiniProgram({
      appId: '',
      path: 'http://www.sanyau.edu.cn/newsDetails.asp?did=13',
      success(res) {
      },
      fail(res) {
      }
    })
  },
  onLiaiseClick: function () {
    wx.navigateTo({
      url: '../ceshiPage/ceshiPage',
    })
  },
  onMembersClick: function () {
    wx.navigateTo({
      url: '../ceshiPage/ceshiPage',

    })
  },
  onAlbumClick: function () {
    wx.navigateTo({
      url: '../ceshiPage/ceshiPage',

    })
  },
  onMessageClick: function () {
    wx.navigateTo({
      url: '../ceshiPage/ceshiPage',

    })
  },

  onMoreClick: function () {
    wx.navigateTo({
      url: '../ceshiPage/ceshiPage',
    })
  },

});
