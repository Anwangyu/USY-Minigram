// pages/register/register.js
Page({
  data: {
    collegeList: ['理工学院', '信息与智能工程学院'],
    majorMap: {
      '理工学院': ['计算机管理与技术', '计算机科学4+0'],
      '信息与智能工程学院': ['软件2101', '软件2102', '区块链2101']
    },

    department: '',
    majorList: [],

    genderList: ['男', '女'],
    selectgender: null
  },

  options: {
    styleIsolation: 'apply-shared',
  },
  methods: {
    handleBack() {
      console.log('go back');
    },

  },

  handleCollegeChange(e) {
    const index = e.detail.value;
    const department = this.data.collegeList[index];
    const majorList = this.data.majorMap[department];
    this.setData({
      department: department,
      majorList: majorList,
      className: '',
    });
  },

  handleMajorChange(e) {
    const index = e.detail.value;
    const className = this.data.majorList[index];
    this.setData({
      className: className
    });
  },

  handleNameInput: function (e) {
    const name = e.detail.value;
    this.setData({
      name: name
    });
  },
  handleGenderChange: function (e) {
    const gender = e.detail.value;

    const selectgender = this.data.genderList[gender];
    this.setData({

      selectgender: selectgender,
      gender: gender
    });
  },
  handleAdminnionYearInput: function (e) {
    const admissionYear = e.detail.value;
    this.setData({
      admissionYear: admissionYear
    })
  },
  handleIdCardInput: function (e) {
    const schoolID = e.detail.value;
    this.setData({
      schoolID: schoolID
    });
  },





  submitData: function () {
    console.log('提交申请按钮被点击');
    console.log('姓名:', this.data.name);
    console.log('性别:', this.data.gender);
    console.log('入学年份:', this.data.admissionYear);
    console.log('学号:', this.data.schoolID);
    console.log('学院:', this.data.department);
    console.log('专业班级:', this.data.className);

  },


})