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

    methods: {
        onIconTap(event) {
            const { name, type } = event.currentTarget.dataset;
            if (type === 'prefix') return;
            wx.showToast({ title: name, icon: 'none', duration: 1000 });
        },
    },
});

