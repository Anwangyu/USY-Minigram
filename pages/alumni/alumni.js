Page({
    data: {
        logoImage: 'https://img.kindyear.cn/images/2024/03/07/a18204658171be7569751fb2ec352281.png',
        xinzhiImage: 'https://img2.imgtp.com/2024/03/17/ou2wqstL.jpg',
        scrollItems: [
            { id: 1, name: "全部", selected: true },
            { id: 2, name: "我的组织", selected: false },
            { id: 3, name: "校友总会", selected: false },
            { id: 4, name: "地方校友会", selected: false },
            { id: 5, name: "院系校友会", selected: false },
            { id: 6, name: "行业校友会", selected: false },
            { id: 7, name: "年级校友会", selected: false },
            { id: 8, name: "班级空间", selected: false }
        ],

        organisationItems: [
            {
                name: "校友总会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 5000
            },
            {
                name: "安徽校友会", activitiesItems: "活动", members: "成员", activityCount: 8, peopleCount: 150
            },
            {
                name: "澳门校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "北京校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "重庆校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "福建校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "甘肃校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "广东校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "广西校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "贵州校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "海南校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "河北校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "河南校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "黑龙江校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "湖北校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "湖南校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "吉林校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "江苏校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "江西校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "辽宁校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "内蒙古校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "信息与智能工程学院校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "盛宝金融学院校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "体育学院校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "人文学院校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "财经学院校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "理工学院校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "计算机行业校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "旅游行业校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "金融行业校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            },
            {
                name: "21级校友会", activitiesItems: "活动", members: "成员", activityCount: 5, peopleCount: 50
            }



        ],
        selectedItem: "全部",
        displayedOrganisationItems: [],
        localAlumnis: ["安徽", "澳门", "北京", "重庆", "福建", "甘肃", "广东", "广西", "贵州", "海南", "河北", "河南", "黑龙江", "湖北", "湖南", "吉林", "江苏", "江西", "辽宁", "内蒙古", "宁夏", "青海", "山东", "山西", "陕西", "上海", "四川", "台湾", "天津", "西藏", "香港", "新疆", "云南", "浙江"],
        facultyAlumnis: ["信息与智能工程学院", "盛宝金融学院", "体育学院", "人文学院", "财经学院", "理工学院"],
        industryAlumnis: ["计算机行业", "旅游行业", "体育行业", "金融行业"],
        gradeAlumnis: ["20级", "21级", "22级"],
    },

    onShow() {
        const tabBar = this.getTabBar();
        if (tabBar) {
            tabBar.init();
            this.updateDisplayedOrganisationItems(); // 在初始化标签栏后执行其他操作
        }
    },
    handleJoin: function () {
        wx.showModal({
            title: "加入成功!",
            content: "",
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定');

                } else if (res.cancel) {
                    console.log('用户点击取消');
                }
            }

        });
    },
    activitiesClick: function () {
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

    },
    membersClick: function () {
        wx.navigateTo({
            url: '../ceshiPage/ceshiPage',
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
    },
    alumniNameClick: function () {
        wx.navigateTo({
            url: '../organisationalpagings/organisationalPagings',
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
    },

    handleItemClick(event) {
        const selectedItem = event.currentTarget.dataset.item;
        this.setData({
            selectedItem: selectedItem,
            scrollItems: this.data.scrollItems.map(item => {
                if (item.name === selectedItem) {
                    return { ...item, selected: true };
                } else {
                    return { ...item, selected: false };
                }
            })
        });
        this.updateDisplayedOrganisationItems();
    },

    updateDisplayedOrganisationItems() {
        if (this.data.selectedItem === "全部") {
            // 如果选择了全部，则显示所有组织信息
            this.setData({ displayedOrganisationItems: this.data.organisationItems });
        } else {
            // 根据选择的项目动态显示组织信息
            let selectedOrganisations = [];
            const selectedItem = this.data.selectedItem;

            const localAlumnis = this.data.localAlumnis;
            const facultyAlumnis = this.data.facultyAlumnis;
            const industryAlumnis = this.data.industryAlumnis;
            const gradeAlumnis = this.data.gradeAlumnis;

            if (selectedItem === "校友总会") {
                selectedOrganisations = [this.data.organisationItems.find(item => item.name === "校友总会")]
            } else if (selectedItem === "地方校友会") {
                selectedOrganisations = this.data.organisationItems.filter(item => {
                    return localAlumnis.some(location => item.name.includes(location));
                });
            } else if (selectedItem === "院系校友会") {
                selectedOrganisations = this.data.organisationItems.filter(item => {
                    return facultyAlumnis.some(faculty => item.name.includes(faculty));
                });
            } else if (selectedItem === "行业校友会") {
                selectedOrganisations = this.data.organisationItems.filter(item => {
                    return industryAlumnis.some(industry => item.name.includes(industry));
                });
            } else if (selectedItem === "年级校友会") {
                selectedOrganisations = this.data.organisationItems.filter(item => {
                    return gradeAlumnis.some(grade => item.name.includes(grade));
                });
            }
            this.setData({ displayedOrganisationItems: selectedOrganisations });
        }
    }
});
