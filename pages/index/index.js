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
        logoImage: 'https://img.kindyear.cn/images/2024/03/07/a18204658171be7569751fb2ec352281.png',
        current: 0,
        autoplay: false,
        duration: 500,
        interval: 5000,
        swiperList
    },
    methods: {
        onTap(e) {
            const { index } = e.detail;

            console.log(index);
        },
        onChange(e) {
            const { current, source } = e.detail;

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
