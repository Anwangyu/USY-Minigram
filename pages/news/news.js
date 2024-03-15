Page({
    data: {
        logoImage: 'https://img.kindyear.cn/images/2024/03/07/a18204658171be7569751fb2ec352281.png',
    },
    onShow() {
        this.getTabBar().init();
    },
    navigateToAlumniPage: function () {
        wx.switchTab({
            url: '/pages/ceshiPage/ceshiPage', // 跳转到 alumni 页面
        });
    },
    gotoB: function () {
        wx.navigateTo({
            url: '/pages/ceshiPage/ceshiPage',
            success: function (res) {
                // success
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        })
    }
});
