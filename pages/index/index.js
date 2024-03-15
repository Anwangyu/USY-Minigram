const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
    `${imageCdn}/swiper1.png`,
    `${imageCdn}/swiper2.png`,
    `${imageCdn}/swiper1.png`,
    `${imageCdn}/swiper2.png`,
    `${imageCdn}/swiper1.png`,
];
Component({
    data: {
        img1: 'https://img.kindyear.cn/images/2024/03/15/21df7584e7e8d0e950da20ecba8ede3c.png',
        img2: 'https://img.kindyear.cn/images/2024/03/15/55216829e8d3a27c3d1d0c2df8e4f161.png',
        img3: 'https://img.kindyear.cn/images/2024/03/15/3acdb0877cf4dd13bb6efff019bd031c.png',
        img4: 'https://img.kindyear.cn/images/2024/03/15/9923502a2c8ef64bb464fd913e7df456.png',
        img5: 'https://img.kindyear.cn/images/2024/03/15/b675721de2ada0e038b13bb6108c1d56.png',
        img6: 'https://img.kindyear.cn/images/2024/03/15/5d3d322d9222f96365eb3e036df60549.png',
        img7: 'https://img.kindyear.cn/images/2024/03/15/2fc78c231104a25624a8e610ebeeba07.png',
        img8: 'https://img.kindyear.cn/images/2024/03/15/3c40c788d90cf79dcebc9f1caf1d7410.png',
        logoImage: 'https://img.kindyear.cn/images/2024/03/07/a18204658171be7569751fb2ec352281.png',
        current: 0,
        autoplay: false,
        duration: 500,
        interval: 5000,
        swiperList
    },
    methods: {
        onTap(e) {
            const {index} = e.detail;

            console.log(index);
        },
        onChange(e) {
            const {current, source} = e.detail;

            console.log(current, source);
        },
        onImageLoad(e) {
            console.log(e.detail.index);
        }
    },
    onShow() {
        this.getTabBar().init();
    }
});
