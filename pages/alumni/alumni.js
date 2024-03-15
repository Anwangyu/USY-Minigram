Page({
    data: {
        logoImage: 'https://img.kindyear.cn/images/2024/03/07/a18204658171be7569751fb2ec352281.png',
        scrollItems: [
            {name: "全部", selected: true},
            {name: "我的组织", selected: false},
            {name: "校友总会", selected: false},
            {name: "地方校友会", selected: false},
            {name: "院系校友会", selected: false},
            {name: "行业校友会", selected: false},
            {name: "年纪校友会", selected: false},
            {name: "班级空间", selected: false}
        ],
        organisationItems: [
            {
                name: "校友总会", activitiesItems: "活动", sumPeople: "成员", activityCount: 5, peopleCount: 5000
            },
            {
                name: "海南校友会", activitiesItems: "活动", sumPeople: "成员", activityCount: 8, peopleCount: 150
            },
            {
                name: "广东校友会", activitiesItems: "活动", sumPeople: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "长沙校友会", activitiesItems: "活动", sumPeople: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "上海校友会", activitiesItems: "活动", sumPeople: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "河南校友会", activitiesItems: "活动", sumPeople: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "北京校友会", activitiesItems: "活动", sumPeople: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "黑龙江校友会", activitiesItems: "活动", sumPeople: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "浙江校友会", activitiesItems: "活动", sumPeople: "成员", activityCount: 5, peopleCount: 50
            }
        ]

    },
    onShow() {
        this.getTabBar().init();
    },
    handleItemClick(event) {
        const selectedItem = event.currentTarget.dataset.item;
        this.setData({
            selectedItem: selectedItem,
            scrollItems: this.data.scrollItems.map(item => {
                if (item.name === selectedItem) {
                    return {...item, selected: true};
                } else {
                    return {...item, selected: false};
                }
            })
        });
    }
});

