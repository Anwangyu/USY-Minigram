const simulateAuth = false; // 控制是否模拟用户授权

Page({
  data: {
    logoImage: 'https://img.kindyear.cn/images/2024/03/07/a18204658171be7569751fb2ec352281.png',
    searchIconSrc: 'https://img2.imgtp.com/2024/03/09/3X7sjoFN.png',
    xinzhiImage: 'https://img2.imgtp.com/2024/03/17/ou2wqstL.jpg'
  },

  onShow() {
    this.getTabBar().init();
  },

  onregisterClick: function() {    
    if (simulateAuth) {
      // 模拟用户已授权的情况，使用固定的用户信息
      const userInfo = {
        nickName: '模拟用户',
        avatarUrl: 'https://example.com/avatar.png',
        // 其他字段...
      };
      console.log('模拟用户授权成功', userInfo);
      // 在这里进行后续的业务处理，比如展示用户信息等
      // 模拟用户授权成功后跳转到其他界面
      wx.navigateTo({
        url: '/pages/register/register', // 替换为你要跳转的页面路径
        success: function(res) {
          // 成功跳转到其他页面的逻辑
        },
        fail: function(err) {
          // 跳转失败的处理逻辑
          console.error('跳转到其他页面失败', err);
        }
      });
    } else {
      // 调用微信登录授权接口
      wx.login({
        // 登录成功后调用微信授权接口获取用户信息
        success: (res) => {
          if (res.code) {
            wx.getUserInfo({
              success: (userRes) => {
                const userInfo = userRes.userInfo;
                console.log('用户授权成功', userInfo);
                // 在这里进行后续的业务处理
                // 用户授权成功后跳转到其他界面
                wx.navigateTo({
                  url: '/pages/register/register', // 替换为你要跳转的页面路径
                  success: function(res) {
                    // 成功跳转到其他页面的逻辑
                  },
                  fail: function(err) {
                    // 跳转失败的处理逻辑
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
  onapplyClick:function(){
    wx.navigateTo({
        url: '/pages/applyCard/applyCard', // 替换为你要跳转的页面路径
        success: function(res) {
          // 成功跳转到其他页面的逻辑
        },
        fail: function(err) {
          // 跳转失败的处理逻辑
          console.error('跳转到其他页面失败', err);
        }
      });

  }







});
