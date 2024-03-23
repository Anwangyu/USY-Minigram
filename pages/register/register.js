// pages/register/register.js
Page({
  data: {
    collegeList: ['理工学院', '信息与智能工程学院'],
    majorMap: {
      '理工学院': ['计算机管理与技术', '计算机科学4+0'],
      '信息与智能工程学院': ['软件工程', '区块链']
    },

    selectedCollege: '',
    majorList: [],
    selectedMajor: '',

    provinceList: ['浙江省', '江苏省'],
    cityMap: {
      '浙江省': ['杭州市', '宁波市', '温州市'],
      '江苏省': ['南京市', '苏州市', '无锡市']
    },
    selectedProvince: '',
    cityList: [],
    selectedCity: '',

    genderList: ['男', '女'],
    selectedGender: '',
    fileList: []
  },

  options: {
    styleIsolation: 'apply-shared',
  },
  methods: {
    handleBack() {
      console.log('go back');
    },

  },


  handleAddImage(e) {
    const { fileList } = this.data;
    const { files } = e.detail;

    // 方法1：选择完所有图片之后，统一上传，因此选择完就直接展示
    this.setData({
      fileList: [...fileList, ...files], // 此时设置了 fileList 之后才会展示选择的图片
    });

    // 方法2：每次选择图片都上传，展示每次上传图片的进度
    // files.forEach(file => this.uploadFile(file))
  },
  onUploadImage(file) {
    const { fileList } = this.data;

    this.setData({
      fileList: [...fileList, { ...file, status: 'loading' }],
    });
    const { length } = fileList;

    const task = wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: 'file',
      formData: { user: 'test' },
      success: () => {
        this.setData({
          [`fileList[${length}].status`]: 'done',
        });
      },
    });
    task.onProgressUpdate((res) => {
      this.setData({
        [`fileList[${length}].percent`]: res.progress,
      });
    });
  },
  handleRemoveImage(e) {
    const { index } = e.detail;
    const { fileList } = this.data;

    fileList.splice(index, 1);
    this.setData({
      fileList,
    });
  },




  handleCollegeChange(e) {
    const index = e.detail.value;
    const selectedCollege = this.data.collegeList[index];
    const majorList = this.data.majorMap[selectedCollege];
    this.setData({
      selectedCollege: selectedCollege,
      majorList: majorList,
      selectedMajor: '',
    });
  },

  handleMajorChange(e) {
    const index = e.detail.value;
    const selectedMajor = this.data.majorList[index];
    this.setData({
      selectedMajor: selectedMajor
    });
  },

  handleProvinceChange(e) {
    const index = e.detail.value;
    const selectedProvince = this.data.provinceList[index];
    const cityList = this.data.cityMap[selectedProvince];
    this.setData({
      selectedProvince: selectedProvince,
      cityList: cityList,
      selectedCity: ''
    });
  },

  handleCityChange(e) {
    const index = e.detail.value;
    const selectedCity = this.data.cityList[index];
    this.setData({
      selectedCity: selectedCity
    });
  },

  handleNameInput: function (e) {
    const name = e.detail.value;
    this.setData({
      name: name
    });
  },

  handleIdCardInput: function (e) {
    const idCard = e.detail.value;
    this.setData({
      idCard: idCard
    });
  },
  handleGenderChange: function (e) {
    const gender = e.detail.value;
    const selectedGender = this.data.genderList[gender];
    this.setData({
      selectedGender: selectedGender
    });
  },
  handlePhoneInput: function (e) {
    const phone = e.detail.value;
    this.setData({ phone: phone });

  },

  handleClassesInput: function (e) {
    const classes = e.detail.value;
    this.setData({ classes: classes });

  },



  submitData: function () {
    console.log('提交申请按钮被点击');
    console.log('姓名:', this.data.name);
    console.log('身份证号:', this.data.idCard);
    console.log('学院:', this.data.selectedCollege);
    console.log('专业:', this.data.selectedMajor);
    console.log('省份:', this.data.selectedProvince);
    console.log('城市:', this.data.selectedCity);
    console.log('手机号:', this.data.phone);
    console.log('毕业班级:', this.data.classes);
    console.log('fileList:', this.data.fileList);
  },


})