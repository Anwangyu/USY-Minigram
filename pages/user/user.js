Component({
    properties: {
        scrollTop: { type: Number, value: 0 },
    },
    data: {
        logoImage: 'https://img.kindyear.cn/images/2024/03/07/a18204658171be7569751fb2ec352281.png',
        avatarImage: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
        backTopTheme: 'round',
        backTopText: '顶部',
    },
    methods: {
        onToTop(e) {
            console.log('backToTop', e);
        },
    },
    onShow() {
        this.getTabBar().init();
    }
});