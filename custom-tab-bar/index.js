Component({
    data: {
        value: 'home',
        list: [
            {value: 'home', icon: 'home', ariaLabel: '首页', url: '/pages/index/index'},
            {value: 'news', icon: 'compass', ariaLabel: '新闻', url: '/pages/news/news'},
            {value: 'alumni', icon: 'usergroup', ariaLabel: '校友会', url: '/pages/alumni/alumni'},
            {value: 'user', icon: 'user', ariaLabel: '我的', url: '/pages/user/user'},
        ],
    },
    methods: {
        onChange(e) {
            const item = this.data.list.find(item => item.value === e.detail.value);
            if (item) {
                this.setData({value: e.detail.value});
                wx.switchTab({
                    url: item.url
                });
            }
        },
        init() {
            const page = getCurrentPages().pop();
            const item = this.data.list.find(item => item.url === `/${page.route}`);
            if (item) {
                this.setData({value: item.value});
            }
        }
    },
});
