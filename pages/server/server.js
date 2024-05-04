const simulateAuth = false; // 控制是否模拟用户授权

Page({
  data: {
    logoImage: 'https://img.kindyear.cn/images/2024/03/07/a18204658171be7569751fb2ec352281.png',
<<<<<<< HEAD
    searchIconSrc: 'https://img2.imgtp.com/2024/03/09/3X7sjoFN.png',
    xinzhiImage: 'https://img2.imgtp.com/2024/03/17/ou2wqstL.jpg',
    USYImage: 'https://img2.imgtp.com/2024/03/22/8VMjmY56.png',
    USYIdCard: 'https://img2.imgtp.com/2024/03/08/6Oan6sNx.png'
=======
    searchIconSrc: 'https://img2.imgtp.com/2024/03/09/3X7sjoFN.png'
>>>>>>> 00ded4c3a3c2367fd1864fc2995f9112f6ff29fd
  },

  onShow() {
    this.getTabBar().init();
  },
<<<<<<< HEAD

  onregisterClick: function () {
    if (simulateAuth) {
      // 模拟用户已授权的情况，使用固定的用户信息
      const userInfo = {
        nickName: '模拟用户',
        avatarUrl: 'https://example.com/avatar.png',
      };
      console.log('模拟用户授权成功', userInfo);
      wx.navigateTo({
        url: '/pages/register/register',
        success: function (res) {
        },
        fail: function (err) {
          console.error('跳转到其他页面失败', err);
        }
      });
    } else {
      // 调用微信登录授权接口
      wx.login({
        success: (res) => {
          if (res.code) {
            wx.getUserInfo({
              success: (userRes) => {
                const userInfo = userRes.userInfo;
                console.log('用户授权成功', userInfo);
                wx.navigateTo({
                  url: '/pages/register/register',
                  success: function (res) {
                  },
                  fail: function (err) {
                    console.error('跳转到其他页面失败', err);
                  }
                });
              },
              fail: (err) => {
                console.error('获取用户信息失败', err);
              }
            });
          } else {
            console.error('登录失败！' + res.errMsg);
          }
        },
        fail: (err) => {
          console.error('登录失败', err);
        }
      });
    }
  },
  onapplyClick: function () {
    wx.navigateTo({
      url: '/pages/applyCard/applyCard', // 替换为你要跳转的页面路径
      success: function (res) {
        // 成功跳转到其他页面的逻辑
      },
      fail: function (err) {
        // 跳转失败的处理逻辑
        console.error('跳转到其他页面失败', err);
      }
    });

  }







});
=======
  

});

>>>>>>> 00ded4c3a3c2367fd1864fc2995f9112f6ff29fd
