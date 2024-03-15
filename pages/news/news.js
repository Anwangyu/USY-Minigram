Page({
    data: {
        logoImage: 'https://img.kindyear.cn/images/2024/03/07/a18204658171be7569751fb2ec352281.png',
        value: '',

        // current:0,
        // newslist:[{
        //     text:'这是首页界面内容'
        //   },{
        //     text:'这是分类界面内容'
        //   },{
        //     text:'这是发现界面内容'
        //   },{
        //     text:'这是收藏界面内容'
        //   },{
        //     text:'这是我的界面内容'
        //   }
        // ],
        navItems: [
            {id: 0, name: '全部新闻', active: false},
            {id: 1, name: '校友新闻', active: false},
            {id: 2, name: '母校新闻', active: false},
            {id: 3, name: '校友会新闻', active: false},
        ]
    },
    onClick: function (e) {
        const id = e.currentTarget.dataset.id;
        const navItems = this.data.navItems.map(item => {
            item.active = item.id === id;
            return item;
        });
        this.setData({navItems});
    },
    // onClick:function(event){
    //       var index = event.currentTarget.dataset.id;
    //       this.setData({
    //         current:index
    //       })
    //     },
    onShow() {
        this.getTabBar().init();
    },
});
