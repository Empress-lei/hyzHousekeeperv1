function creatSwiper() {
    var str = "";
    str += '<div class="big_img">'
    str += '<div class="swiper-container2">'
    str += '<div class="swiper-wrapper">'
    str += '</div>'
    str += '</div>'
    str += '<div class="swiper-pagination2">'
    str += '</div>'
    str += '</div>'
    return str;
}
var mySwiper;
$(document).ready(function () {
    $("body").append(creatSwiper());
    /*调起大图 S*/
    mySwiper = new Swiper('.swiper-container2', {
        loop: false,
        pagination: '.swiper-pagination2',
        observer:false,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        onSlideChangeEnd:function () {
            console.log(mySwiper.activeIndex);
        },
        preventLinksPropagation : false, //拖动时阻止click事件
        slidesPerView: 1, //容器同时显示slides的数量
        paginationClickable: true, //分页指示点可切换图片
        speed: 500,
    })
})
function initMyImgShow() {
    $('.z_addImg').unbind("click").bind('click', function (e) {
        var imgBox = $(this).parent().parent().find("img").not(".close_icon").not(".edit_icon");;
        console.log(imgBox);
        mySwiper.update();
        var i = $(this).parent().index();
        console.log(i)
        $(".big_img .swiper-wrapper").html("");
        for (var j = 0, c = imgBox.length; j < c; j++) {
            $(".big_img .swiper-wrapper").append('<div class="swiper-slide"><div class="cell"><img src="' + imgBox.eq(j).attr("src") + '" / ></div></div>');
        }
        $(".big_img").css({
            "z-index": 1001,
            "opacity": "1"
        });
        mySwiper.update();
        mySwiper.slideTo(i, 0, false);
        e.stopPropagation();
    });
    $(".big_img").on("click",
        function (e) {
            $(this).css({
                "z-index": "-1",
                "opacity": "0"
            });
            $(".big_img .swiper-wrapper").html("");
            e.stopPropagation();
        });
}

