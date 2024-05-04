// Page({
//     data: {
//         logoImage: 'https://img.kindyear.cn/images/2024/03/07/a18204658171be7569751fb2ec352281.png',
//     },
//     onShow() {
//         this.getTabBar().init();
//     }
// });

// JSON
// {
//     "component": true,
//     "usingComponents": {
//       "t-navbar": "tdesign-miniprogram/navbar/navbar",
//       "t-image": "tdesign-miniprogram/image/image"
//     }
//   }

// Component({
//     data: {
//         fabButton: {
//             icon: 'share',
//             openType: 'share',
//         },
//     },
//     methods: {
//         handleClick(e) {
//             console.log(e);
//         },
//     },
// });
import icons from '../data';

Component({
    data: {
        icons,
    },
<<<<<<< HEAD
    onShow() {
        this.getTabBar().init();
    },
    // navigateToAlumniPage: function () {
    //     wx.switchTab({
    //         url: '/pages/ceshiPage/ceshiPage', // 跳转到 alumni 页面
    //     });
    // },
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
=======

    methods: {
        onIconTap(event) {
            const { name, type } = event.currentTarget.dataset;
            if (type === 'prefix') return;
            wx.showToast({ title: name, icon: 'none', duration: 1000 });
        },
    },
});

>>>>>>> 00ded4c3a3c2367fd1864fc2995f9112f6ff29fd
